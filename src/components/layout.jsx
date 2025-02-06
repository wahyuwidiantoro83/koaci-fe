import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";
import logoBlack from "@/images/koaci_slogan_black.png";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import Link from "next/link";

const Layout = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);
  const bodyFrame = useRef();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (bodyFrame.current.scrollTop > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    document.getElementById("layout-body").addEventListener("scroll", handleScroll);
    return () => {
      document.getElementById("layout-body")?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="h-dvh w-dvw overflow-auto relative font-roboto text-gray-800 bg-white scroll-smooth"
        ref={bodyFrame}
        id="layout-body"
      >
        <Navbar
          scrolling={scrolling}
          openMoreMenu={() => {
            setMoreMenu((prev) => !prev);
          }}
        />
        <div
          className={`fixed top-0 w-full h-svh ${
            moreMenu ? "right-0" : "-right-full"
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
                  setMoreMenu((prev) => !prev);
                }}
              />
              <RiCloseFill
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  setMoreMenu((prev) => !prev);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Link
                className="text-2xl font-light hover:font-normal cursor-pointer"
                href={"/"}
                onClick={() => {
                  setMoreMenu((prev) => !prev);
                }}
              >
                Pendanaan
              </Link>
              <Link
                className="text-2xl font-light hover:font-normal cursor-pointer"
                href={"/project"}
                onClick={() => {
                  setMoreMenu((prev) => !prev);
                }}
              >
                Proyek
              </Link>
              <Link
                className="text-2xl font-light hover:font-normal cursor-pointer"
                href={"/faq"}
                onClick={() => {
                  setMoreMenu((prev) => !prev);
                }}
              >
                F.A.Q
              </Link>
              <Link
                className="text-2xl font-light hover:font-normal cursor-pointer"
                href={"/about-us"}
                onClick={() => {
                  setMoreMenu((prev) => !prev);
                }}
              >
                Tentang Kami
              </Link>
              <Link
                className="text-2xl font-light hover:font-normal cursor-pointer"
                href={"/register"}
                onClick={() => {
                  setMoreMenu((prev) => !prev);
                }}
              >
                Daftar Sekarang
              </Link>
              <Link
                className="text-2xl font-light hover:font-normal cursor-pointer"
                href={
                  "https://api.whatsapp.com/send/?phone=6282229427833&text=hallo&type=phone_number&app_absent=0"
                }
                target="__blank"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
