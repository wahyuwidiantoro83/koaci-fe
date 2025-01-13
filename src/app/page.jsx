"use client";

import Image from "next/image";
import heroImage from "@/images/hero.png";
import signContract from "@/images/sign_contract.jpg";
import { Button } from "@/components/ui/button";
import achievementOne from "@/images/pencapaian_1.png";
import achievementTwo from "@/images/pencapaian_2.png";
import achievementThree from "@/images/pencapaian_3.png";
import achievementFour from "@/images/pencapaian_4.png";
import achievementFive from "@/images/pencapaian_5.png";
import portoOne from "@/images/porto_1.png";
import portoTwo from "@/images/porto_2.png";
import portoThree from "@/images/porto_3.png";
import portoFour from "@/images/porto_4.png";
import portoFive from "@/images/porto_5.png";
import portoSix from "@/images/porto_6.png";
import portoSeven from "@/images/porto_7.png";
import portoEight from "@/images/porto_8.png";
import portoNine from "@/images/porto_9.png";
import portoTen from "@/images/porto_10.png";
import investFlow from "@/images/investor_flow.png";
import schemaOne from "@/images/schema_1.png";
import schemaTwo from "@/images/schema_2.png";
import { RiArrowRightLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import TestimonyCard from "@/components/testimonyCard";
import Layout from "@/components/layout";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import Rating from "@/components/rating";

export default function Home(props) {
  const router = useRouter();
  const SLIDES = Array.from(Array(3).keys());
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

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
      <Layout>
        <div className="flex w-full h-svh items-center relative">
          <Image
            src={heroImage}
            alt="Hero Image"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 z-10 px-4 md:px-24">
            <h1 className="text-2xl md:text-[2.75rem] md:leading-[3rem] font-medium text-center md:text-start w-full md:w-[60%] text-gray-100">
              Bangun Masa Depan Finansial Anda Bersama Kami
            </h1>
            <p className="text-sm md:text-base font-light md:font-light text-center md:text-start w-full md:w-[40%] text-gray-100">
              Kami menyediakan ekosistem syariah yang lebih baik dan dimulai dengan keuangan.
            </p>
            <div className="flex flex-col md:flex-row gap-2 w-fit md:gap-4">
              <Button
                size="lg"
                className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-gray-100"
                onClick={() => {
                  router.push("/register");
                }}
              >
                Daftar Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-gray-100"
                onClick={() => {
                  router.push("/grow");
                }}
              >
                Gabung Komunitas
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full py-16 md:py-20 px-4 md:px-24">
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex flex-col w-full md:w-[60%]">
                <h2 className="font-normal mb-2 md:mb-4 text-2xl md:text-3xl">Pencapaian Kami</h2>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-fit border-gray-800"
                  onClick={() => {
                    router.push("/about-us");
                  }}
                >
                  Cari Tahu Tentang Kami
                </Button>
              </div>
              <div className="flex w-full md:w-[40%]">
                <p className="font-light text-sm md:text-sm">
                  Kami selalu berkomitmen untuk memberikan pelayanan terbaik kepada investor kami
                  dengan memastikan setiap langkah yang kami ambil didasarkan pada transparansi,
                  integritas, dan dedikasi tinggi untuk mencapai hasil yang optimal serta memenuhi
                  harapan mereka secara konsisten.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex h-48 md:h-96 overflow-hidden w-full md:w-[60%] border border-gray-400 rounded-2xl">
                <Image src={achievementOne} className="w-full object-cover" alt="Achievement One" />
              </div>
              <div className="flex h-48 md:h-96 overflow-hidden w-full md:w-[40%] border border-gray-400 rounded-2xl">
                <Image src={achievementTwo} className="w-full object-cover" alt="Achievement One" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row w-full md:w-[60%] gap-4 md:gap-6">
                <div className="flex w-full h-48 border overflow-hidden border-gray-400 rounded-2xl">
                  <Image
                    src={achievementThree}
                    className="w-full object-cover"
                    alt="Achievement Three"
                  />
                </div>
                <div className="flex w-full h-48 border overflow-hidden border-gray-400 rounded-2xl">
                  <Image
                    src={achievementFour}
                    className="w-full object-cover"
                    alt="Achievement Four"
                  />
                </div>
              </div>
              <div className="flex w-full md:w-[40%]">
                <div className="flex flex-1 h-48 border overflow-hidden border-gray-400 rounded-2xl">
                  <Image
                    src={achievementFive}
                    className="w-full object-cover"
                    alt="Achievement Five"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-16 md:py-20 px-4 md:px-24 bg-gradient-to-r from-[#1E74D7] from-[10%] via-[#1F98DB] via-[60%] to-[#1EE0B3] to-100%">
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
            <div className="flex flex-col gap-2 md:gap-4 w-full md:w-[40%] text-gray-100">
              <h2 className="text-2xl md:text-3xl font-normal">
                Mengapa Harus Menggalang Dana di Koaci?
              </h2>
              <p className="text-base font-light">
                Kami telah dipercaya oleh para investor sebagai mitra yang handal dan profesional.
              </p>
              <p className="text-base font-semibold">#InvestasiSyariah</p>
              <div className="flex flex-col gap-1">
                <Button
                  className={
                    "w-fit bg-green-400 text-gray-100 hover:bg-green-500 hover:text-gray-100"
                  }
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  Daftar Sekarang <RiArrowRightLine />
                </Button>
                <p className="text-[0.5rem] font-light">*Berdasarkan data Desember 2024</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 w-full md:w-[60%]">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                setApi={setApi}
              >
                <CarouselContent>
                  {/* Slide 1 */}
                  <CarouselItem className={`md:basis-[80%] md:pl-10`}>
                    <div className="flex flex-col min-h-64 w-full gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-white shadow-inner">
                      <div className="flex flex-col gap-1">
                        <p className="text-2xl font-medium text-[#1459A8]">Mayor Teddy</p>
                        <p className="text-sm">CTO at Pengusaha Modal</p>
                        <Rating value={4} starCount={5} />
                      </div>
                      <p className="text-sm font-light">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur,
                        porro exercitationem magni voluptatibus."
                      </p>
                    </div>
                  </CarouselItem>

                  {/* Slide 2 */}
                  <CarouselItem className={`md:basis-[80%] md:pl-10`}>
                    <div className="flex flex-col min-h-64 w-full gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-white shadow-inner">
                      <div className="flex flex-col gap-1">
                        <p className="text-2xl font-medium text-[#1459A8]">Jane Doe</p>
                        <p className="text-sm">CEO at Startup Labs</p>
                        <Rating value={5} starCount={5} />
                      </div>
                      <p className="text-sm font-light">
                        "Aliquid recusandae consequatur exercitationem porro maiores, repellendus
                        iure architecto dolorum quidem."
                      </p>
                    </div>
                  </CarouselItem>

                  {/* Slide 3 */}
                  <CarouselItem className={`md:basis-[80%] md:pl-10`}>
                    <div className="flex flex-col min-h-64 w-full gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-white shadow-inner">
                      <div className="flex flex-col gap-1">
                        <p className="text-2xl font-medium text-[#1459A8]">John Smith</p>
                        <p className="text-sm">Product Manager at Innovatech</p>
                        <Rating value={3} starCount={5} />
                      </div>
                      <p className="text-sm font-light">
                        "Temporibus culpa blanditiis excepturi ratione maxime inventore voluptatum
                        iste eos pariatur dolorum."
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="flex gap-4 justify-center">
                {SLIDES.map((val, idx) => (
                  <span
                    key={idx}
                    onClick={() => api.scrollTo(val)}
                    className={`rounded-full w-2 h-2 ${
                      current === val ? "bg-gray-100" : "bg-gray-800"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full min-h-hero items-center py-16 md:py-20 px-4 md:px-24">
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center mb-16 md:mb-24">
              <h2 className="text-center text-2xl md:text-3xl font-normal mb-4 md:mb-6">
                Portofolio Kami
              </h2>
              <p className="text-center text-base w-full md:w-[553px]">
                Kami menempatkan kebutuhan Anda sebagai prioritas utama, menghadirkan layanan yang
                disesuaikan dengan tujuan finansial Anda.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 grid-flow-row gap-4 md:gap-6">
              <div className="flex h-24">
                <Image src={portoOne} alt="Porto One" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoTwo} alt="Porto Two" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoThree} alt="Porto Three" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoFour} alt="Porto Four" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoFive} alt="Porto Five" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoSix} alt="Porto Six" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoSeven} alt="Porto Seven" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoEight} alt="Porto Eight" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoNine} alt="Porto Nine" className="w-full object-contain" />
              </div>
              <div className="flex h-24">
                <Image src={portoTen} alt="Porto Ten" className="w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-16 md:py-20 px-4 md:px-24 bg-gradient-to-t from-[#1E74D7] from-[5%] to-[#1EE0B3] to-[100%] relative">
          <div className="flex w-full">
            <div className="flex flex-col gap-4 w-full md:w-[40%]">
              <h2 className="text-2xl md:text-3xl font-normal text-gray-100">
                Bagaimana Cara Investasi Melalui Koaci?
              </h2>
              <Image src={investFlow} alt="Invest Flow" className="object-contain w-full" />
            </div>
          </div>
          <Image
            src={signContract}
            alt="Sign Contract"
            className="hidden md:block absolute w-[55%] h-full top-0 right-0 object-cover"
          />
        </div>
        <div className="flex w-full py-16 md:py-20 px-4 md:px-24">
          <div className="flex w-full flex-col items-center">
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 w-full mb-24">
              <div className="flex justify-center w-full">
                <Image
                  src={schemaOne}
                  alt="Schema One"
                  className="w-full max-w-[698px] object-contain"
                />
              </div>
              <div className="flex flex-col w-full">
                <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4">
                  Skema Project Financing
                </h2>
                <p className="font-light text-sm md:text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur cum explicabo
                  iure beatae numquam ea, quisquam nostrum quo a consequatur necessitatibus
                  doloremque, molestias id ad inventore placeat illo, rerum eos?
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
              <div className="flex flex-col w-full">
                <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4">
                  Skema Alur Akad
                </h2>
                <p className="font-light text-sm md:text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur cum explicabo
                  iure beatae numquam ea, quisquam nostrum quo a consequatur necessitatibus
                  doloremque, molestias id ad inventore placeat illo, rerum eos?
                </p>
              </div>
              <div className="flex justify-center w-full">
                <Image
                  src={schemaTwo}
                  alt="Schema Two"
                  className="w-full max-w-[1026px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
