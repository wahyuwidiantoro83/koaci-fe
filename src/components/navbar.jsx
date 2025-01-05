"use client";

import Image from "next/image";
import logo from "@/images/koaci_slogan.png";
import logoBlack from "@/images/koaci_slogan_black.png";
import { Button } from "@/components/ui/button";
import { RiCloseFill, RiMenuFill, RiWhatsappLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = ({ scrolling }) => {
  const router = useRouter();
  const urlPath = usePathname();
  const [show, setShow] = useState(false);

  return (
    <>
      <nav
        className={`flex w-full justify-between py-[37px] px-4 md:px-24 h-20 fixed top-0 left-0 z-50 ${
          scrolling ? "bg-white text-gray-700 shadow-md" : "text-gray-200"
        } transition-all duration-200 `}
      >
        <div className="flex w-full justify-between md:justify-normal items-center md:gap-12">
          <Image
            src={scrolling ? logoBlack : logo}
            className="transition-all duration-200 cursor-pointer"
            alt="Koaci"
            width={120}
            onClick={() => {
              router.push("/");
            }}
          />
          <RiMenuFill
            className="md:hidden w-8 h-8 cursor-pointer"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          />
          <div className="hidden md:flex gap-10 text-base">
            <div
              className="flex flex-col group overflow-hidden relative cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              <span
                className={`tracking-wide ${
                  urlPath === "/"
                    ? `font-medium ${scrolling ? "text-gray-800" : "text-gray-100"}`
                    : ""
                } ${scrolling ? `group-hover:text-gray-800` : `group-hover:text-gray-100`}`}
              >
                Pendanaan
              </span>
            </div>
            <div
              className="flex flex-col group overflow-hidden relative cursor-pointer"
              onClick={() => {
                router.push("/project");
              }}
            >
              <span
                className={`tracking-wide ${
                  urlPath === "/project"
                    ? `font-medium ${scrolling ? "text-gray-800" : "text-gray-100"}`
                    : ""
                } ${scrolling ? `group-hover:text-gray-800` : `group-hover:text-gray-100`}`}
              >
                Proyek
              </span>
            </div>
            <div
              className="flex flex-col group overflow-hidden relative cursor-pointer"
              onClick={() => {
                router.push("/faq");
              }}
            >
              <span
                className={`tracking-wide ${
                  urlPath === "/faq"
                    ? `font-medium ${scrolling ? "text-gray-800" : "text-gray-100"}`
                    : ""
                } ${scrolling ? `group-hover:text-gray-800` : `group-hover:text-gray-100`}`}
              >
                F.A.Q
              </span>
            </div>
            <div
              className="flex flex-col group overflow-hidden relative cursor-pointer"
              onClick={() => {
                router.push("/about-us");
              }}
            >
              <span
                className={`tracking-wide ${
                  urlPath === "/about-us"
                    ? `font-medium ${scrolling ? "text-gray-800" : "text-gray-100"}`
                    : ""
                } ${scrolling ? `group-hover:text-gray-800` : `group-hover:text-gray-100`}`}
              >
                Tentang Kami
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="bg-green-400 text-gray-100 hover:bg-green-500 hover:text-gray-100"
            onClick={() => {
              router.push("/register");
            }}
          >
            Daftar Sekarang
          </Button>
          <Button
            variant="outline"
            className={`bg-transparent ${
              scrolling ? "border border-black text-gray-800" : "text-gray-100"
            }`}
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=6282229427833&text=hallo&type=phone_number&app_absent=0",
                "__blank"
              );
            }}
          >
            <RiWhatsappLine /> Hubungi Kami
          </Button>
        </div>
      </nav>
      <div
        className={`absolute flex bottom-0 w-full h-svh ${
          show ? "right-0" : "-right-full"
        } bg-white z-[51] transition-all duration-500`}
      >
        <div className="flex-col w-full p-4">
          <div className="flex w-full justify-between items-center mb-16">
            <Image
              src={logoBlack}
              className="transition-all duration-200 cursor-pointer"
              alt="Koaci"
              width={120}
              onClick={() => {
                router.push("/");
              }}
            />
            <RiCloseFill
              className="w-8 h-8 cursor-pointer"
              onClick={() => {
                setShow((prev) => !prev);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span
              className="text-2xl font-light hover:font-normal cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              Pendanaan
            </span>
            <span
              className="text-2xl font-light hover:font-normal cursor-pointer"
              onClick={() => {
                router.push("/project");
              }}
            >
              Proyek
            </span>
            <span
              className="text-2xl font-light hover:font-normal cursor-pointer"
              onClick={() => {
                router.push("/faq");
              }}
            >
              F.A.Q
            </span>
            <span
              className="text-2xl font-light hover:font-normal cursor-pointer"
              onClick={() => {
                router.push("/about-us");
              }}
            >
              About Us
            </span>
            <span
              className="text-2xl font-light hover:font-normal cursor-pointer"
              onClick={() => {
                router.push("/register");
              }}
            >
              Daftar Sekarang
            </span>
            <span
              className="text-2xl font-light hover:font-normal cursor-pointer"
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=6282229427833&text=hallo&type=phone_number&app_absent=0",
                  "__blank"
                );
              }}
            >
              Hubungi Kami
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
