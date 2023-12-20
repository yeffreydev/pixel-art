export const Friend = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex  gap-2">
        <div className="w-[40px] h-[40px] border border-white rounded-full "></div>
        <div className="flex flex-col">
          <span className="text-sm">@username</span>
          <span className="text-[10px] font-light">Pixel Arts: 10</span>
        </div>
      </div>
      <div>
        <button className="text-sm text-sky-400">Follow</button>
      </div>
    </div>
  );
};
