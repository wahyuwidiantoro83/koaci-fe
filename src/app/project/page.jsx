"use client";
import Layout from "@/components/layout";
import Image from "next/image";
import personOne from "@/images/person_1.png";
import sample_project_1 from "@/images/sample_project_1.jpg";
import sample_project_2 from "@/images/sample_project_2.jpg";
import sample_project_3 from "@/images/sample_project_3.jpg";
import sample_project_4 from "@/images/sample_project_4.jpg";
import sample_project_5 from "@/images/sample_project_5.jpg";
import sample_project_6 from "@/images/sample_project_6.jpg";
import sample_project_7 from "@/images/sample_project_7.jpg";
import sample_project_8 from "@/images/sample_project_8.jpg";
import sample_project_9 from "@/images/sample_project_9.jpg";
import sample_project_10 from "@/images/sample_project_10.jpg";
import { RiArrowRightUpLine } from "react-icons/ri";

const Project = (props) => {
  return (
    <>
      <Layout>
        <div className="flex items-end w-full px-4 pb-12 md:px-24 h-56 bg-gradient-to-r from-[#1E74D7] from-[0%] via-[#1F98DB] via-[54%] to-[#1EE0B3] to-100%">
          <h1 className="text-xl md:text-3xl text-white font-normal">
            Proyek Yang Telah Kami Selesaikan
          </h1>
        </div>
        <div className="flex flex-col w-full px-4 py-16 md:px-24">
          <h2 className="text-2xl md:text-2xl font-normal mb-8">
            Proyek Terpilih dengan klien <br></br> terbaik kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t-4 border-b-4 py-8">
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden
                <Image className="w-full h-full object-cover" src={sample_project_1} alt="sample project 1" /
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Pembuatan Website Abracadabra</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2022</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT Codephie Rekadaya Mandiri</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pembuatan Website Abracadabra oleh PT Inagri (2022): PT Inagri sebagai
                  penerima manfaat menjalankan proyek pembuatan website Abracadabra atas permintaan
                  dari PT Codephie Rekadaya Mandiri sebagai pemberi kerja. Proyek ini dimulai pada 4
                  Agustus 2022 dengan target selesai pada 31 Oktober 2022, namun memerlukan waktu
                  tambahan hingga rampung pada 16 November 2022.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_2} alt="sample project 2" />              </div>
              <div className="flex justify-between">
                <p className="text-lg">J-Bow Riser Main Oil Line (MOL) 12" XMA KE XAP</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2024</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT Pertamina EP</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek J-Bow Riser Main Oil Line oleh PT JPC (2022): PT JPC menerima proyek dari
                  PT Pertamina EP sebagai pemberi kerja untuk pengadaan J-Bow Riser Main Oil Line
                  (MOL) 12” XMA KE XAP pada Pipeline Clamp. Proyek ini dimulai pada 30 November 2022
                  dengan target selesai pada 30 Mei 2023, tetapi memerlukan perpanjangan waktu
                  hingga 2 Juni 2024.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_3} alt="sample project 3" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Bahan Kimia dan Biologi Pengolahan Limbah</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2023</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">Online Seller</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan Bahan Kimia dan Biologi oleh PT Ganesha Technology (2023): PT
                  Ganesha Technology melaksanakan proyek yang dibiayai oleh Online Seller sebagai
                  pemberi kerja untuk pengadaan bahan kimia dan biologi pengolahan limbah. Proyek
                  dimulai pada 5 Februari 2023 dan berhasil diselesaikan lebih cepat pada 2 Agustus
                  2023.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_4} alt="sample project 4" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Pengadaan Barang dan Instalasi HVAC</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2023</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT Gandum Mas Kencana</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan dan Instalasi HVAC oleh PT Sari Unggul Abadi-1 (2023): PT Sari
                  Unggul Abadi mendapatkan proyek dari PT Gandum Mas Kencana sebagai pemberi kerja
                  untuk pengadaan dan instalasi sistem HVAC. Proyek ini dimulai pada 7 April 2023
                  dan selesai lebih awal dari target pada 10 Agustus 2023.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_5} alt="sample project 5" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Aksesoris Fiber Optic</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2024</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT Bimasakti Selular Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan Aksesoris Fiber Optik oleh CV Inti Muda Perkasa (2023): CV Inti
                  Muda Perkasa melaksanakan proyek atas permintaan PT Bimasakti Selular Indonesia
                  sebagai pemberi kerja untuk pengadaan aksesoris fiber optik. Proyek ini dimulai
                  pada 4 Agustus 2023 dan selesai sesuai jadwal pada 5 Februari 2024.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_6} alt="sample project 6" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Bahan Kimia dan Biologi Pengolahan Limbah</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2024</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">Online Seller</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan Bahan Kimia dan Biologi oleh PT Ganesha Technology-2 (2023): PT
                  Ganesha Technology menerima proyek kedua dari Online Seller sebagai pemberi kerja
                  untuk pengadaan bahan kimia dan biologi. Dimulai pada 5 Agustus 2023, proyek ini
                  selesai tepat waktu pada 5 Februari 2024.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_7} alt="sample project 7" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Pengadaan Barang dan Instalasi HVAC</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2023</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT. Gandum Mas Kencana</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan dan Instalasi HVAC oleh PT Sari Unggul Abadi-2 (2023): PT Sari
                  Unggul Abadi kembali mendapatkan proyek dari PT Gandum Mas Kencana untuk pengadaan
                  dan instalasi sistem HVAC. Dimulai pada 11 Agustus 2023, proyek ini memerlukan
                  waktu tambahan hingga selesai pada 27 Desember 2023.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_8} alt="sample project 8" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Pengadaan Barang dan Instalasi HVAC</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2024</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT Assahimas Chemical</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan Barang dan Instalasi HVAC oleh PT Arya Jaya (2024): PT Arya Jaya
                  melaksanakan proyek yang dibiayai oleh PT Assahimas Chemical untuk pengadaan dan
                  instalasi HVAC. Proyek ini dimulai pada 21 September 2023 dan rampung setelah
                  penyesuaian waktu pada 15 Maret 2024.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_9} alt="sample project 9" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Pengadaan Barang Palletizing & Air Circulatio</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2024</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT Perusahaan Industri Ceres</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan Barang Palletizing & Air Circulation oleh PT Arya Jaya (2024): PT
                  Arya Jaya mengerjakan proyek yang diberikan oleh PT Perusahaan Industri Ceres
                  untuk pengadaan barang Palletizing & Air Circulation. Dimulai pada 26 April 2024,
                  proyek ini selesai setelah mengalami penyesuaian waktu pada 8 Oktober 2024.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square overflow-hidden">
              <Image className="w-full h-full object-cover" src={sample_project_10} alt="sample project 10" /> 
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Pengadaan Barang AC WAREHOUSE FG-88</p>
                <a href="#">
                  <RiArrowRightUpLine className="w-8 h-8" />
                </a>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <p>Tahun</p>
                  <p className="font-light text-sm">2024</p>
                </div>
                <div className="flex flex-col">
                  <p>Klien</p>
                  <p className="font-light text-sm">PT Perusahaan Industri Ceres</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p>Deskripsi</p>
                <p className="font-light text-sm">
                  Proyek Pengadaan Barang AC Warehouse oleh PT Arya Jaya (2024): PT Arya Jaya
                  mendapatkan proyek dari PT Perusahaan Industri Ceres untuk pengadaan barang AC
                  Warehouse FG-88. Proyek ini dimulai pada 8 Juli 2024 dan selesai lebih cepat pada
                  5 November 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Project;
