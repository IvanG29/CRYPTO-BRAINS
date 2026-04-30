"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { FAQItem } from "../components/FAQItem";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clideCard = [
    {
      name: "John Doe",
      location: "USA, America",
      text: "“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”",
    },
    {
      name: "John Doe",
      location: "USA, America",
      text: "“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”",
    },
    {
      name: "John Doe",
      location: "USA, America",
      text: "“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”",
    },
    {
      name: "John Doe",
      location: "USA, America",
      text: "“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”",
    },
    {
      name: "John Doe",
      location: "USA, America",
      text: "“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”",
    },
    {
      name: "John Doe",
      location: "USA, America",
      text: "“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”",
    },
    {
      name: "John Doe",
      location: "USA, America",
      text: "“ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”",
    },
  ];
  const faqData = [
    {
      question: "What is the difference between Defi and Metaverse?",
      answer:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      question: "What should I do if Google verification fails to bind?",
      answer:
        "Sync the time in the app settings and ensure you are using the most recent QR code.",
    },
    {
      question: "How to complete your KYC Verification?",
      answer:
        "Upload a valid ID and complete the face recognition process in your profile settings..",
    },
    {
      question:
        "What should I do if I enter the Google verification code incorrectly?",
      answer:
        "Wait 30 seconds for a new code to generate and try again immediately.",
    },
  ];

  const faqDataRight = [
    {
      question: "Can We Enter in Website Without Login or Sign Up?",
      answer:
        "You can browse general information, but most features require an account to access.",
    },
    {
      question: "What should I do if I lost the binded phone number?",
      answer:
        "Contact support to reset your 2FA by providing your identity verification documents.",
    },
    {
      question: "How to register an account on the web?",
      answer:
        "Click the Sign Up button, enter your email/phone, and verify it with the sent code.",
    },
    {
      question: "How we Change mobile number?",
      answer:
        "Go to Security Settings, select Change Phone, and verify the action via your old number or email.",
    },
  ];

  const cardsToShow = 3;
  const maxIndex = Math.ceil(clideCard.length - cardsToShow);

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
  const steps = [
    {
      icon: "/CreateAccount.svg",
      title: "Create Account",
      desc: "Sign up with your email and complete verification.",
      btn: "Sign Up Now",
    },
    {
      icon: "/VerifyBankAccount.svg",
      title: "Verify Bank Account",
      desc: "Connect your bank account to start funding.",
      btn: "Verify Now",
    },
    {
      icon: "/AddFundInWallet.svg",
      title: "Add Fund in Wallet",
      desc: "Deposit funds using various payment methods.",
      btn: "Add Now",
    },
    {
      icon: "/StartTrading.svg",
      title: "Start Trading",
      desc: "Buy and sell crypto assets instantly.",
      btn: "Start Now",
    },
  ];

  const choose = [
    {
      num: "01",
      title: "Easy Trading",
      subtitle:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      button: "Start Now",
    },
    {
      num: "02",
      title: "24/7 Help Service",
      subtitle:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      button: "Start Now",
    },
    {
      num: "03",
      title: "Easy Trading",
      subtitle:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      button: "Start Now",
    },
    {
      num: "04",
      title: "Easy Trading",
      subtitle:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      button: "Start Now",
    },
  ];
  return (
    <header className="min-h-screen overflow-x-hidden">
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
      <main>
        <section className="flex justify-around items-center ">
          <div className="mr-70">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-blue-600"></div>

              {/* Текст */}
              <span className="text-blue-500 font-semibold tracking-wider my-5 text-2xl">
                Crypto Brains
              </span>
            </div>
            <h1 className="text-6xl w-160 font-semibold text-colorall">
              Buy & Sell Crypto Easy With Crypto Brains
            </h1>
            <Image
              src="/Line 4.svg"
              alt="Описание картинки"
              width={600}
              height={600}
              className="my-8 "
            />
            <p className="text-color w-175">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button className="m-5 text-colorall rounded-sm w-45 p-3 bg-blue-600/90 hover:bg-blue-700 cursor-pointer hover:text-gray-200 transition delay-150 duration-300 ease-in-ou hover:-translate-y-2">
              Start Now
            </button>
            <button className="m-5 text-colorall rounded-sm w-45 p-3 border-2 border-white hover:border-gray-300 cursor-pointer hover:text-gray-200  transition delay-150 duration-300 ease-in-ou hover:-translate-y-2">
              Beginner’s Guide
            </button>
          </div>
          <div>
            <Image
              src="/Svg.svg"
              alt="Описание картинки"
              width={600}
              height={500}
              className="brightness-75 contrast-135 saturate-70  drop-shadow-[0_0_80px_rgba(88,101,242,0.5)] hover:drop-shadow-[0_0_60px_rgba(88,101,242,0.8)] transition delay-150 duration-300 ease-in-ou hover:-translate-y-5 "
            />
          </div>
        </section>
        <section className="px-52 py-29">
          <div>
            <nav className="flex justify-between  ">
              <ul className="flex flex-wrap w-36 h-21.5 gap-6">
                <p className="text-color text-base">BTC / INR</p>
                <li className="text-sm text-colorGreen">5.76%</li>
                <span className="text-xl text-colorall">₹ 28,214,25.341</span>
              </ul>
              <div className="w-px h-10 bg-gray-500 self-center"></div>
              <ul className="flex flex-wrap w-36 h-21.5 gap-6 ">
                <p className="text-color text-base">BTC / INR</p>
                <li className="text-sm text-colorGreen">5.76%</li>
                <span className="text-xl text-colorall">₹ 28,214,25.341</span>
              </ul>
              <div className="w-px  h-10 bg-gray-500 self-center"></div>
              <ul className="flex flex-wrap w-36 h-21.5 gap-6 ">
                <p className="text-color text-base">BTC / INR</p>
                <li className="text-sm text-colorGreen">5.76%</li>
                <span className="text-xl text-colorall">₹ 28,214,25.341</span>
              </ul>

              <div className="w-px  h-10 bg-gray-500 self-center"></div>
              <ul className="flex flex-wrap w-36 h-21.5 gap-6">
                <p className="text-color text-base">BTC / INR</p>
                <li className="text-sm text-colorGreen">5.76%</li>
                <span className="text-xl text-colorall">₹ 28,214,25.341</span>
              </ul>
              <div className="w-px  h-10 bg-gray-500 self-center"></div>
              <ul className="flex flex-wrap w-36 h-21.5 gap-6">
                <p className="text-color text-base">BTC / INR</p>
                <li className="text-sm text-colorGreen">5.76%</li>
                <span className="text-xl text-colorall">₹ 28,214,25.341</span>
              </ul>
              <div className="w-px  h-10 bg-gray-500 self-center"></div>
              <ul className="flex flex-wrap w-36 h-21.5 gap-6">
                <p className="text-color text-base">BTC / INR</p>
                <li className="text-sm text-colorGreen">5.76%</li>
                <span className="text-xl text-colorall">₹ 28,214,25.341</span>
              </ul>
              <div className="w-px  h-10 bg-gray-500 self-center"></div>
              <ul className="flex flex-wrap w-36 h-21.5 gap-6 ">
                <p className="text-color text-base">BTC / INR</p>
                <li className="text-sm text-colorGreen">5.76%</li>
                <span className="text-xl text-colorall">₹ 28,214,25.341</span>
              </ul>
              <div className="w-px left-0 right-0 p-0 m-0   h-10 bg-gray-500 self-center"></div>
            </nav>
          </div>
        </section>

        <section className="mx-52 mt-30 text-color ">
          <div className=" mx-auto">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-6xl text-colorall font-bold">
                Market Trends
              </h2>
              <div className="flex gap-4 text-xl transition drop-shadow-[0_0_28px_rgba(88,101,242,0.5)] hover:drop-shadow-[0_0_24px_rgba(88,101,242,0.8)] text-gray-400">
                {[
                  "All",
                  "Top Gainers",
                  "Top Losers",
                  "New Listing",
                  "Defi",
                  "Metaverse",
                ].map((tab) => (
                  <button
                    key={tab}
                    className="hover:text-colorall cursor-pointer transition-color"
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between gap-8">
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

            <div className=" mt-16 flex items-center text-center">
              <button className="flex justify-between cursor-pointer gap-2 mx-auto mb-30 items-center text-xl bg-blue-600 hover:bg-blue-700 px-12.5 py-4 rounded-sm font-semibold transition-all ">
                See All Market
                <Image
                  src="/arrow-up-right.svg"
                  alt="Описание картинки"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>
        </section>
        <section className="text-colorall px-52 pt-30">
          <div className="relative text-center">
            <h2 className="text-4xl font-bold mb-7.5 mt-30">
              Start Trading In Simple Process
            </h2>
            <p className="mx-105 mb-15">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <span className="absolute bottom-147.5 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></span>

            <div className="flex justify-between mt-15 ">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-100 h-110 mb-30 rounded-2xl bg-colorCard border border-colorCard brightness-85 contrast-105 saturate-90  hover:drop-shadow-[0_0_10px_rgba(88,101,242,0.6)] transition delay-150 duration-300 ease-in-ou hover:-translate-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mt-15 ">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-15 h-15 object-contain  invert opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <h3 className="text-2xl font-semibold mb-10 mt-10">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed mb-10">
                    {step.desc}
                  </p>

                  <button className="flex justify-between cursor-pointer gap-4 text-blue-500 hover:text-blue-400 text-base font-medium transition-colors">
                    <Link href="/">{step.btn}</Link>

                    <Image
                      src="/arrow-up-right.svg"
                      alt="Описание картинки"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="h-32"></div>
        <section>
          <h2 className="text-6xl text-center font-bold mb-7.5 mt-30">
            Why Choose Crypto Brains!
          </h2>
          <p className="text-center text-lg  mb-15">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <div className="relative mt-16 pb-16 mx-52">
            <span className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></span>
          </div>
          <article className="flex justify-between  w-504 h-156 mx-52">
            <div className="grid grid-cols-1 grid-rows-4 text-start ">
              {choose.map((choose, index) => (
                <div
                  key={index}
                  className="flex justify-items-start gap-3 brightness-85 contrast-105 saturate-90  hover:drop-shadow-[0_0_50px_rgba(88,101,242,0.9)] transition delay-150 duration-300 ease-in-ou hover:-translate-y-5"
                >
                  <span className="w-15 h-20 mr-5 text-6xl text-color">
                    {choose.num}
                  </span>
                  <div className="mr-4 h-24">
                    <h1 className="mb-3 text-colorGray leading-6 text-2xl">
                      {choose.title}
                    </h1>
                    <p className="text-color h-12 leading-9 mt-8 text-base">
                      {choose.subtitle}
                    </p>
                  </div>
                  <div className="flex justify-center items-center h-24">
                    <button className=" text-colorGray text-lg leading-7 gap-2">
                      {choose.button}
                    </button>
                    <Image
                      src="/arrow-up-right.svg"
                      alt="Описание картинки"
                      width={15}
                      height={0}
                      className=""
                    />
                  </div>
                  <div className="relative mt-35 mb-10">
                    <span className="absolute w-225 mr-8  top-0 right-0 h-0.5 bg-linear-to-r from-gray-500/20 via-gray-500 to-gray-500/20"></span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Image
                src="/Card.png"
                alt="Описание картинки"
                width={750}
                height={750}
                className="brightness-85 contrast-105 saturate-90  hover:drop-shadow-[0_0_90px_rgba(88,101,242,0.6)] transition delay-150 duration-300 ease-in-ou hover:-translate-y-5"
              />
            </div>
          </article>
          <div className="p-30">
            <span></span>
          </div>
        </section>
        <section className="py-30 px-41.5">
          <div className="pt-15 px-3 mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6 "
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {clideCard.map((clideCard, index) => (
                <div
                  key={index}
                  className="shrink-0 cursor-pointer bg-background p-8 brightness-75 contrast-135 saturate-70  hover:drop-shadow-[0_0_20px_rgba(88,101,242,0.6)] transition delay-150 duration-300 ease-in-ou hover:-translate-y-5"
                  style={{ width: `calc(${100 / cardsToShow}% - 1.5rem)` }}
                >
                  <nav className="flex justify-between items-center mb-6 ">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/WesternMan.jpg"
                        alt="Описание картинки"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <ul>
                        <li className="text-white font-semibold">
                          {clideCard.name}
                        </li>
                        <li className="text-gray-500 text-sm">
                          {clideCard.location}
                        </li>
                      </ul>
                    </div>
                    <span className="text-gray-700 mr-10 text-5xl font-serif leading-none">
                      <Image
                        src="/99.svg"
                        alt="Описание картинки"
                        width={80}
                        height={10}
                        className="rounded-full"
                      />
                    </span>
                  </nav>
                  <p className="text-gray-300 text-2xl leading-relaxed">
                    {clideCard.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Индикаторы (точки) */}
            <div className="flex justify-center gap-3 mt-8 ">
              {Array.from({ length: clideCard.length - cardsToShow + 1 }).map(
                (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-6 transition-all duration-300 cursor-pointer rounded-full ${
                      currentIndex === idx ? "w-16 bg-white" : "w-8 bg-gray-600"
                    }`}
                  />
                ),
              )}
            </div>
          </div>
        </section>
        <div className="p-30"></div>
        <section className="flex justify-between items-center">
          <div className="py-36 px-42">
            <h1 className="text-colorall font-bold text-6xl mb-7.5">
              Never Miss Trading, Download Our Application
            </h1>
            <p className="text-color text-lg leading-7">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className="mt-20 flex gap-7.5">
              <button className="flex items-center gap-2.5 border-2 bg-backgroundheader rounded-sm text-lg py-3 px-8 text-colorall">
                <Image
                  src="/appStore.svg"
                  alt="Описание картинки"
                  width={32}
                  height={32}
                />
                App Store
              </button>
              <button className="flex items-center gap-2.5 border-2 bg-backgroundheader rounded-sm  py-3 px-8 text-lg text-colorall">
                <Image
                  src="/playStore.svg"
                  alt="Описание картинки"
                  width={32}
                  height={32}
                />
                Play Store
              </button>
              <button className="border-2 bg-backgroundheader rounded-sm  py-2 px-6 text-colorall">
                <Image
                  src="/quarcode.svg"
                  alt="Описание картинки"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/ImgMobDekstop.svg"
              alt="Описание картинки"
              width={1190}
              height={140}
            />
          </div>
        </section>
        <div className=" h-32"></div>
        <section className="min-h-screen  px-6 py-30 font-sans">
          <div className="mx-auto max-w-397.5">
            <div className="mx-auto max-w-397.5 mb-15 text-center">
              <h2 className="mb-7.5 text-6xl font-bold tracking-tight text-colorall">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-175 leading-7 text-lg text-color">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>

            {/* Сетка колонок */}
            <div className="grid gap-x-16 lg:grid-cols-2">
              {/* Левая сторона */}
              <div className="flex flex-col">
                {faqData.map((item, idx) => (
                  <FAQItem key={idx} {...item} />
                ))}
              </div>

              {/* Правая сторона */}
              <div className="flex flex-col">
                {faqDataRight.map((item, idx) => (
                  <FAQItem key={idx} {...item} />
                ))}
              </div>
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
