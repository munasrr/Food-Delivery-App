import express from 'express';
import cookieParser from 'cookie-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import foodRoutes from './routes/foodRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import path from 'path';
import webhookRoutes from './routes/webhookRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Add this line
app.use(cors());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Food Delivery API',
      version: '1.0.0',
      description: 'API documentation for food delivery operations',
    },
    servers: [{ url: `http://localhost:${port}` }],
    components: {
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Path to API docs
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/stripe', webhookRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
