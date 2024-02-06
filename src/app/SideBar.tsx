import Link from "next/link";

export const SideBar = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-screen overflow-y-auto p-2">
      <div className="flex-1 flex flex-col gap-3">
        <Link href={"/"} className="w-11/12 mx-auto bg-gray-600 bg-opacity-30 text-white rounded-xl py-2 text-left px-2">
          For You
        </Link>
        <button className="w-11/12 mx-auto text-white rounded-md py-2 hover:bg-gray-600 hover:bg-opacity-40 text-left px-2">Following</button>
        <Link href={"/pixel-art/new"} className="w-11/12 mx-auto  text-white rounded-md py-2 hover:bg-gray-600 hover:bg-opacity-40 text-left px-2">
          New Canvas
        </Link>
      </div>
      <div className="flex relative items-center gap-2 w-11/12 mx-auto cursor-pointer ">
        <div className="absolute w-full shadow-lg  shadow-[#fff3] top-[-70px] flex-col flex z-10 bg-gray-800 h-[70px] rounded-md">
          <button className="text-left flex-1 px-2 hover:font-semibold">My Profile</button>
          <button className="text-left flex-1 px-2 hover:font-semibold">Logout</button>
        </div>
        <div className="w-[50px] h-[50px] border border-white bg-black rounded-full"></div>
        <span>@username</span>
      </div>
    </div>
  );
};
