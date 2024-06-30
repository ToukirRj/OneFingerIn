
"use client";
import Image from "next/image";
import Segment from "../Segment";
import Search from "../Search";
import Slider from "../Slider";
import Cascade from "../Cascade";
import Cards from "../Cards";

const Home = () => (
  <div>
    <div className="grid grid-cols-5 space-x-4 py-5">
      <div className="col-span-3">
        <div className="bg-[#eef0f3] rounded-3xl px-5 pt-5 pb-8 mb-4">
          <div className="flex items-center justify-between">
            <Segment></Segment>
            <h4 className="text-md font-semibold">Today: Jun 24, Sat</h4>
          </div>
          <div className="w-full relative">
            <Search></Search>
          </div>
          <div className="w-full relative">
            <Slider></Slider>
          </div>
        </div>
        <div className="bg-[#eef0f3] rounded-3xl h-[700px] p-5">
          <Cascade></Cascade>
          <Cards></Cards>
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-[#F4F6F9] rounded-3xl h-full relative overflow-hidden">
          <Image src='/hill.png' alt="hill" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"/>
        </div>
      </div>
    </div>
  </div>
);

export default Home;