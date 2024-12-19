import Rating from "./rating";

const TestimonyCard = (props) => {
  return (
    <div className="flex flex-col min-h-[256px] w-full gap-6 p-8 rounded-xl bg-white shadow-inner">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-medium text-[#1459A8]">Mayor Teddy</p>
        <p className="text-sm">CTO at Pengusaha Modal</p>
        <Rating value={4} starCount={5} />
      </div>
      <p className="text-sm font-light">
        ”Tidak ada investasi tanpa resiko. Namun Bizhare membantu saya diversifikasi portofolio.
        Bizhare cukup kooperatif membentuk group telegram untuk menampung semua pertanyaan dan keluh
        kesah investor dan kami bisa saling berinteraksi antar member dan penerbit.”
      </p>
    </div>
  );
};

export default TestimonyCard;
