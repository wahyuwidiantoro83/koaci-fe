"use client";

import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = (props) => {
  return (
    <>
      <Layout>
        <div className="flex items-end w-full px-4 pb-16 md:px-24 h-[282px] bg-gradient-to-r from-[#1E74D7] from-[0%] via-[#1F98DB] via-[54%] to-[#1EE0B3] to-100%">
          <h1 className="text-2xl md:text-4xl text-white font-light">
            Frequently Asked Questions (F.A.Q)
          </h1>
        </div>
        <div className="flex w-full justify-center px-4 py-10 md:py-16 md:px-24">
          <Tabs defaultValue="umum" className="flex flex-col w-full items-center">
            <TabsList className="flex w-full md:w-fit flex-wrap place-items-center gap-2 mb-16 h-full bg-[#DBF0FC]">
              <TabsTrigger
                className="py-3 text-[#1459A8] data-[state=active]:text-white data-[state=active]:bg-[#8AB3E3]"
                value="umum"
              >
                Umum
              </TabsTrigger>
              <TabsTrigger
                className="py-3 text-[#1459A8] data-[state=active]:text-white data-[state=active]:bg-[#8AB3E3]"
                value="projectDelayed"
              >
                Project Delayed
              </TabsTrigger>
            </TabsList>
            {/* Umum */}
            <TabsContent value="umum" className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="px-4" value="item-1">
                  <AccordionTrigger className="text-lg">Apa itu Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci adalah perusahaan investasi syariah berbasis komunitas yang menawarkan berbagai produk dan layanan investasi yang sesuai dengan prinsip-prinsip Islam.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-2">
                  <AccordionTrigger className="text-lg">Bagaimana cara saya memulai investasi di Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Anda dapat memulai dengan mendaftar ke Investment Advisor dan mengikuti langkah-langkah yang telah ditentukan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-3">
                  <AccordionTrigger className="text-lg">Apa saja jenis investasi yang ditawarkan oleh Koaci? </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci menawarkan investasi yang berfokus pada imbal hasil dari margin keuntungan proyek dengan fokus pada jangka waktu menengah hingga panjang.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-4">
                  <AccordionTrigger className="text-lg">Bagaimana Koaci memastikan investasi saya sesuai dengan prinsip syariah?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Kami memiliki tim legal yang bertugas untuk memastikan semua produk dan aktivitas investasi sesuai dengan prinsip-prinsip syariah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-5">
                  <AccordionTrigger className="text-lg">Berapa minimal dana yang diperlukan untuk berinvestasi di Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Minimal dana yang diperlukan tergantung pada jenis investasi yang Anda pilih. Minimal investasi variatif sesuai dengan proyek pendanaan yang ditawarkan oleh investment advisor kami atau melalui tim customer service.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-6">
                  <AccordionTrigger className="text-lg">Bagaimana cara Koaci mengelola risiko investasi?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci menerapkan strategi diversifikasi dan analisis mendalam terhadap setiap proyek investasi serta pemantauan terus-menerus untuk menjaga stabilitas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-7">
                  <AccordionTrigger className="text-lg">Apa manfaat berinvestasi di Koaci? </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Manfaatnya termasuk potensi keuntungan yang kompetitif, diversifikasi portofolio, kepatuhan syariah, dan dukungan layanan pengelolaan aset.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-8">
                  <AccordionTrigger className="text-lg">Bagaimana saya bisa memantau investasi saya? </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Anda dapat memantau investasi Anda melalui diskusi langsung dengan Investment Advisor atau menerima laporan rutin dari tim investasi kami.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-9">
                  <AccordionTrigger className="text-lg">Apakah ada biaya yang dikenakan untuk berinvestasi di Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Tidak ada biaya layanan ditagihkan kepada investor. Namun keuntungan yang didapatkan oleh Koaci akan dijelaskan secara transparan sebelum Anda melakukan investasi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-10">
                  <AccordionTrigger className="text-lg">Berapa lama waktu yang diperlukan untuk memproses penarikan dana investasi?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Waktu proses penarikan dana dapat bervariasi tergantung pada jenis investasi, tetapi biasanya memerlukan waktu 2-3 hari kerja setelah proyek pendanaan selesai.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-11">
                  <AccordionTrigger className="text-lg">Bagaimana jika saya ingin mengubah alokasi investasi saya?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Anda dapat mengajukan permintaan perubahan alokasi dengan menghubungi tim Investment Advisor kami.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-12">
                  <AccordionTrigger className="text-lg">Apakah Koaci menawarkan layanan pengelolaan portofolio?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Ya, kami menawarkan layanan pengelolaan portofolio untuk membantu investor mencapai tujuan keuangan mereka dengan efisien.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-13">
                  <AccordionTrigger className="text-lg">Bagaimana Koaci menentukan proyek investasi yang layak?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Kami melakukan validasi dokumen, validasi proyek, dan validasi fundamental pebisnis untuk memastikan kelayakan dan keamanan investasi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-14">
                  <AccordionTrigger className="text-lg">Apa yang harus dilakukan jika ada masalah atau keluhan tentang investasi saya?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Anda dapat menghubungi customer service atau investment advisor kami melalui WhatsApp, dan kami akan membantu menyelesaikan masalah Anda.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-15">
                  <AccordionTrigger className="text-lg">Bagaimana cara bergabung dengan komunitas investor Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Anda dapat bergabung dengan komunitas investor kami dengan mendaftar ke Investment Advisor kami dan mengikuti acara atau webinar yang kami adakan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-16">
                  <AccordionTrigger className="text-lg">Apakah Koaci menyediakan edukasi tentang investasi syariah?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Ya, kami menyediakan berbagai materi edukasi dan webinar untuk meningkatkan pemahaman tentang investasi syariah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-17">
                  <AccordionTrigger className="text-lg">Bagaimana cara Koaci menjaga transparansi dalam pengelolaan investasi?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Kami memberikan laporan rutin dan akses penuh kepada investor terhadap informasi portofolio mereka melalui grup yang telah kami sediakan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-18">
                  <AccordionTrigger className="text-lg">Apa saja sektor yang menjadi fokus investasi Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Sejauh ini fokus investasi kami meliputi sektor pengadaan barang, HVAC, dan fiber optik.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-19">
                  <AccordionTrigger className="text-lg">Bagaimana proses validasi proyek di Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Validasi proyek melibatkan peninjauan detail proyek, pengawasan pihak ketiga, dan evaluasi teknis untuk memastikan proyek tersebut berjalan dengan baik.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-20">
                  <AccordionTrigger className="text-lg">Apa itu investasi jangka menengah dan panjang di Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Investasi jangka menengah biasanya berlangsung 3-4 bulan, sementara jangka panjang bisa berlangsung 6 bulan - 2 tahun, tergantung pada jenis proyek.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-21">
                  <AccordionTrigger className="text-lg">Bagaimana Koaci membagikan keuntungan dari investasi?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Keuntungan dibagikan berdasarkan perjanjian awal dalam akad syariah, dan investor akan diberi tahu melalui Investment Advisor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-22">
                  <AccordionTrigger className="text-lg">Apakah Koaci berpartisipasi dalam inisiatif sosial atau CSR?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Ya, Koaci mengalokasikan dana untuk kegiatan CSR sebagai bagian dari tanggung jawab sosial perusahaan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-23">
                  <AccordionTrigger className="text-lg">Bagaimana proses seleksi mitra bisnis Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Kami memilih mitra bisnis melalui proses evaluasi yang mencakup analisis rekam jejak, kapabilitas, dan kesesuaian dengan nilai-nilai syariah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-24">
                  <AccordionTrigger className="text-lg">Apakah Koaci memberikan jaminan terhadap investasi?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Kami tidak memberikan jaminan investasi, tetapi kami memastikan analisis risiko dan pemantauan ketat terhadap proyek investasi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-25">
                  <AccordionTrigger className="text-lg">Bagaimana Koaci membantu investor dalam diversifikasi portofolio?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Tim pengelola aset kami bekerja dengan investor untuk menciptakan portofolio yang beragam dan seimbang, sesuai dengan tujuan dan profil risiko.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-26">
                  <AccordionTrigger className="text-lg">Apa yang membedakan Koaci dari perusahaan investasi lainnya?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci fokus pada prinsip syariah yang ketat, pendekatan personal, dan inovasi dalam layanan investasi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-27">
                  <AccordionTrigger className="text-lg">Bagaimana investor dapat mengajukan pertanyaan atau saran mengenai layanan Koaci?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Investor dapat menghubungi tim customer service dan Investment Advisor kami melalui berbagai saluran, termasuk WhatsApp.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="item-28">
                  <AccordionTrigger className="text-lg">Apakah Koaci menyediakan platform untuk diskusi dan jaringan antar investor?</AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Ya, Koaci menyediakan platform online dan acara khusus untuk investor agar bisa berdiskusi dan memperluas jaringan mereka yang dinamakan Grow with Koaci.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Project Delayed */}
            <TabsContent value="projectDelayed" className="w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem className="px-4" value="delay-1">
                  <AccordionTrigger className="text-lg">
                  Apa yang dimaksud dengan proyek investasi terlambat?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Proyek investasi dianggap terlambat ketika tidak selesai atau tidak memenuhi milestones dalam waktu yang telah ditetapkan dalam rencana awal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-2">
                  <AccordionTrigger className="text-lg">
                  Apa penyebab umum keterlambatan proyek investasi?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Keterlambatan bisa terjadi karena faktor eksternal seperti perubahan regulasi, masalah rantai pasokan, kondisi yang tidak terduga, atau tantangan internal seperti manajemen proyek yang kurang efektif.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-3">
                  <AccordionTrigger className="text-lg">
                  Bagaimana Koaci menangani proyek investasi yang terlambat?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci bekerja sama dengan pihak pebisnis untuk mengidentifikasi penyebab keterlambatan dan mengimplementasikan solusi yang diperlukan guna meminimalkan dampak terhadap investor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-4">
                  <AccordionTrigger className="text-lg">
                  Apakah investor akan diberitahu jika proyek investasi terlambat? 
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Ya, Koaci berkomitmen untuk memberikan informasi kepada investor tentang status proyek, termasuk alasan keterlambatan dan langkah-langkah yang akan diambil.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-5">
                  <AccordionTrigger className="text-lg">
                  Apakah keterlambatan proyek akan mempengaruhi pengembalian investasi?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Keterlambatan proyek dapat mempengaruhi jadwal pengembalian, namun Koaci berupaya semaksimal mungkin untuk memastikan bahwa pengembalian investasi tetap optimal dan dapat dilakukan sesegera mungkin.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-6">
                  <AccordionTrigger className="text-lg">
                  Apa yang dilakukan Koaci untuk mempercepat penyelesaian proyek yang terlambat?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci melakukan koordinasi intensif dengan tim manajemen proyek dan pebisnis, mengevaluasi ulang rencana kerja, dan mengalokasikan sumber daya tambahan jika diperlukan untuk mempercepat penyelesaian proyek.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-7">
                  <AccordionTrigger className="text-lg">
                  Apakah Koaci akan memberikan kompensasi atas keterlambatan proyek?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Tidak ada kompensasi yang dijanjikan oleh Koaci, namun Koaci akan menjalin diskusi dengan pihak-pihak yang terlibat dan mencari solusi terbaik bagi investor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-8">
                  <AccordionTrigger className="text-lg">
                  Bagaimana Koaci memastikan bahwa keterlambatan tidak terulang di proyek berikutnya? 
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci melakukan evaluasi pasca-proyek untuk mengidentifikasi area yang perlu ditingkatkan dan menerapkan langkah-langkah pencegahan di masa depan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-9">
                  <AccordionTrigger className="text-lg">
                  Apakah investor dapat menarik dana mereka karena keterlambatan proyek?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Proses penarikan dana akan disesuaikan dengan perjanjian awal yang telah disepakati dan harus melalui proses pengajuan melalui Investment Advisor untuk ditindaklanjuti oleh tim Keuangan perihal apakah penarikan dapat dilakukan atau tidak. Koaci akan membantu investor dalam proses tersebut sesuai dengan ketentuan yang berlaku.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-4" value="delay-10">
                  <AccordionTrigger className="text-lg">
                  Bagaimana Koaci mengkomunikasikan perkembangan proyek kepada investor selama periode keterlambatan?
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#DBF0FC] mb-3 p-4 rounded-xl text-sm font-light">
                  Koaci menggunakan berbagai saluran komunikasi, termasuk email, dan WhatsApp untuk memberikan laporan berkala mengenai perkembangan status proyek kepada investor.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </>
  );
};

export default FAQ;
