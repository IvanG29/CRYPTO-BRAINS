"use client";
import Image from "next/image";
import Link from "next/link";

export default function Riskdisclosure() {
  return (
    <header>
      <div className="bg-background text-color flex justify-between items-center py-8 px-41.5">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="Описание картинки"
            width={200}
            height={200}
          />
        </Link>
        <div>
          <nav className="flex justify-between gap-20">
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/market">Market</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/trade">Trade</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/earn">Earn</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/about">About</Link>
            </li>
            <li className="list-none text-xl hover:text-blue-500/80">
              <Link href="/career">Career</Link>
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
      <main className="flex flex-col min-h-screen"></main>
      <footer className="bg-backgroundFooter button-0">
        <div className=" pt-30 px-52 ">
          <div className="flex justify-between items-center">
            <h1 className="my-10">
              <Image
                src="/Logo.svg"
                alt="Описание картинки"
                width={150}
                height={150}
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
                  />
                </li>
                <li>
                  <Image
                    src="/brand-linkedin.svg"
                    alt="Описание картинки"
                    width={25}
                    height={25}
                  />
                </li>
                <li>
                  <Image
                    src="/brand-youtube.svg"
                    alt="Описание картинки"
                    width={25}
                    height={25}
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
          <div className="relative mt-10">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></div>
            <div>
              <p></p>
              <div></div>
              <div></div>
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
