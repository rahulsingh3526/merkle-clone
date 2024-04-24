import Image from "next/image";

import merkle from "../../public/assets/merkle.png";
import laptop from "../../public/assets/trade-laptop.jpg";
import mobile from "../../public/assets/trade-mobile.png";

export default function Home() {
  return (
    <div className="h-screen">
      <nav className="flex items-center justify-between bg-gray-800 bg-opacity-0 p-4">
        <div className="flex items-center">
          <a href="#" className="flex-shrink-0 mr-6">
            <Image className="h-8 w-auto" src={merkle} alt="Company Logo" />
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
          <p className="font-bold text-7xl text-white">LEVEL UP YOUR TRADING</p>
          <p className="text-white">
            The first-ever gamified perp DEX Trade, level up, and unlock instant
            rewards
          </p>
          <button className="text-[#6B6B6E] bg-[#A5F76C] font-semibold rounded-2xl px-3 py-2">
            Launch App
          </button>
        </div>
      </section>

      <div className="flex justify-center border-2 border-red-500 items-center relative ">
        <Image
          className="absolute max-h-full max-w-full mx-20"
          src={laptop}
          alt="Laptop Image"
        />

        <Image
          className=" h-full w-auto  z-10"
          src={mobile}
          alt="Mobile Image"
        />
      </div>
    </div>

    // https://pokeapi.co/api/v2/pokemon/${id}
  );
}
