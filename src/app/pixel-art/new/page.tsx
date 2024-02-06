import { SideBar } from "@/app/SideBar";

export default function NewPixelArtPage() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[300px]">
        <SideBar />
      </div>
      <div className="flex-1 flex p-5 h-full overflow-y-auto">
        <div className="flex flex-col gap-3 mx-auto w-fit mt-10">
          <h1 className="text-xl font-semibold">Config Your Pixel Art.</h1>
          <div className="flex gap-2">
            <div className="w-[300px] h-[300px] border"></div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="width">Width</label>
                <input name="width" type="number" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="height">Height</label>
                <input type="number" name="height" />
              </div>
              <div className="w-full">
                <button type="submit" className="bg-gray-700 text-white px-10 mx-auto py-1 rounded-xl">
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
