"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Coin {
  id: string;
  pair: string; // например, "Bitcoin / BTC"
  price: string;
  change24h: string;
  marketCap: string;
  volume24h: string;
  chartData: number[]; // упрощенно для мини-графика
}

export default function Market() {
  const coin = Array(10).fill({
    pair: "Bitcoin / BTC",
    price: "$64,242.10",
    change: "+2.45%",
    marketCap: "$1,265,342,215.12",
    volume: "$32,142,541.00",
  });

  const coins = [
    {
      name: "Bitcoin",
      symbol: "Bitcoin",
      price: "₹ 28,214,25.341",
      change: "5.76%",
      isUp: true,
      icon: "/BTC.svg",
    },
    {
      name: "BTS",
      symbol: "BTS",
      price: "₹ 2,541.12",
      change: "5.76%",
      isUp: false,
      icon: "/BTS.svg",
    },
    {
      name: "DGD",
      symbol: "DGD",
      price: "₹ 284.64",
      change: "5.76%",
      isUp: true,
      icon: "/DGD.svg",
    },
    {
      name: "Ethos",
      symbol: "Ethos",
      price: "₹ 1,146,25.96",
      change: "5.76%",
      isUp: false,
      icon: "/ETHOS.svg",
    },
    {
      name: "KMD",
      symbol: "KMD",
      price: "₹ 245.21",
      change: "5.76%",
      isUp: false,
      icon: "/KMD.svg",
    },
    {
      name: "Etp",
      symbol: "Etp",
      price: "₹ 420.83",
      change: "5.76%",
      isUp: true,
      icon: "/ETP.svg",
    },
  ];
  return (
    <header className="min-h-screen ">
      <div className="bg-background text-color flex justify-between items-center py-8 px-41.5">
        <Link href="/" className="">
          <Image
            src="/Logo.svg"
            alt="Описание картинки"
            width={200}
            height={0}
            className=" "
          />
        </Link>
        <div>
          <nav className="flex justify-between gap-20">
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/market" className="">
                Market
              </Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/trade" className="">
                Trade
              </Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/earn" className="">
                Earn
              </Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/about" className="">
                About
              </Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/career" className="">
                Career
              </Link>
            </li>
          </nav>
        </div>
        <div>
          <nav className="flex justify-between items-center gap-5 text-colorall">
            <li className="list-none text-xl">Log in</li>
            <li className="list-none text-xl border-2 border-blue-500 p-2 rounded-2xl bg-blue-500">
              Sign up
            </li>
          </nav>
        </div>
      </div>
      <main>
        <section className="relative mx-52 mt-30 text-color ">
          <div className=" mx-auto">
            <h1 className="flex justify-center items-center mb-15 text-5xl ">
              Featured Coins
            </h1>

            <div className="flex justify-between  gap-8">
              {coins.map((coin) => (
                <div
                  key={coin.symbol}
                  className="h-105 py-6 rounded-xl border border-background"
                >
                  <div className="flex justify-center items-center gap-3 mb-6">
                    <div className="rounded-full bg-background flex items-center justify-center font-bold">
                      <img
                        src={coin.icon}
                        alt={coin.symbol}
                        className="w-12 object-contain"
                      />
                    </div>
                  </div>
                  <span className="flex justify-center items-center font-medium">
                    {coin.symbol} / BTC
                  </span>
                  <span
                    className={`text-base flex justify-center ${coin.isUp ? "text-green-500" : "text-red-500"}`}
                  >
                    {coin.change}
                  </span>
                  <div className="flex justify-center text-xl font-bold mt-20">
                    {coin.price}
                  </div>
                  <svg
                    className={`w-full h-10 ${coin.isUp ? "text-green-500" : "text-red-500"} stroke-current`}
                  ></svg>
                </div>
              ))}
            </div>
          </div>
          <span className="absolute mt-30 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></span>
        </section>
        <div className="my-30 "></div>
        <section className="mx-41.5">
          <div className=" bg-backgroundHeader text-color p-6 rounded-xl border-gray-800">
            {/* Header / Tabs */}
            <div className="flex justify-center  mb-3  gap-6 p-8 bg-background ">
              {[
                "Watchlist",
                "USDT",
                "BTC",
                "TRX",
                "DAI",
                "BUSD",
                "Defi",
                "BNB",
                "XPR",
              ].map((tab) => (
                <Link
                  key={tab}
                  href={`/trade/${tab.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors whitespace-nowrap text-xl font-normal"
                >
                  {tab}
                </Link>
              ))}
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Поиск не работает"
                  className="border-2 p-2 rounded-xl bg-background"
                />
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto px-30 ">
              <table className="w-full min-w-200  border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-color text-xs uppercase tracking-wider">
                    <th className="px-4 py-2 font-normal">Coin Name</th>
                    <th className="px-4 py-2 font-normal">Price</th>
                    <th className="px-4 py-2 font-normal">24h Change</th>
                    <th className="px-4 py-2 font-normal">Volume(24h)</th>
                    <th className="px-4 py-2 font-normal">24h High</th>
                    <th className="px-4 py-2 font-normal">Market Cap</th>
                    <th className="px-4 py-2 font-normal text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {coin.map((coin, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#181A20] transition-colors group cursor-pointer"
                    >
                      <td className="px-4 py-4 rounded-l-lg border-y border-l border-transparent group-hover:border-gray-700">
                        <div className="flex justify-center items-center gap-3">
                          <Image
                            src="/BookmarkSimple.svg"
                            alt="Описание картинки"
                            width={18}
                            height={18}
                            className=" "
                          />
                          <span className="font-semibold">{coin.pair}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center border-y border-transparent group-hover:border-gray-700">
                        {coin.price}
                      </td>
                      <td className="px-4 py-4 text-center border-y border-transparent group-hover:border-gray-700 text-green-500">
                        {coin.change}
                      </td>
                      <td className="px-4 py-4 text-center border-y border-transparent group-hover:border-gray-700 text-gray-300">
                        {coin.marketCap}
                      </td>
                      <td className="px-4 py-4 text-center border-y border-transparent group-hover:border-gray-700 text-gray-300">
                        {coin.volume}
                      </td>
                      <td className="px-4 py-4 text-center border-y border-transparent group-hover:border-gray-700 text-gray-300">
                        {coin.volume}
                      </td>
                      <td className="px-4 py-4  rounded-r-lg border-y border-r border-transparent group-hover:border-gray-700 text-center">
                        <button className="text-orange-500 hover:text-orange-400 font-medium">
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" mt-16  flex items-center text-center">
              <button className="cursor-pointer gap-2 mx-auto mb-30 items-center text-xl bg-blue-500 hover:bg-blue-700 px-12.5 py-4 rounded-sm font-semibold transition-all ">
                Load More
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-backgroundFooter ">
        <div className=" pt-30 px-52 ">
          <div className="flex justify-between items-center">
            <h1 className="my-10">
              <Image
                src="/Logo.svg"
                alt="Описание картинки"
                width={150}
                height={60}
                className=" "
              />
            </h1>
            <nav className="flex justify-between gap-5">
              <p className="text-colorall text-xl font-semibold">Community</p>
              <ul className="flex items-start gap-2">
                <li>
                  <Image
                    src="/brand-discord.svg"
                    alt="Описание картинки"
                    width={25}
                    height={25}
                    className=" "
                  />
                </li>
                <li>
                  <Image
                    src="/brand-telegram.svg"
                    alt="Описание картинки"
                    width={25}
                    height={25}
                    className=" "
                  />
                </li>
                <li>
                  <Image
                    src="/brand-instagram.svg"
                    alt="Описание картинки"
                    width={25}
                    height={25}
                    className=" "
                  />
                </li>
                <li>
                  <Image
                    src="/brand-linkedin.svg"
                    alt="Описание картинки"
                    width={25}
                    height={25}
                    className=" "
                  />
                </li>
                <li>
                  <Image
                    src="/brand-youtube.svg"
                    alt="Описание картинки"
                    width={25}
                    height={25}
                    className=" "
                  />
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-between items-start gap-25  relative">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></div>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">
                Crypto Brains
              </h1>
              <ul className="text-color mt-4">
                <li className="pb-2">About Us</li>
                <li className="pb-2">Our Team</li>
                <li className="pb-2">Road Map</li>
                <li className="pb-2">Risk Disclosure</li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Knowledge</h1>
              <ul className="text-color mt-4">
                <li className="pb-2">F.A.Q.</li>
                <li className="pb-2">Articals</li>
                <li className="pb-2">Video Tutorial</li>
                <li className="pb-2">Beginner’s Guide</li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Services</h1>
              <ul className="text-color mt-4">
                <li className="pb-2">API Service</li>
                <li className="pb-2">Token Listing</li>
                <li className="pb-2">API Document</li>
                <li className="pb-2">Ticket Services</li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Exchange</h1>
              <ul className="text-color mt-4">
                <li className="pb-2">P2P</li>
                <li className="pb-2">Referral</li>
                <li className="pb-2">Markets</li>
                <li className="pb-2">Affiliate Program</li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">
                Support Sevice
              </h1>
              <ul className="text-color mt-4">
                <li className="pb-2">Career</li>
                <li className="pb-2">Comunity</li>
                <li className="pb-2">Customer Chat</li>
                <li className="pb-2">Technical Support</li>
              </ul>
            </nav>
            <nav className="mt-10">
              <h1 className="text-colorall text-xl font-semibold">Press</h1>
              <ul className="text-color mt-4">
                <li className="pb-2">Blog</li>
                <li className="pb-2">News</li>
                <li className="pb-2">Events</li>
              </ul>
            </nav>
          </div>
          <div className="  relative mt-10">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></div>
            <div>
              <p></p>
              <div>
                <a href=""></a>
              </div>
              <div>
                <a href=""></a>
              </div>
            </div>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </footer>
    </header>
  );
}
