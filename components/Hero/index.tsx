"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-25 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              

              <h1 className="mb-5 pr-16 text-4xl font-extrabold tracking-tight leading-[1.05] text-black dark:text-white md:text-[35px]">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full  dark:border-strokedark">
                  <Sparkles className="h-7 w-7" />
                </span>
                {" "}Build{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                    web, mobile & AI products
                  </span>
                 
                </span>
              </h1>

              <p className="text-lg leading-relaxed text-black/70 dark:text-white/70">
                We deliver production-grade software end-to-end modern web
                apps, high-quality mobile experiences, AI integrations and
                workflow automation, plus machine learning that actually runs in
                real systems.
              </p>

              {/* SERVICE HIGHLIGHTS */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group rounded-lg border border-stroke bg-white p-5 shadow-solid-2 transition-all duration-300 hover:shadow-solid-5 dark:border-strokedark dark:bg-black dark:shadow-none">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zumthor dark:bg-blacksection">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-black dark:text-white">
                    Web Development
                  </h3>
                </div>
                <div className="group rounded-lg border border-stroke bg-white p-5 shadow-solid-2 transition-all duration-300 hover:shadow-solid-5 dark:border-strokedark dark:bg-black dark:shadow-none">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zumthor dark:bg-blacksection">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-black dark:text-white">
                    Mobile Development
                  </h3>
                </div>
                <div className="group rounded-lg border border-stroke bg-white p-5 shadow-solid-2 transition-all duration-300 hover:shadow-solid-5 dark:border-strokedark dark:bg-black dark:shadow-none">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zumthor dark:bg-blacksection">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-black dark:text-white">
                    AI Integration & Automation
                  </h3>
                </div>
                <div className="group rounded-lg border border-stroke bg-white p-5 shadow-solid-2 transition-all duration-300 hover:shadow-solid-5 dark:border-strokedark dark:bg-black dark:shadow-none">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zumthor dark:bg-blacksection">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-black dark:text-white">
                    Machine Learning
                  </h3>
                </div>
              </div>

              {/* <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your work email to get a build plan"
                      className="w-full max-w-[420px] rounded-full border border-stroke px-6 py-3 text-base shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:text-white dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="inline-flex items-center gap-2 rounded-full bg-black px-7.5 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get a Free Build Plan
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-sm font-medium text-black/80 dark:text-white/80">
                  No spam. We’ll reply with a short technical plan and next
                  steps.
                </p>
              </div> */}
            </div>

            {/* IMAGE AREA UNCHANGED */}
            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
            {/* END IMAGE AREA */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
