"use client"
import { HeroSection,HorizontalScrollSection, Products, Reviews } from "@/components";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <HorizontalScrollSection/>
      <Products/>
      <Reviews/>
    </main>
  );
}
