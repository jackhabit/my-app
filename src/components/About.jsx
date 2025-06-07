import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
        About Us
      </h1>
      <p className="mb-4 text-lg">
        Welcome to{" "}
        <span className="font-semibold text-green-700">Food and Things</span>!
        We are dedicated to providing you with the best products at the best
        prices.
      </p>
      <p className="mb-4 text-base">
        Our mission is to make shopping easy and enjoyable for everyone. Whether
        you're looking for groceries, gadgets, or gifts, we've got you covered!
        <span className="block my-2" />
        Did I say gadgets? I meant{" "}
        <span className="italic text-blue-700">furniture</span> of course, to go
        with that whole chicken or ice cream. Why not buy some lovely{" "}
        <span className="italic text-pink-700">perfume</span> for the dinner?
        You can never go wrong with smelling good!
        <span className="block my-2" />
        Food and Things is where you can buy a whole set of things needed for a
        date or a family dinner. Are you in need of{" "}
        <span className="italic text-purple-700">mascara</span> to make your
        eyes pop? Or maybe some
        <span className="italic text-red-700"> lipstick</span> to make those
        lips more inviting?
        <span className="block my-2" />
        Welcome to Food and Things, we have what you need! Come one, come all
        and buy things from Food and Things.
      </p>
      <p className="mt-6 text-center text-gray-600">
        Thank you for choosing{" "}
        <span className="font-semibold text-green-700">Food and Things</span>.
        We hope you have a great shopping experience!
      </p>
    </div>
  );
};

export default About;
