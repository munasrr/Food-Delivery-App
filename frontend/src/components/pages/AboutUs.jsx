import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-24 p-4 lg:p-8 bg-background text-text ">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary dark:text-primary-dark">About Us</h1>
          <p className="text-lg text-text">
            Discover more about our journey, mission, and values.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark">Our Story</h2>
          <p className=" text-text leading-relaxed ">
            Welcome to Foodie, your number one source for all things food. We're dedicated to giving you the very best of food delivery service, with a focus on reliability, customer service, and uniqueness.
            <br /><br />
            Founded in 2020 by a group of food enthusiasts, Foodie has come a long way from its beginnings. When we first started out, our passion for providing the best food delivery service drove us to do intense research and gave us the impetus to turn hard work and inspiration into a booming online store.
            <br /><br />
            We now serve customers all over the country and are thrilled to be a part of the fair trade wing of the food industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark">Our Mission</h2>
          <p className=" text-text leading-relaxed ">
            Our mission is to provide an unparalleled food delivery experience for our customers, ensuring the highest quality food, delivered quickly and efficiently. We strive to offer a wide variety of dishes that cater to all tastes and dietary requirements, always with a smile and a commitment to excellence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark">Our Values</h2>
          <ul className="list-disc list-inside  text-text leading-relaxed ">
            <li>Customer Satisfaction: Our top priority is to ensure that our customers are happy with every order.</li>
            <li>Quality: We partner with top restaurants to offer the best food quality possible.</li>
            <li>Integrity: We believe in honest and transparent business practices.</li>
            <li>Innovation: We continuously seek to improve our services and introduce new features.</li>
            <li>Sustainability: We are committed to eco-friendly practices and reducing our carbon footprint.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark">Meet the Team</h2>
          <p className=" text-text leading-relaxed ">
            Our team of dedicated professionals works tirelessly to ensure your experience with Foodie is nothing short of amazing. We come from diverse backgrounds, bringing together a wealth of knowledge and expertise to serve you better.
          </p>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-dark">Get in Touch</h2>
          <p className=" text-text leading-relaxed mb-4 ">
            We love to hear from our customers! Whether you have a question about our service, want to give feedback, or just want to say hello, feel free to get in touch with us.
          </p>
          <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors dark:bg-primary-dark dark:hover:bg-orange-700">
            Contact Us
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
