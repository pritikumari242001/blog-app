import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Creator from "../Home/Creator";
import Sports from "../Home/Sports";
import Coding from "../Home/Coding";
import Entertainment from "../Home/Entertainment";
import Business from "../Home/Business";
import BlogImageCarousel from "../Home/BlogImageCarousel";

function Home() {
  return (
    <div>
      <BlogImageCarousel />
      <Hero/>
      <Trending />
      <Sports/>
      <Coding/>
      <Devotional />
      <Entertainment />
      <Business/>
      <Creator />


    </div>
  );
}

export default Home;
