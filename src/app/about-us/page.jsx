"use client";

import Layout from "@/components/layout";
import Image from "next/image";
import personOne from "@/images/person_1.png";
import personTwo from "@/images/person_2.png";
import personThree from "@/images/person_3.png";
import AboutUS from "@/images/bg_about_us.png";
import smallLogo from "@/images/logo_simple.png";

const About = () => {
  return (
    <>
      <Layout>
        <div className="flex items-end w-full px-4 pb-12 md:px-24 h-56 bg-gradient-to-r from-[#1E74D7] from-[0%] via-[#1F98DB] via-[54%] to-[#1EE0B3] to-100% relative">
          <h1 className="text-xl md:text-3xl text-white font-normal z-10">Tentang Kami</h1>
          <Image
            src={AboutUS}
            alt="Background About Us"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        <div className="flex w-full relative overflow-hidden">
          <Image
            src={smallLogo}
            alt="Gear Logo"
            className="w-96 absolute -bottom-48 -left-36 scale-150"
          />
          <div className="flex flex-col md:flex-row w-full items-center px-4 py-16 md:py-28 md:px-24 gap-8 md:gap-20">
            <div className="flex w-full">
              <p className="text-4xl font-light">
                "<span className="text-[#2F63B0] font-normal">KOACI</span> merupakan ekosistem <br></br>{" "}
                keuangan syariah berbasis<br></br>komunitas untuk pertumbuhan<br></br>berjama'ah"
              </p>
            </div>
            <div className="flex w-full flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-normal">Apa Itu Koaci?</h2>
              <div className="mr-15 font-light">
                <p>
                Perusahaan financial services syariah berbasis komunitas / Close-loop di Indonesia yang didedikasikan untuk memajukan nilai-nilai ekonomi syariah. Koaci berfokus pada pendanaan bisnis syariah yang berkelanjutan, menyediakan solusi keuangan yang adil dan aman dengan melakukan layanan solusi bisnis pada perusahaan yang diberikan pendanaan. 
                </p>
                <br />
                <p>
                Selain memberikan pendanaan, Koaci memberikan layanan solusi bisnis untuk para mitra yang memiliki kendala pada pengelolaan operasional, keuangan, dan bagian manajemen atau HR.
                </p>
                <br />
                <p>
                Koaci juga membangun ekosistem yang menunjang setiap pihak dalam berkembang bersama dalam memajukan nilai-nilai ekonomi syariah, menjalankan syariat secara berjama’ah menjadi solusi utama untuk membangun ekosistem yang penuh keberkahan. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full px-4 py-16 md:px-24 gap-6 bg-gradient-to-r from-[#1EE0B3]  to-[#1E74D7] from-[12%] to-75% text-white">
          <div className="flex flex-1 flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-normal">Visi Koaci</h3>
            <p className="font-light">
            Menanamkan nilai pemahaman dalam setiap kemitraan yang akan dijalankan, nilai keterbukaan dan kepercayaan dalam pelaksanaan, sehingga dapat memperoleh nilai keadilan dan keridhoan setelah kerjasama dilaksanakan
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-normal">Misi Koaci</h3>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <span className="flex w-8 h-8 rounded-xl justify-center items-center text-white font-medium bg-[#1EE0B3]">
                  1
                </span>
                <p className="flex flex-1 font-light">
                  Menjalankan investasi dan pembiayaan yang aman dan terpercaya sesuai prinsip
                  syariah.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex w-8 h-8 rounded-xl justify-center items-center text-white font-medium bg-[#1EE0B3]">
                  2
                </span>
                <p className="flex flex-1 font-light">
                  Adil – Mendefinisikan besaran keuntungan ataupun kerugian (bagi hasil) tiap pihak
                  sesuai dengan besarnya tanggung jawab dan risiko.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex w-8 h-8 rounded-xl justify-center items-center text-white font-medium bg-[#1EE0B3]">
                  3
                </span>
                <p className="flex flex-1 font-light">
                  Kemitraan – Mendefinisikan hak, kewajiban, serta tanggung jawab tiap pihak diawal
                  perjanjian.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex w-8 h-8 rounded-xl justify-center items-center text-white font-medium bg-[#1EE0B3]">
                  4
                </span>
                <p className="flex flex-1 font-light">
                  Transparansi – Menyampaikan laporan penggunaan dana serta informasi keberjalanan
                  investasi dan pembiayaan.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="flex w-8 h-8 rounded-xl justify-center items-center text-white font-medium bg-[#1EE0B3]">
                  5
                </span>
                <p className="flex flex-1 font-light">
                  Universal – Tidak membeda-bedakan suku, ras, dan agama.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full px-4 py-16 md:px-24">
          <div className="flex flex-col w-full items-center">
            <h2 className="text-3xl font-normal mb-8 md:mb-16">Mari Berkenalan Dengan Tim Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-16 md:gap-32">
              <div className="flex max-w-96 flex-col gap-4">
                <div className=" w-full aspect-square overflow-hidden rounded-sm">
                  <Image className="w-full" src={personOne} alt="Person One" />
                </div>
                <p className="text-center font-medium text-2xl">Norman Ibrahim Sultan</p>
                <p className="text-center font-medium text-2xl italic">Founder & CEO</p>
                <p className="text-justify font-light">
                Lulusan kampus POLBAN tahun 2020 program studi D3 Teknik Informatika. Berpengalaman sebagai full-stack developer dan marketing di perusahaan software house, properti, dan asuransi selama 1 tahun. Berpengalaman menjalankan usaha koperasi selama 1 tahun sebagai Kepala Manajemen. Aktif mengikuti organisasi kampus sebagai ketua angkatan POLBAN Archery 2017, dan Ketua BEM POLBAN periode 2018/2019, serta mengikuti organisasi pasca lulus sebagai kepala divisi hubungan almamater Ikatan Keluarga Alumni POLBAN (IKAPOLBAN) 2021. Mengemban amanah di Koaci dari awal pendirian pada tahun 2020.
                </p>
              </div>
              <div className="flex max-w-96 flex-col gap-4">
                <div className=" w-full aspect-square overflow-hidden rounded-sm">
                  <Image className="w-full" src={personTwo} alt="Person One" />
                </div>
                <p className="text-center font-medium text-2xl">Syarif Mawardi Putra</p>
                <p className="text-center font-medium text-2xl italic">Co-Founder & COO</p>
                <p className="text-justify font-light">
                Lulusan kampus UNISBA 2021 program studi S1 Matematika dengan predikat Cum Laude, disertai menjadi asisten dosen praktikum matematika. Berpengalaman menjalankan usaha F&B selama 1 tahun, serta menjadi konsultan bisnis. Aktif mengikuti organisasi kampus sebagai ketua angkatan Fakultas MIPA 2017 UNISBA, tergabung dengan ILM MIPA sebagai Koordinator Wilayah Jawa Barat, dan wakil ketua BEM Fakultas MIPA periode 2019/2020. Mengemban amanah di Koaci dari tahun 2022, dengan latar belakang rekan SMA dari Norman Ibrahim Sultan (Founder & CEO).
                </p>
              </div>
              <div className="flex max-w-96 flex-col gap-4">
                <div className=" w-full aspect-square overflow-hidden rounded-sm">
                  <Image className="w-full" src={personThree} alt="Person One" />
                </div>
                <p className="text-center font-medium text-2xl">Septian Dwi Priyatmoko</p>
                <p className="text-center font-medium text-2xl italic">Co-Founder & CFO</p>
                <p className="text-justify font-light">
                Lulusan kampus POLBAN tahun 2021 program studi D4 Akuntansi Manajemen Pemerintahan dengan predikat Cum Laude. Berpengalaman sebagai Akuntan di perusahaan manufaktur, jasa, dan pariwisata selama 1 tahun. Sudah tersertifikasi sebagai Teknisi Akuntan Yunior. Berpengalaman menjalankan usaha fashion, cuci sepatu, dan budidaya maggot selama 3 tahun. Aktif mengikuti organisasi sebagai Ketua Himpunan Mahasiswa Akuntansi POLBAN periode 2018/2019. Mengemban amanah di Koaci dari tahun 2023, dengan latar belakang rekan kampus POLBAN dari Norman Ibrahim Sultan (Founder & CEO).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
