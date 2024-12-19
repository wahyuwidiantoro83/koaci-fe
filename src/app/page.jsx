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
import partnerOne from "@/images/partner_1.png";
import partnerTwo from "@/images/partner_2.png";
import partnerThree from "@/images/partner_3.png";
import partnerFour from "@/images/partner_4.png";
import partnerFive from "@/images/partner_5.png";
import partnerSix from "@/images/partner_6.png";
import partnerSeven from "@/images/partner_7.png";
import partnerEight from "@/images/partner_8.png";
import partnerNine from "@/images/partner_9.png";
import investFlow from "@/images/investor_flow.png";
import {
  RiWhatsappLine,
  RiArrowRightLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTiktokLine,
} from "react-icons/ri";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import TestimonyCard from "@/components/testimonyCard";

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
          className={`flex w-full justify-between py-[37px] px-4 md:px-24 h-20 fixed top-0 left-0 z-50 ${
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
        <div className="flex w-full h-svh items-center relative">
          <Image
            src={heroImage}
            alt="heroImage"
            className=" absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-6 z-10 px-4 md:px-24">
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
        <div className="py-24 px-4 md:px-24 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full md:w-[60%]">
              <h2 className="font-light text-2xl md:text-4xl">Pencapaian Kami</h2>
              <Button size="lg" variant="outline" className="w-fit border-black">
                Cari Tahu Tentang Kami
              </Button>
            </div>
            <div className="flex w-full md:w-[40%]">
              <p className="text-justify font-light text-sm">
                Kami selalu berkomitmen untuk memberikan pelayanan terbaik kepada investor kami
                dengan memastikan setiap langkah yang kami ambil didasarkan pada transparansi,
                integritas, dan dedikasi tinggi untuk mencapai hasil yang optimal serta memenuhi
                harapan mereka secara konsisten.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex h-48 md:h-96 overflow-hidden w-full md:w-[60%] border border-gray-400 rounded-2xl">
              <Image src={achievementOne} className="w-full object-cover" alt="Achievement One" />
            </div>
            <div className="flex h-48 md:h-96 overflow-hidden w-full md:w-[40%] border border-gray-400 rounded-2xl">
              <Image src={achievementTwo} className="w-full object-cover" alt="Achievement One" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col md:flex-row w-full md:w-[60%] gap-4">
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
            <div className="flex w-full md:w-[40%]">
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
        <div className="py-24 px-4 md:px-24 flex flex-col md:flex-row gap-6 bg-gradient-to-r from-[#1E74D7] from-[8%] via-[#1F98DB] via-[48%] to-[#1EE0B3] to-100%">
          <div className="flex flex-col gap-4 w-full md:w-[40%] text-white">
            <h2 className="text-2xl md:text-4xl font-medium">
              Mengapa Harus Menggalang Dana di Koaci?
            </h2>
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
          <div className="flex flex-col gap-8 w-full md:w-[60%]">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {SLIDES.map((val, idx) => (
                  <CarouselItem key={idx} className={`md:basis-[80%] md:pl-10`}>
                    <TestimonyCard />
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
        <div className="px-4 md:24 py-16 flex flex-col gap-12 md:gap-24">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-center text-2xl md:text-4xl font-light">Portofolio Kami</h2>
            <p className="text-center w-full md:w-[553px]">
              Kami menempatkan kebutuhan Anda sebagai prioritas utama, menghadirkan layanan yang
              disesuaikan dengan tujuan finansial Anda.
            </p>
          </div>
          <div className="grid grid-cols-5 grid-flow-row gap-6">
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
        <div className="flex bg-gradient-to-t from-[#1E74D7] from-[0%] to-[#1EE0B3] to-[96%]">
          <div className="flex px-4 md:px-24 py-16 flex-col gap-4 w-full md:w-[40%]">
            <h2 className="text-2xl md:text-4xl font-medium text-white">
              Bagaimana Cara Investasi Melalui Koaci?
            </h2>
            <Image src={investFlow} alt="Invest Flow" className="w-full object-contain" />
          </div>
          <div className="hidden md:flex w-[60%] h-[626px] overflow-hidden">
            <Image src={signContract} alt="Sign Contract" className="w-full object-cover" />
          </div>
        </div>
        <footer className="bg-[#0957B1] text-white">
          <div className="flex flex-col md:flex-row gap-6 justify-between px-4 md:px-24 py-6">
            <div className="flex flex-col gap-4">
              <Image src={logo} width={120} alt="Logo Footer" />
              <div className="text-sm">
                <p className="font-medium">PT. Koaci Sinergi Indonesia</p>
                <p className="font-light">Jl. Terusan Sukadamai II No. 5,</p>
                <p className="font-light">Kelurahan Sukabungah, Kecamatan Sukajadi,</p>
                <p className="font-light">Kota Bandung, Jawa Barat, Indoensia 40162</p>
              </div>
              <div className="flex gap-4 text-sm">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="font-light">koaci.sinergi@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Telephone</p>
                  <p className="font-light">+62 882 1945 2787</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm">Social Media</p>
                <div className="flex gap-2">
                  <RiInstagramLine className="w-8 h-8" />
                  <RiLinkedinBoxLine className="w-8 h-8" />
                  <RiTiktokLine className="w-8 h-8" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-medium">Halaman</h5>
              <div className="flex flex-col">
                <p className="font-light">Pendanaan</p>
                <p className="font-light">Proyek</p>
                <p className="font-light">F.A.Q</p>
                <p className="font-light">Tentang Kami</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="font-medium">Mitra Koaci</h5>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-5 grid-flow-col gap-2">
                  <div className="w-16 h-12">
                    <Image
                      src={partnerOne}
                      alt="Partner One"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-12">
                    <Image
                      src={partnerTwo}
                      alt="Partner Two"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-12">
                    <Image
                      src={partnerThree}
                      alt="Partner Three"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-12">
                    <Image
                      src={partnerFour}
                      alt="Partner Four"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-12">
                    <Image
                      src={partnerFive}
                      alt="Partner Five"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 grid-flow-col gap-2">
                  <div className="w-16 h-12">
                    <Image
                      src={partnerSix}
                      alt="Partner Six"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-12">
                    <Image
                      src={partnerSeven}
                      alt="Partner Seven"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-12">
                    <Image
                      src={partnerEight}
                      alt="Partner Eight"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-16 h-12">
                    <Image
                      src={partnerNine}
                      alt="Partner Nine"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 md:px-24">
            <h2 className="text-2xl md:text-4xl font-medium">Disclaimer</h2>
            <div className="flex flex-col gap-4 font-light">
              <p>
                Layanan pembiayaan dan investasi berdasarkan prinsip syariah berbasis proyek
                merupakan kesepakatan perdata antara pemberi pembiayaan (investor) dengan penerima
                pembiayaan (pebisnis) sehingga segala resiko yang timbul dari kesepakatan tersebut
                ditanggung sepenuhnya oleh masing-masing pihak.
              </p>
              <p>
                Risiko pembiayaan atau gagal bayar ditanggung sepenuhnya oleh investor. Tidak ada
                lembaga atau otoritas negara yang bertanggung jawab atas resiko gagal bayar ini. PT
                Koaci Sinergi Indonesia menyediakan wadah pertemuan tertutup antara investor dan
                pebisnis, serta menjadi pihak penengah dan siap membantu pihak yang dirugikan hingga
                ke jalur hukum.
              </p>
              <p>
                Investor yang belum memiliki pengetahuan dan pengalaman terhadap layanan pembiayaan
                dan investasi ini disarankan agar tidak menggunakan layanan ini.
              </p>
              <p>
                Pengguna sebelum menjadi investor atau pebisnis harus membaca dan memahami informasi
                sebelum membuat keputusan.
              </p>
              <p>
                Setiap kecurangan yang terjadi secara digital di dunia maya dapat diketahui oleh
                masyarakat luas di media sosial.
              </p>
              <p>
                Penyelenggara (PT Koaci Sinergi Indonesia) dengan persetujuan dari masing-masing
                pengguna (investor ataupun pebisnis) dapat mengakses, memperoleh, menyimpan,
                mengelola dan.atau menggunakan data pribadi pengguna pada perangkat lunak maupun
                perangkat keras dengan memberitahukan tujuan, batasan, dan mekanisme pemanfaatan
                data kepada pengguna
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-medium">Resiko Usaha</h5>
              <p className="font-light">
                Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan
                usaha. Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan
                usaha secara sementara sebagai dampak dari adanya bencana alam dan/atau keadaan
                kahar lainnya.
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-medium">Resiko Usaha</h5>
              <p className="font-light">
                Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan
                usaha. Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan
                usaha secara sementara sebagai dampak dari adanya bencana alam dan/atau keadaan
                kahar lainnya.
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-medium">Resiko Usaha</h5>
              <p className="font-light">
                Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan
                usaha. Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan
                usaha secara sementara sebagai dampak dari adanya bencana alam dan/atau keadaan
                kahar lainnya.
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-medium">Resiko Usaha</h5>
              <p className="font-light">
                Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan
                usaha. Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan
                usaha secara sementara sebagai dampak dari adanya bencana alam dan/atau keadaan
                kahar lainnya.
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-medium">Resiko Usaha</h5>
              <p className="font-light">
                Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan
                usaha. Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan
                usaha secara sementara sebagai dampak dari adanya bencana alam dan/atau keadaan
                kahar lainnya.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center p-4 mt-4">
            <span className="text-xs">© 2025 All Rights Reserved. Koaci Investasi</span>
          </div>
        </footer>
        {props.children}
      </div>
    </>
  );
}
