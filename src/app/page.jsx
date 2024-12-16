"use client";

import Image from "next/image";
import logo from "@/images/koaci_slogan.png";
import logoBlack from "@/images/koaci_slogan_black.png";
import heroImage from "@/images/hero.png";
import signContract from "@/images/sign_contract.png";
import { Button } from "@/components/ui/button";
import achievementOne from "@/images/pencapaian_1.png";
import achievementTwo from "@/images/pencapaian_2.png";
import achievementThree from "@/images/pencapaian_3.png";
import achievementFour from "@/images/pencapaian_4.png";
import achievementFive from "@/images/pencapaian_5.png";
import investFlow from "@/images/investor_flow.png";
import { RiWhatsappLine, RiArrowRightLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home(props) {
  const SLIDES = Array.from(Array(3).keys());
  const [scrolling, setScrolling] = useState(false);
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementById("layout-body").scrollTop > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    document.getElementById("layout-body").addEventListener("scroll", handleScroll);
    return () => {
      document.getElementById("layout-body").removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="h-dvh w-dvw overflow-auto font-roboto" id="layout-body">
        <nav
          className={`flex w-full justify-between py-[37px] px-4 md:px-[99px] h-20 fixed top-0 left-0 z-50 ${
            scrolling
              ? "bg-white text-black transition-all duration-200"
              : "text-white transition-all duration-200"
          }`}
        >
          <div className="flex items-center gap-10">
            <Image
              src={scrolling ? logoBlack : logo}
              className="transition-all duration-200"
              alt="Koaci"
              width={120}
            />
            <div className="hidden md:flex gap-8 text-base">
              <span>Pendanaan</span>
              <span>Proyek</span>
              <span>F.A.Q</span>
              <span>Tentang Kami</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-green-400 text-white hover:bg-green-500 hover:text-white">
              Daftar Sekarang
            </Button>
            <Button
              variant="outline"
              className={`bg-transparent ${
                scrolling ? "border border-black text-black" : "text-white"
              }`}
            >
              <RiWhatsappLine /> Hubungi Kami
            </Button>
          </div>
        </nav>
        <div className="flex w-full h-svh items-center relative bg-red-400">
          <Image
            src={heroImage}
            alt="heroImage"
            className=" absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-6 z-10 px-4 md:px-[99px]">
            <h1 className="text-2xl md:text-5xl font-extrabold text-center md:text-start w-full md:w-[60%] text-white">
              Bangun Masa Depan Finansial Anda Bersama Kami
            </h1>
            <p className="text-sm md:text-lg font-light md:font-normal text-center md:text-start w-full md:w-[50%] text-white">
              Gabunglah dengan ekosistem kami dan mari tingkatkan pengalaman dalam berinvestasi Anda
              ke level berikutnya!
            </p>
            <div className="flex flex-col md:flex-row gap-2 w-fit md:gap-4">
              <Button
                size="lg"
                className="bg-green-400 text-white hover:bg-green-500 hover:text-white"
              >
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white">
                Cari Tahu Tentang Kami
              </Button>
            </div>
          </div>
        </div>
        <div className="py-[122px] px-4 md:px-[99px] flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-[60%]">
              <h2 className="font-light text-4xl">Pencapaian Kami</h2>
              <Button size="lg" variant="outline" className="w-fit border-black">
                Cari Tahu Tentang Kami
              </Button>
            </div>
            <div className="flex w-[40%]">
              <p className="text-justify font-light text-sm">
                Kami selalu berkomitmen untuk memberikan pelayanan terbaik kepada investor kami
                dengan memastikan setiap langkah yang kami ambil didasarkan pada transparansi,
                integritas, dan dedikasi tinggi untuk mencapai hasil yang optimal serta memenuhi
                harapan mereka secara konsisten.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-96 overflow-hidden w-[60%] border border-gray-400 rounded-2xl">
              <Image src={achievementOne} className="w-full object-cover" alt="Achievement One" />
            </div>
            <div className="flex h-96 overflow-hidden w-[40%] border border-gray-400 rounded-2xl">
              <Image src={achievementTwo} className="w-full object-cover" alt="Achievement One" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex w-[60%] gap-4">
              <div className="flex flex-1 h-48 border overflow-hidden border-gray-400 rounded-2xl">
                <Image
                  src={achievementThree}
                  className="w-full object-cover"
                  alt="Achievement One"
                />
              </div>
              <div className="flex flex-1 h-48 border overflow-hidden border-gray-400 rounded-2xl">
                <Image
                  src={achievementFour}
                  className="w-full object-cover"
                  alt="Achievement One"
                />
              </div>
            </div>
            <div className="flex w-[40%]">
              <div className="flex flex-1 h-48 border overflow-hidden border-gray-400 rounded-2xl">
                <Image
                  src={achievementFive}
                  className="w-full object-cover"
                  alt="Achievement One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[65px] pt-[158px] px-4 md:px-[99px] flex gap-6 bg-gradient-to-r from-[#1E74D7] from-[8%] via-[#1F98DB] via-[48%] to-[#1EE0B3] to-100%">
          <div className="flex flex-col gap-4 w-[40%] text-white">
            <h2 className="text-4xl font-medium">Mengapa Harus Menggalang Dana di Koaci?</h2>
            <p className="text-lg">
              Kami telah dipercaya oleh para investor sebagai mitra yang handal dan profesional.
            </p>
            <p className="text-lg font-semibold">#InvestasiSyariah</p>
            <div className="flex flex-col gap-1">
              <Button
                className={"w-fit bg-green-400 text-white hover:bg-green-500 hover:text-white"}
              >
                Daftar Sekarang <RiArrowRightLine />
              </Button>
              <p className="text-xs font-medium">*Berdasarkan data Desember 2024</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-[60%]">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {SLIDES.map((val, idx) => (
                  <CarouselItem key={idx} className={`basis-[70%] pl-16`}>
                    <Image
                      className="w-full h-full rounded-xl"
                      src={`https://picsum.photos/600/350?v=${val}`}
                      width={400}
                      height={200}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex gap-3 mb-6 justify-center">
              {SLIDES.map((val, idx) => (
                <span
                  key={idx}
                  onClick={() => api.scrollTo(val)}
                  className={`rounded-full w-2 h-2 ${current === val ? "bg-white" : "bg-black"}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="px-4 md:px-[99px] pt-[91px] pb-[169px] flex flex-col gap-6">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-center text-4xl font-light">Portofolio Kami</h2>
            <p className="text-center w-[553px]">
              Kami menempatkan kebutuhan Anda sebagai prioritas utama, menghadirkan layanan yang
              disesuaikan dengan tujuan finansial Anda.
            </p>
          </div>
          <div className="grid grid-cols-5 grid-flow-row gap-4">
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
            <div className="flex h-44 border"></div>
          </div>
        </div>
        <div className="flex bg-gradient-to-t from-[#1E74D7] from-[0%] to-[#1EE0B3] to-[96%]">
          <div className="flex px-4 md:px-16 py-4 md:py-16 flex-col gap-4 w-[40%]">
            <h2 className="text-4xl font-medium text-white">
              Bagaimana Cara Investasi Melalui Koaci?
            </h2>
            <Image src={investFlow} alt="Invest Flow" className="w-full object-contain" />
          </div>
          <div className="flex w-[60%] h-[626px] overflow-hidden">
            <Image src={signContract} alt="Sign Contract" className="w-full object-cover" />
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
}
