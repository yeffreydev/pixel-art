import { ArtPost } from "./ArtPost";

export const ForYou = () => {
  return (
    <div className="flex flex-col gap-20 w-10/12 mx-auto">
      <ArtPost />
      <ArtPost />
      <ArtPost />
      <ArtPost />
    </div>
  );
};
