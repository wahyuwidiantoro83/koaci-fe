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

const testimony = [
  {
    name: "Nur Islamy Javad",
    job: "CDEF at Sharing Vision & Founder Invst.id",
    rating: 5,
    comment:
      "Koaci sangat profesional dan disiplin dalam monitoring, pembukuan, serta menjalankan timeline. Timnya kolaboratif, terbuka terhadap masukan, dan berkomitmen pada peningkatan kualitas",
  },
];

const portfolio = [
  {
    name: "Porto One",
    alt: "porto_one",
    image: portoOne,
  },
  {
    name: "Porto Two",
    alt: "porto_two",
    image: portoTwo,
  },
  {
    name: "Porto Three",
    alt: "porto_three",
    image: portoThree,
  },
  {
    name: "Porto Four",
    alt: "porto_four",
    image: portoFour,
  },
  {
    name: "Porto Five",
    alt: "porto_five",
    image: portoFive,
  },
  {
    name: "Porto Six",
    alt: "porto_six",
    image: portoSix,
  },
  {
    name: "Porto Seven",
    alt: "porto_seven",
    image: portoSeven,
  },
  {
    name: "Porto Eight",
    alt: "porto_eight",
    image: portoEight,
  },
  {
    name: "Porto Nine",
    alt: "porto_nine",
    image: portoNine,
  },
  {
    name: "Porto Ten",
    alt: "porto_ten",
    image: portoTen,
  },
];

const projects = [
  {
    srcImg: sample_project_1,
    title: "Pembuatan Website Abracadabra",
    year: 2022,
    client: "PT Codephie Rekadaya Mandiri",
    description:
      "Proyek Pembuatan Website Abracadabra oleh PT Inagri (2022): PT Inagri sebagai penerima manfaat menjalankan proyek pembuatan website Abracadabra atas permintaan dari PT Codephie Rekadaya Mandiri sebagai pemberi kerja. Proyek ini dimulai pada 4 Agustus 2022 dengan target selesai pada 31 Oktober 2022, namun memerlukan waktu tambahan hingga rampung pada 16 November 2022.",
  },
  {
    srcImg: sample_project_2,
    title: 'Pengadaan Barang J-Bow Riser Main Oil Line (MOL) 12" XMA KE XAP',
    year: 2024,
    client: "PT Pertamina EP",
    description:
      "Proyek J-Bow Riser Main Oil Line oleh PT JPC (2022): PT JPC menerima proyek dari PT Pertamina EP sebagai pemberi kerja untuk pengadaan J-Bow Riser Main Oil Line (MOL) 12” XMA KE XAP pada Pipeline Clamp. Proyek ini dimulai pada 30 November 2022 dengan target selesai pada 30 Mei 2023, tetapi memerlukan perpanjangan waktu hingga 2 Juni 2024.",
  },
  {
    srcImg: sample_project_3,
    title: "Pembuatan Bahan Kimia dan Biologi Pengolahan Limbah",
    year: 2023,
    client: "Online Seller",
    description:
      "Proyek Pengadaan Bahan Kimia dan Biologi oleh PT Ganesha Technology (2023): PT Ganesha Technology melaksanakan proyek yang dibiayai oleh Online Seller sebagai pemberi kerja untuk pengadaan bahan kimia dan biologi pengolahan limbah. Proyek dimulai pada 5 Februari 2023 dan berhasil diselesaikan lebih cepat pada 2 Agustus 2023.",
  },
  {
    srcImg: sample_project_4,
    title: "Pengadaan Barang dan Instalasi HVAC",
    year: 2023,
    client: "PT Gandum Mas Kencana",
    description:
      "Proyek Pengadaan dan Instalasi HVAC oleh PT Sari Unggul Abadi-1 (2023): PT Sari Unggul Abadi mendapatkan proyek dari PT Gandum Mas Kencana sebagai pemberi kerja untuk pengadaan dan instalasi sistem HVAC. Proyek ini dimulai pada 7 April 2023 dan selesai lebih awal dari target pada 10 Agustus 2023.",
  },
  {
    srcImg: sample_project_5,
    title: "Pengadaan Barang Aksesoris Fiber Optik",
    year: 2024,
    client: "PT Bimasakti Selular Indonesia",
    description:
      "Proyek Pengadaan Aksesoris Fiber Optik oleh CV Inti Muda Perkasa (2023): CV Inti Muda Perkasa melaksanakan proyek atas permintaan PT Bimasakti Selular Indonesia sebagai pemberi kerja untuk pengadaan aksesoris fiber optik. Proyek ini dimulai pada 4 Agustus 2023 dan selesai sesuai jadwal pada 5 Februari 2024.",
  },
  {
    srcImg: sample_project_6,
    title: "Pembuatan Bahan Kimia dan Biologi Pengolahan Limbah",
    year: 2024,
    client: "Online Seller",
    description:
      "Proyek Pengadaan Bahan Kimia dan Biologi oleh PT Ganesha Technology-2 (2023): PT Ganesha Technology menerima proyek kedua dari Online Seller sebagai pemberi kerja untuk pengadaan bahan kimia dan biologi. Dimulai pada 5 Agustus 2023, proyek ini selesai tepat waktu pada 5 Februari 2024.",
  },
  {
    srcImg: sample_project_7,
    title: "Pengadaan Barang dan Instalasi HVAC",
    year: 2023,
    client: "PT Gandum Mas Kencana",
    description:
      "Proyek Pengadaan dan Instalasi HVAC oleh PT Sari Unggul Abadi-2 (2023): PT Sari Unggul Abadi kembali mendapatkan proyek dari PT Gandum Mas Kencana untuk pengadaan dan instalasi sistem HVAC. Dimulai pada 11 Agustus 2023, proyek ini memerlukan waktu tambahan hingga selesai pada 27 Desember 2023.",
  },
  {
    srcImg: sample_project_8,
    title: "Pengadaan Barang dan Instalasi HVAC",
    year: 2024,
    client: "PT Assahimas Chemical",
    description:
      "Proyek Pengadaan Barang dan Instalasi HVAC oleh PT Arya Jaya (2024): PT Arya Jaya melaksanakan proyek yang dibiayai oleh PT Assahimas Chemical untuk pengadaan dan instalasi HVAC. Proyek ini dimulai pada 21 September 2023 dan rampung setelah penyesuaian waktu pada 15 Maret 2024.",
  },
  {
    srcImg: sample_project_9,
    title: "Pengadaan Barang Palletizing & Air Circulator",
    year: 2024,
    client: "PT Perusahaan Industri Ceres",
    description:
      "Proyek Pengadaan Barang Palletizing & Air Circulation oleh PT Arya Jaya (2024): PT Arya Jaya mengerjakan proyek yang diberikan oleh PT Perusahaan Industri Ceres untuk pengadaan barang Palletizing & Air Circulation. Dimulai pada 26 April 2024, proyek ini selesai setelah mengalami penyesuaian waktu pada 8 Oktober 2024.",
  },
  {
    srcImg: sample_project_10,
    title: "Pengadaan Barang AC Warehouse FG-88",
    year: 2024,
    client: "PT Perusahaan Industri Ceres",
    description:
      "Proyek Pengadaan Barang AC Warehouse oleh PT Arya Jaya (2024): PT Arya Jaya mendapatkan proyek dari PT Perusahaan Industri Ceres untuk pengadaan barang AC Warehouse FG-88. Proyek ini dimulai pada 8 Juli 2024 dan selesai lebih cepat pada 5 November 2024.",
  },
];

export { testimony, portfolio, projects };
