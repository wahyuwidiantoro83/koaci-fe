import registerImage from "@/images/register_image.png";
import logoKoaci from "@/images/koaci_slogan.png";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const Register = (props) => {
  return (
    <>
      <div className="flex w-dvw h-dvh">
        <div className="flex w-[50%] flex-col px-20 py-10 bg-gradient-to-b from-[#1E74D7] from-[10%] to-[#1EE0B3] to-100%">
          <div className="flex items-center mb-16 text-white">
            <RiArrowLeftSLine className="w-8 h-8" />
            <p className="text-sm">Back to Dashboard</p>
          </div>
          <div className="flex gap-4 items-center mb-10">
            <p className="text-white text-2xl">Welcome to</p>
            <Image src={logoKoaci} alt="Logo Koaci" className="w-24" />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="text-4xl">Mari bergabung menjadi bagian dari kami</p>
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
              <input
                type="text"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Pilih Role Anda"
              />
              <Button className="bg-white text-black hover:bg-gray-200">Kirim</Button>
            </div>
          </div>
        </div>
        <div className="flex w-[50%] h-full">
          <Image src={registerImage} alt="Register Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Register;
