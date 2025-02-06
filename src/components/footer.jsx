import partnerOne from "@/images/partner_1.png";
import partnerTwo from "@/images/partner_2.png";
import partnerThree from "@/images/partner_3.png";
import partnerFour from "@/images/partner_4.png";
import partnerFive from "@/images/partner_5.png";
import partnerSix from "@/images/partner_6.png";
import partnerSeven from "@/images/partner_7.png";
import partnerEight from "@/images/partner_8.png";
import partnerNine from "@/images/partner_9.png";
import logo from "@/images/koaci_slogan.png";
import Image from "next/image";
import { RiInstagramLine, RiLinkedinBoxLine, RiTiktokLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = (props) => {
  const router = useRouter();

  return (
    <footer className="bg-[#0957B1] text-gray-100">
      <div className="flex flex-col md:flex-row gap-6 justify-between px-4 lg:px-24 py-8 lg:py-10">
        <div className="flex flex-col gap-4">
          <Image src={logo} width={120} alt="Logo Footer" />
          <div className="text-sm text-justify">
            <p className="font-normal mb-1">PT. Koaci Sinergi Indonesia</p>
            <p className="font-light">Jl. Terusan Sukadamai II No. 5,</p>
            <p className="font-light">Kelurahan Sukabungah, Kecamatan Sukajadi,</p>
            <p className="font-light">Kota Bandung, Jawa Barat, Indoensia 40162</p>
          </div>
          <div className="flex gap-4 text-sm text-justify">
            <div>
              <p className="font-normal mb-1">Email</p>
              <a href="mailto:marketing@koaci.id">
                <p className="font-light">marketing@koaci.id</p>
              </a>
            </div>
            <div>
              <p className="font-normal mb-1">Telephone</p>
              <p className="font-light">+62 821-2608-1955</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-sm mb-1">Social Media</p>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/koaci_ecosystem/" target="_blank">
                <RiInstagramLine className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/company/koaci-id/" target="_blank">
                <RiLinkedinBoxLine className="w-7 h-7" />
              </a>
              <a href="https://www.tiktok.com/@koaci_ecosystem" target="_blank">
                <RiTiktokLine className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-normal mb-2">Halaman</h5>
          <div className="flex flex-col">
            <Link className="font-light" href={"/"}>
              Pendanaan
            </Link>
            <Link className="font-light" href={"/project"}>
              Proyek
            </Link>
            <Link className="font-light" href={"/faq"}>
              F.A.Q
            </Link>
            <Link className="font-light" href={"/about-us"}>
              Tentang Kami
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-normal mb-2">Mitra Koaci</h5>
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
            <div className="flex justify-between gap-2">
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
                  src={partnerNine}
                  alt="Partner Nine"
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 lg:px-24 py-8 lg:py-10">
        <h2 className="text-2xl md:text-4xl mb-2 font-normal">DISCLAIMER</h2>
        <div className="flex flex-col gap-4 font-light text-sm text-justify">
          <p>
            Layanan Pembiayaan Berbasis Proyek (Project Financing) dan Kemitraan (Cashflow
            Financing) berdasarkan prinsip syariah merupakan kesepakatan perdata antara pemberi
            pembiayaan (investor) dengan penerima pembiayaan (pebisnis) sehingga segala resiko yang
            timbul dari kesepakatan tersebut ditanggung sepenuhnya oleh masing-masing pihak.
          </p>
          <p>
            PT Koaci Sinergi Indonesia adalah penyedia layanan yang mempertemukan antara investor
            dan beneficiary. Apabila terjadi pelanggaran baik itu atas kesepakatan kedua belah pihak
            atapun hukum yang berlaku di Negara Keatuan Republik Indonesia, keputusan jalur hukum
            dikembalikan ke masing-masing pihak dan PT Koaci Sinergi Indonesia tidak menjadi pihak
            yang menanggung biaya jalur hukum.
          </p>
          <p>
            Investor yang belum memiliki pengalaman terhadap layanan pembiayaan dan investasi ini
            disarankan agar mempelajari mengenai investasi berbasis proyek terlebih dahulu.
          </p>
          <p>
            Pengguna yang belum pernah menjadi investor atau pebisnis harus membaca dan memahami
            informasi terkait S&K pengguna layanan yang disedia oleh PT Koaci Sinergi Indonesia
            sebelum membuat keputusan.
          </p>
          <p>
            Setiap kecurangan yang terjadi secara digital di dunia maya dapat diketahui oleh
            masyarakat luas di media sosial.
          </p>
          <p>
            Penyelenggara (PT Koaci Sinergi Indonesia) dengan persetujuan dari masing-masing
            pengguna (investor ataupun pebisnis) dapat mengakses, memperoleh, menyimpan, mengelola
            dan.atau menggunakan data pribadi pengguna pada perangkat lunak maupun perangkat keras
            dengan memberitahukan tujuan, batasan, dan mekanisme pemanfaatan data kepada pengguna.
          </p>
          <p>
            Setiap kesepakatan atas layanan yang telah disepakati dan ditandatangani oleh investor
            tidak dapat dibatalkan ditengah keberjalanan proyek hingga proyek berakhir, kecuali
            terjadi wanprestasi.
          </p>
        </div>
        <div className="flex flex-col text-sm text-justify">
          <h5 className="font-normal mb-1">Risiko Usaha</h5>
          <p className="font-light">
            Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan usaha.
            Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan usaha secara
            sementara sebagai dampak dari adanya bencana alam dan/atau keadaan kahar lainnya.
          </p>
        </div>
        <div className="flex flex-col text-sm text-justify">
          <h5 className="font-normal mb-1">Risiko Kerugian Investasi</h5>
          <p className="font-light">
            Setiap investasi memiliki tingkat risiko yang beragam, salah satunya adalah tidak
            terkumpulnya dana investasi sesuai proyeksi yang telah ditetapkan dan/atau proyek yang
            dijalankan tidak menghasilkan keuntungan sesuai dengan yang ditargetkan.
          </p>
        </div>
        <div className="flex flex-col text-sm text-justify">
          <h5 className="font-normal mb-1">Risiko Kekurangan Likuiditas</h5>
          <p className="font-light">
            Pemodal yang melakukan investasi memungkinkan dalam bentuk tidak likuid karena efek
            bersifat ekuitas yang ditawarkan tidak terdaftar di bursa efek atau belum dilaksanakan
            pasar sekunder. Hal ini berarti Pemodal mungkin tidak dapat dengan mudah menjual saham
            miliknya kepada pihak lain.
          </p>
        </div>
        <div className="flex flex-col text-sm text-justify">
          <h5 className="font-normal mb-1">
            Risiko Kelangkaan Pembagian Dividen dan/atau Dilusi Kepemilikan
          </h5>
          <p className="font-light">
            Saham, Jika Efek Yang Diterbitkan Merupakan Saham Setiap Pemodal yang melakukan
            investasi pada efek bersifat ekuitas berupa saham, memiliki hak untuk mendapat dividen
            sesuai dengan jumlah kepemilikan yang dimiliki yang dibagikan oleh Penerbit melalui
            Penyelenggara secara periodik. Namun, kelangkaan dalam pembagian dividen dimungkinkan
            terjadi karena kinerja bisnis suatu proyek yang diinvestasikan tidak berjalan
            sebagaimana mestinya serta berpotensi terdilusi kepemilikan saham karena bertambahnya
            total saham yang beredar atau ditawarkan.
          </p>
        </div>
        <div className="flex flex-col text-sm text-justify">
          <h5 className="font-normal mb-1">Risiko Gagal Bayar</h5>
          <p className="font-light">
            Penawaran Efek bersifat utang atau sukuk memiliki risiko dimana Penerbit akan gagal
            bayar (default). Apabila Penerbit mengalami gagal bayar maka Wali Amanat berdasarkan
            Surat Kuasa akan mengundang dan mengadakan Rapat Umum Pemegang Obligasi (RUPO), dalam
            RUPO tersebut akan dibahas mengenai gagal bayar yang terjadi serta skema perpanjangan
            jatuh tempo kupon ataupun eksekusi jaminan fidusia dan jaminan Penerbit lainnya
            (apabilaada).
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center p-4">
        <span className="text-xs">© 2025 All Rights Reserved. Koaci Investasi</span>
      </div>
    </footer>
  );
};

export default Footer;
