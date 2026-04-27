"use client";
import Image from "next/image";
import Link from "next/link";

export default function BTC() {
  const BTC = [
    {
      name: [
        "Current Price",
        "24h Chage",
        "24h Low",
        "24h High",
        "24h Volume (BTC)",
      ],
      price: "₹ 28,654,25.52",
      chage: " + ₹  2564.24",
      change: " 5.76%",
      Low: " ₹ 26,854,94.79",
      High: " ₹ 29,985,75.24",
      volume: "₹ 2,216,846,568.49",
    },
  ];

  return (
    <header className="min-h-screen bg-backgroundheader">
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
      <main className="flex justify-around gap-24">
        <section className="">
          <div className="flex  py-6">
            <nav className="flex items-center bg-background p-3 rounded-xl">
              <ul className="flex justify-between items-center gap-2">
                <Image
                  src="/BookmarkSimple.svg"
                  alt="Описание картинки"
                  width={24}
                  height={24}
                  className=" "
                />
                <li className="">
                  <button className="text-colorall text-xl leading-8">
                    Bitcoint | BTC
                  </button>
                </li>
                <Image
                  src="/arrow-down.svg"
                  alt="Описание картинки"
                  width={24}
                  height={24}
                  className=" "
                />
              </ul>
            </nav>
            <div className="mt-6">
              {BTC.map((btc) => (
                <nav className="flex justify-around items-center bg-background p-3 rounded-xl ">
                  <ul className="flex flex-wrap w-36 h-13.5 border-r-2 border-colorGray p-3">
                    <p className="text-color text-sm leading-5">
                      {btc.name[0]}
                    </p>
                    <li className="text-lg text-colorGreen leading-7">
                      {btc.price}
                    </li>
                  </ul>
                  <ul className="flex flex-wrap w-36 h-13.5 p-3">
                    <p className="text-color text-sm leading-5">
                      {btc.name[1]}
                    </p>
                    <li className="text-lg text-colorGreen leading-7">
                      {btc.price}
                    </li>
                  </ul>
                  <ul className="flex flex-wrap w-36 h-13.5 p-3">
                    <p className="text-color text-sm leading-5">
                      {btc.name[2]}
                    </p>
                    <li className="text-lg text-colorGreen leading-7">
                      {btc.price}
                    </li>
                  </ul>
                  <ul className="flex flex-wrap w-36 h-13.5 p-3">
                    <p className="text-color text-sm leading-5">
                      {btc.name[3]}
                    </p>
                    <li className="text-lg text-colorGreen leading-7">
                      {btc.price}
                    </li>
                  </ul>
                  <ul className="flex flex-wrap w-36 h-13.5 p-3">
                    <p className="text-color text-sm leading-5">
                      {btc.name[4]}
                    </p>
                    <li className="text-lg text-colorGreen leading-7">
                      {btc.price}
                    </li>
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </section>
        <section className="flex ">
          <div className="">
            <h1>Order book</h1>
            <div className="">
            </div>
          </div>
          <div></div>
        </section>
      </main>
    </header>
  );
}
