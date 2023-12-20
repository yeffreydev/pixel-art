import { CiHeart } from "react-icons/ci";
import { LiaComment } from "react-icons/lia";
import { PiShareFatBold } from "react-icons/pi";
export const ArtPost = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-[400px] w-full max-w-[400px] bg-gray-400"></div>
      <div className="flex gap-2 text-3xl">
        <button>
          <CiHeart />
        </button>
        <button>
          <LiaComment />
        </button>
        <button>
          <PiShareFatBold />
        </button>
      </div>
      <div className="max-w-[400px] mt-2">
        <h2 className="font-semibold">Title Art</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis fugit deserunt aspernatur maiores? Eos dicta blanditiis voluptatibus recusandae culpa? Possimus expedita mollitia a
          doloribus sed impedit tempora beatae sequi.
        </p>
      </div>
    </div>
  );
};
