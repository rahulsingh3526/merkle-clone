"use client";
import Image from "next/image";

import merkle from "../../public/assets/merkle.png";

import laptop from "../../public/assets/trade-laptop.jpg";
import mobile from "../../public/assets/trade-mobile.png";
import { useIStore } from "./store";
import { useState } from "react";

export default function Home() {
  const { num, increase, name, changeName } = useIStore();
  const [names, setName] = useState<string>();

  return (
    <div className="min-h-screen">
      {/* <div>{num}</div>
      <button onClick={() => increase(2)}> increase</button>
      <div>{name}</div>
      <input
        type="text"
        value={names}
        onChange={(e) => changeName(e.target.value)}
      /> */}
      <button onClick={() => setName(names)}></button>
      <nav className="flex items-center justify-between bg-gray-800 bg-opacity-0 div -4">
        <div className="flex items-center">
          <a href="#" className="flex-shrink-0 mr-6">
            <Image className="h-8 w-full" src={merkle} alt="Company Logo" />
          </a>
          <div className="text-white text-xl font-semibold">Merkle Trade</div>
        </div>
        <ul className="flex items-center">
          <li>
            <a href="#" className="text-[#6B6B6E] hover:text-white px-3 py-2">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-[#6B6B6E] hover:text-white px-3 py-2">
              Discord
            </a>
          </li>
          <li>
            <a href="#" className="text-[#6B6B6E] hover:text-white px-3 py-2">
              Telegram
            </a>
          </li>
          <li>
            <a href="#" className="text-[#6B6B6E] hover:text-white px-3 py-2">
              Medium
            </a>
          </li>
          <li>
            <button className="text-[#6B6B6E] bg-[#A5F76C] rounded-2xl px-3 py-2">
              Launch App
            </button>
          </li>
        </ul>
      </nav>

      <section>
        <div className="flex flex-col gap-2 items-center">
          <div className="font-bold text-7xl text-white">
            LEVEL UP YOUR TRADING
          </div>
          <div className="text-white">
            The first-ever gamified perp DEX Trade, level up, and unlock instant
            rewards
          </div>
          <button className="text-[#6B6B6E] bg-[#A5F76C] font-semibold rounded-2xl px-3 py-2">
            Launch App
          </button>
        </div>
      </section>

      <div className="flex justify-center border-2 ">
        <div>
          {" "}
          <div className="flex justify-center m-4 lg:m-16 ">
            {" "}
            <div className=" py-16">
              <Image
                className=" h-full w-full md:h-auto  rounded-md border-8 border-[#2A2D32]"
                src={laptop}
                alt="Laptop Image"
              />
            </div>
            <div className="  my-8 -ml-8">
              <Image
                className=" h-full w-full rounded-lg border-8 border-[#2A2D32]"
                src={mobile}
                alt="Mobile Image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-around div -5 m-5 ">
        <div>
          <div>total volume</div>

          <div>7.28B</div>
        </div>
        <div className="border-l-2 border-green-400 h-5 w-0"></div>
        <div>
          <div>total value locked</div>

          <div>5M</div>
        </div>{" "}
        <div></div>
        <div>
          <div>total trades</div>

          <div>135753</div>
        </div>
      </div>

      <div className=" flex w-full h-full div -8 md:div -16 justify-center items-center relative bg-red-400">
        <div className="absolute inset-y-auto left-10 md:left-16 w-1/3 h-auto">
          {" "}
          <Image
            className="w-full h-auto"
            alt="middle image"
            width={1000}
            height={200}
            src="https://merkle.trade/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsshot-gamified-inventory.d17e9f43.png&w=1920&q=75"
          />
        </div>

        <div className="w-1/4 h-1/4"> </div>
        <div className="w-1/2 h-1/2 z-10">
          {" "}
          <Image
            className="w-full h-auto"
            alt="middle image"
            width={1000}
            height={200}
            src="https://merkle.trade/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsshot-gamified-missions.95fd3d3c.png&w=1920&q=75"
          />
        </div>
        <div className="w-1/4 h-1/4">
          {" "}
          <Image
            className="w-full h-auto"
            alt="middle image"
            width={1000}
            height={200}
            src="https://merkle.trade/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsshot-gamified-reward.8096c8a3.png&w=1920&q=75"
          />
        </div>
      </div>

      <div className="grid grid-cols-6">
        <div className=" border-2 border-green-400">hello</div>
        <div className=" border-2 border-green-400">hello</div>
        <div className=" border-2 border-green-400">hello</div>
        <div className=" border-2 border-green-400">hello</div>
        <div className=" border-2 border-green-400">hello</div>
        <div className=" border-2 border-green-400">hello</div>
      </div>
    </div>
  );
}
