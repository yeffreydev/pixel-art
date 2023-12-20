import Image from "next/image";
import { SideBar } from "./SideBar";
import { ForYou } from "./ForYou";
import { Friend } from "./Friend";

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[300px]">
        <SideBar />
      </div>
      <div className="flex-1 flex p-5 h-full overflow-y-auto">
        <ForYou />
        <div className="w-[300px] flex flex-col gap-5">
          <div className="border-b border-gray-300  p-2">
            <h2 className="text-xl font-semibold">Suggested For You</h2>
          </div>
          <div className="flex flex-col gap-5">
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
          </div>
        </div>
      </div>
    </div>
  );
}
