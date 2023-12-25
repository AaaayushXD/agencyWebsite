import { User } from "lucide-react";

export const Team = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full mb-10">
        <div className="max-w-[1200px] h-full  px-5 py-8 flex flex-col justify-center">
          <h1 className="p-3 text-lg mb-8 font-bold text-[#2667ff]">
            Team Members....
          </h1>
          <div className="flex flex-wrap items-center w-full h-full gap-8 justify-evenly">
            <div className="bg-[#fefefe] w-[300px] flex justify-center items-center flex-col px-4 py-6 rounded-md">
              <div className=" h-[120px] w-[120px] rounded-full border-2 border-black flex justify-center items-center ">
                {/* <img src="" alt="" loading="lazy" /> */}
                <User size={100} color="blue" />
              </div>
              <div className="flex flex-col gap-3 px-3 py-5 ">
                <h2 className="text-2xl font-bold ">Aayush Lamichhane</h2>
                <p className="text-[#3e3e3e]">MERN stack Developer</p>
              </div>
            </div>

            <div className="bg-[#fefefe] flex  w-[300px] justify-center items-center flex-col px-4 py-6 rounded-md">
              <div className=" h-[120px] w-[120px] rounded-full border-2 border-black flex justify-center items-center ">
                {/* <img src="" alt="" loading="lazy" /> */}
                <User size={100} color="blue" />
              </div>
              <div className="flex flex-col gap-3 px-3 py-5 ">
                <h2 className="text-2xl font-bold ">Keshav Dangal</h2>
                <p className="text-[#3e3e3e]">Full stack Developer</p>
              </div>
            </div>

            <div className="bg-[#fefefe] w-[300px] flex   justify-center items-center flex-col px-4 py-6 rounded-md">
              <div className=" h-[120px] w-[120px] rounded-full border-2 border-black flex justify-center items-center ">
                {/* <img src="" alt="" loading="lazy" /> */}
                <User size={100} color="blue" />
              </div>
              <div className="flex flex-col gap-3 px-3 py-5 ">
                <h2 className="text-2xl font-bold ">John Doe</h2>
                <p className="text-[#3e3e3e]">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
          </div>

    </>
  );
};
