"use client";

import registerImage from "@/images/register_image.png";
import logoKoaci from "@/images/koaci_slogan.png";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Register = (props) => {
  const router = useRouter();

  return (
    <>
      <div className="flex w-full min-h-svh">
        <div className="flex w-[50%] flex-col px-20 py-10 bg-gradient-to-b from-[#1E74D7] from-[10%] to-[#1EE0B3] to-100%">
          <div
            className="flex items-center mb-16 text-white cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <RiArrowLeftSLine className="w-8 h-8" />
            <p className="text-sm">Back to Home Page</p>
          </div>
          <div className="flex gap-4 items-center mb-10">
            <p className="text-white text-2xl">Welcome to</p>
            <Image src={logoKoaci} alt="Logo Koaci" className="w-24" />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-2xl md:text-[2.75rem] md:leading-[3rem] font-normal">
              Mari bergabung menjadi bagian dari kami
            </p>
            <p className="text-base">
              Lakukan pendaftaran sebagai investor atau pengusaha dan dapatkan info lebih lanjut
              dari kami. Kami sangat menunggu anda untuk bergabung bersama kami.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Nama Lengkap Anda"
              />
              <input
                type="email"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Email Anda"
              />
              <input
                type="text"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Nomor Handphone Anda"
              />
              <select
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 text-gray-200"
              >
                <option value="" disabled selected>Pilih Role Anda</option>
                <option value="pebisnis" className="text-black">Pebisnis</option>
                <option value="investor" className="text-black">Investor</option>
              </select>
              <Button
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => {
                  router.push("/register/success");
                }}
              >
                Kirim
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-[50%]">
          <Image src={registerImage} alt="Register Image" className="w-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Register;
