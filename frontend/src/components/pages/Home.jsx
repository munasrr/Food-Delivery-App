import React, { lazy, Suspense } from "react";
import FeaturesSection from "./FeaturesSection";
import RestaurantSection from "./RestaturantSection";
import Testimonials from "./Testimonials";
import DeliveryExperience from "./DeliveryExperience";
import Order from "./Order";

const Header = lazy(() => import("./Header"));
const Hero = lazy(() => import("./Hero"));
const HomePage = lazy(() => import("./HomePage"));
const Footer = lazy(() => import("./Footer"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="relative top-16">
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RestaurantSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <DeliveryExperience />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Order />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
