import Rating from "./rating";

const TestimonyCard = (props) => {
  return (
    <div className="flex flex-col min-h-64 w-full gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-white shadow-inner">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-medium text-[#1459A8]">Mayor Teddy</p>
        <p className="text-sm">CTO at Pengusaha Modal</p>
        <Rating value={4} starCount={5} />
      </div>
      <p className="text-sm font-light">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur, porro
        exercitationem magni voluptatibus fugit consectetur dolor laudantium dolores facilis
        accusamus mollitia odit facere temporibus aliquam laboriosam perferendis, pariatur totam?"
      </p>
    </div>
  );
};

export default TestimonyCard;
