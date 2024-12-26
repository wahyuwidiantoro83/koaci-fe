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

const Footer = (props) => {
  return (
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
              <a href="mailto:koaci.sinergi@gmail.com"><p className="font-light">koaci.sinergi@gmail.com</p></a>
            </div>
            <div>
              <p className="font-medium">Telephone</p>
              <p className="font-light">+62 882 1945 2787</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-sm">Social Media</p>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/koaci_investasi/" target="_blank"><RiInstagramLine className="w-7 h-7" /></a>
              <a href="https://www.linkedin.com/company/koaci-id/" target="_blank"><RiLinkedinBoxLine className="w-7 h-7" /></a>
              <a href="https://www.tiktok.com/@koaci_investasi" target="_blank"><RiTiktokLine className="w-7 h-7" /></a>              
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-medium">Halaman</h5>
          <div className="flex flex-col">
            <a href="#"><p className="font-light">Pendanaan</p></a>
            <a href="#"><p className="font-light">Proyek</p></a>
            <a href="#"><p className="font-light">F.A.Q</p></a>
            <a href="#"><p className="font-light">Tentang Kami</p></a>
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
      <div className="flex flex-col gap-4 px-4 md:px-24 mt-10">
        <h2 className="text-2xl md:text-4xl mb-3 font-medium">DISCLAIMER</h2>
        <div className="flex flex-col gap-4 font-light">
          <p>
            Layanan pembiayaan dan investasi berdasarkan prinsip syariah berbasis proyek merupakan
            kesepakatan perdata antara pemberi pembiayaan (investor) dengan penerima pembiayaan
            (pebisnis) sehingga segala resiko yang timbul dari kesepakatan tersebut ditanggung
            sepenuhnya oleh masing-masing pihak.
          </p>
          <p>
            Risiko pembiayaan atau gagal bayar ditanggung sepenuhnya oleh investor. Tidak ada
            lembaga atau otoritas negara yang bertanggung jawab atas resiko gagal bayar ini. PT
            Koaci Sinergi Indonesia menyediakan wadah pertemuan tertutup antara investor dan
            pebisnis, serta menjadi pihak penengah dan siap membantu pihak yang dirugikan hingga ke
            jalur hukum.
          </p>
          <p>
            Investor yang belum memiliki pengetahuan dan pengalaman terhadap layanan pembiayaan dan
            investasi ini disarankan agar tidak menggunakan layanan ini.
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
            pengguna (investor ataupun pebisnis) dapat mengakses, memperoleh, menyimpan, mengelola
            dan.atau menggunakan data pribadi pengguna pada perangkat lunak maupun perangkat keras
            dengan memberitahukan tujuan, batasan, dan mekanisme pemanfaatan data kepada pengguna
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-medium">Risiko Usaha</h5>
          <p className="font-light">
            Risiko usaha merupakan hal yang tidak dapat dihindari dalam menjalankan kegiatan usaha.
            Sejumlah risiko usaha yang mungkin saja terjadi adalah penutupan kegiatan usaha secara
            sementara sebagai dampak dari adanya bencana alam dan/atau keadaan kahar lainnya.
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-medium">Risiko Kerugian Investasi</h5>
          <p className="font-light">
          Setiap investasi memiliki tingkat risiko yang beragam, salah satunya adalah tidak terkumpulnya dana investasi sesuai proyeksi yang telah ditetapkan dan/atau proyek yang dijalankan tidak menghasilkan keuntungan sesuai dengan yang ditargetkan.
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-medium">Risiko Kekurangan Likuiditas</h5>
          <p className="font-light">
          Pemodal yang melakukan investasi memungkinkan dalam bentuk tidak likuid karena efek bersifat ekuitas yang ditawarkan tidak terdaftar di bursa efek atau belum dilaksanakan pasar sekunder. Hal ini berarti Pemodal mungkin tidak dapat dengan mudah menjual saham miliknya kepada pihak lain.
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-medium">Risiko Kelangkaan Pembagian Dividen dan/atau Dilusi Kepemilikan</h5>
          <p className="font-light">
          Saham, Jika Efek Yang Diterbitkan Merupakan Saham Setiap Pemodal yang melakukan investasi pada efek bersifat ekuitas berupa saham, memiliki hak untuk mendapat dividen sesuai dengan jumlah kepemilikan yang dimiliki yang dibagikan oleh Penerbit melalui Penyelenggara secara periodik. Namun, kelangkaan dalam pembagian dividen dimungkinkan terjadi karena kinerja bisnis suatu proyek yang diinvestasikan tidak berjalan sebagaimana mestinya serta berpotensi terdilusi kepemilikan saham karena bertambahnya total saham yang beredar atau ditawarkan.
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-medium">Risiko Gagal Bayar</h5>
          <p className="font-light">
          Penawaran Efek bersifat utang atau sukuk memiliki risiko dimana Penerbit akan gagal bayar (default). Apabila Penerbit mengalami gagal bayar maka Wali Amanat berdasarkan Surat Kuasa akan mengundang dan mengadakan Rapat Umum Pemegang Obligasi (RUPO), dalam RUPO tersebut akan dibahas mengenai gagal bayar yang terjadi serta skema perpanjangan jatuh tempo kupon ataupun eksekusi jaminan fidusia dan jaminan Penerbit lainnya (apabilaada).
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center p-4 mt-4">
        <span className="text-xs">© 2025 All Rights Reserved. Koaci Investasi</span>
      </div>
    </footer>
  );
};

export default Footer;
