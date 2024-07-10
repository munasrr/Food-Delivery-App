import foodModel from '../models/foodModel.js';
import fs from 'fs';

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    const baseUrl = `${req.protocol}://${req.get('host')}/uploads/`;

    const foodsWithImages = foods.map((food) => ({
      ...food._doc, // Spread the original food document
      image: `${baseUrl}${food.image}`,
    }));

    res.json({ success: true, data: foodsWithImages });
    console.log(res.foods);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error' });
  }
};

// add food
const addFood = async (req, res) => {
  if (!req.file) {
    return res.json({ success: false, message: 'No file uploaded' });
  }

  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: 'Food Added' });
  } catch (error) {
    console.log('Error saving food:', error);
    res.json({ success: false, message: 'Error' });
  }
};

// delete food
const removeFood = async (req, res) => {
  try {
    // Check if the food item exists
    const food = await foodModel.findById(req.params.id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: 'Food item not found' });
    }

    // Delete the image file if it exists
    if (food.image) {
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) {
          console.error('Error deleting image file:', err);
        }
      });
    }

    // Delete the food item from the database
    await foodModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Food Removed' });
  } catch (error) {
    console.log('Error removing food:', error);
    res.status(500).json({ success: false, message: 'Error removing food' });
  }
};

// update food
const updateFood = async (req, res) => {
  const { id } = req.params;

  try {
    const food = await foodModel.findById(id);
    if (!food) {
      return res
        .status(404)
        .json({ success: false, message: 'Food item not found' });
    }

    // Update the food fields
    food.name = req.body.name || food.name;
    food.description = req.body.description || food.description;
    food.price = req.body.price || food.price;
    food.category = req.body.category || food.category;

    if (req.file) {
      // Delete the old image file if it exists
      if (food.image) {
        fs.unlink(`uploads/${food.image}`, (err) => {
          if (err) {
            console.error('Error deleting old image file:', err);
          }
        });
      }
      // Update the image with the new file
      food.image = req.file.filename;
    }

    await food.save();
    res.json({ success: true, message: 'Food Updated', data: food });
  } catch (error) {
    console.log('Error updating food:', error);
    res.status(500).json({ success: false, message: 'Error updating food' });
  }
};

//get category
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json({ success: true, data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
export { listFood, addFood, removeFood, updateFood, getCategories };
