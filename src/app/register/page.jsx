"use client";

import registerImage from "@/images/register_image.png";
import logoKoaci from "@/images/koaci_slogan.png";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";

const Register = (props) => {
  const initialForm = {
    Nama: "",
    Email: "",
    Nomor: "",
    Role: "",
  };

  const router = useRouter();
  const [formData, setFormData] = useState(initialForm);
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    return (
      formData.Nama.trim() !== "" &&
      formData.Email.trim() !== "" &&
      formData.Nomor.trim() !== "" &&
      formData.Role.trim() !== ""
    );
  };

  const submitFormRegister = () => {
    if (!validateForm()) {
      setIsErrorOpen(true);
      return;
    }

    setIsLoading(true); // Aktifkan loading
    let data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbyaKxEjwOYaIS2i_x_SUVrRpwBwQccFccHA7ZQl1Oyvaxdx2QLFsvu2yPEA9v1GdrrK/exec",
      {
        method: "POST",
        body: data,
        mode: "no-cors",
      }
    )
      .then((response) => {
        if (response.status < 400) {
          setFormData(initialForm);
          setIsOpen(true); // Tampilkan dialog sukses
        }
      })
      .finally(() => {
        setIsLoading(false); // Matikan loading setelah proses selesai
      });
  };

  return (
    <>
      <div className="flex w-full min-h-svh">
        <div className="flex w-full lg:w-[50%] flex-col px-4 lg:px-24 py-10 bg-gradient-to-b from-[#1E74D7] from-[10%] to-[#1EE0B3] to-100%">
          <div
            className="flex items-center mb-8 md:mb-16 text-gray-100 cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <RiArrowLeftSLine className="w-8 h-8" />
            <p className="text-sm">Back to Home Page</p>
          </div>
          <div className="flex gap-4 items-center mb-6 md:mb-10">
            <p className="text-gray-100 text-2xl font-normal">Welcome to</p>
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
                value={formData.Nama}
                required
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Nama: e.target.value };
                  });
                }}
              />
              <input
                type="email"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Email Anda"
                required
                value={formData.Email}
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Email: e.target.value };
                  });
                }}
              />
              <input
                type="number"
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                placeholder="Masukkan Nomor Handphone Anda"
                required
                value={formData.Nomor}
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Nomor: e.target.value };
                  });
                }}
              />
              <select
                className="bg-transparent outline-none border-2 border-gray-200 focus:border-white rounded-md px-6 py-3 placeholder:text-gray-200"
                required
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, Role: e.target.value };
                  });
                }}
                value={formData.Role}
              >
                <option value="" disabled>
                  Pilih Role Anda
                </option>
                <option value="pebisnis" className="text-black">
                  Pebisnis
                </option>
                <option value="investor" className="text-black">
                  Investor
                </option>
              </select>
              <Button
                className="bg-white text-black hover:bg-gray-200"
                onClick={submitFormRegister}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Kirim"}
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-[50%]">
          <Image src={registerImage} alt="Register Image" className="w-full object-cover" />
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-2xl md:text-3xl font-normal text-center text-gray-800">
                  Anda Telah Berhasil Mendaftar!
                </h2>
                <p className="text-base text-center font-light">
                  Data anda telah tersimpan pada database kami, selanjutnya kami akan menghubungi
                  anda melalui email atau nomor handphone yang tertera.
                </p>
                <button
                  className="px-6 py-2 rounded-lg w-fit bg-[#1F98DB] text-white hover:bg-[#1f99dbe8] text-sm"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  OK
                </button>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={isErrorOpen} onOpenChange={setIsErrorOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-2xl md:text-3xl font-normal text-center text-red-600">
                  Input Tidak Valid!
                </h2>
                <p className="text-base text-center font-light">
                  Mohon isi semua data dengan lengkap dan sesuai sebelum melanjutkan.
                </p>
                <button
                  className="px-6 py-2 rounded-lg w-fit bg-red-600 text-white hover:bg-red-500 text-sm"
                  onClick={() => setIsErrorOpen(false)}
                >
                  OK
                </button>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Register;
