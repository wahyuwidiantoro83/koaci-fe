import { RiStarLine, RiStarFill } from "react-icons/ri";

const Rating = ({ value = 0, starCount = 5 }) => {
  return (
    <div className="flex gap-1">
      {new Array(starCount).fill().map((_, idx) => {
        let currenStar = value - idx;
        if (currenStar >= 1) {
          return <RiStarFill key={idx} className="w-4 h-4 fill-yellow-300" />;
        } else {
          return <RiStarLine key={idx} className="w-4 h-4 fill-yellow-300" />;
        }
      })}
    </div>
  );
};

export default Rating;
