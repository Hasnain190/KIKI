import React from "react";
import Hero from "../src/components/Hero";
import Gallery from "../src/components/Gallery";
import Stats from "../src/components/Stats";
import SocialLinks from "../src/components/SocialLinks";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mt-12">
        <Gallery />
      </section>

      <section className="mt-12 grid md:grid-cols-2 gap-8 items-start">
        <SocialLinks />

        <Stats />
      </section>
    </>
  );
}
