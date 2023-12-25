import BANNER from "../assets/banner.jpg";
export const Home = () => {
  return (
    <>
      <div
        className="w-full min-h-[100vh] bg-center bg-cover flex justify-center items-center text-[#fefe] font-bold text-3xl"
        style={{ backgroundImage: `url(${BANNER})` }}
      >
        Home
      </div>
      <div className="border-2 border-[#7c7c7c] mb-8"></div>
    </>
  );
};
