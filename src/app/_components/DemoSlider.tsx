/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // <===== REQUIRED

import Image from "next/image";
import React, { useState } from "react";

import { motion } from 'framer-motion';


// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";


interface Slide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  perfil: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data, ...props }) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };
  return (
    <section className="min-h-[760px]">
        <div className="continer mx-auto h-[760px]">
          
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              700: {
                slidesPerView: 1,
              },
            }}
            className="demoslider min-h-[520px]"
          >
            {data.map(({ id, image, perfil, tagline, title, subtitle, buttons }) => (
              <SwiperSlide key={id}>
                <div
                  className="col-span-4 place-self-center mt-8 lg:mt-0"
                >
                  <figure>
                  <Image
                    objectFit="cover"
                    src={image}
                    alt=""
                    width={1500}
                    height={750}
                    crop="fill"
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    className={`absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-gray-400 transition duration-1000 ${
                      isReady ? "blur-0 scale-100" : "blur-2xl scale-120"
                    }`}
                    {...props}
                    onLoadingComplete={onLoadCallback}
                  />
                  </figure>
                </div>
                
          
                <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-black/20 opacity-20"></div>
                <div className="space-y-5 title-content absolute py-[8%] ps-16 sm:py-[8rem]">
                  <div className="flex flex-col gap-y-5 lg:px-16 md:flex-row md:gap-x-16">
                  <div className="mr-auto place-self-center lg:col-span-7">
                  <div className="text-left backdrop-brightness-50 bg-black/50 py-16 px-8 rounded-md">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text heavy mb-4 max-w-2xl animate-gradient text-4xl font-extrabold leading-none drop-shadow-md tracking-tight text-transparent md:text-5xl xl:text-6xl dark:text-purple">
                        <div className='pl-4 flex text-lg text-[#fbb33f] border-b border-slate-300/30'><span className="-mb-px py-2 border-b border-b-current">{subtitle}</span></div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text heavy mb-4 max-w-2xl animate-gradient text-4xl font-extrabold leading-none drop-shadow-md tracking-tight text-transparent md:text-5xl xl:text-6xl dark:text-purple">
                      {title}
                    </motion.div>
                    
                    {tagline && (
                      <motion.p
                      initial={{ opacity: 0, y: 200, scale: 0.5 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 200, scale: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className="col-start-1 row-start-3 leading-6 mt-4 max-w-lg text-lg text-slate-200">
                        {tagline}
                      </motion.p>
                    )}
                    
                    {buttons.length > 0 ? (
                      <p className="inline-block rounded-full px-2 -py-8 text-white lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
                    
                  </div>
                  </div>
                
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
};

export default DemoSlider;
