import WEB from "../assets/webDev.webp";

export const Services = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-6 ">
        <div className="max-w-[1200px] p-4  flex justify-between items-center gap-10 flex-col md:flex-row">
          <div className="max-w-[900px] md:w-[45%] h-full bg-[#fefefe] px-4 py-5 rounded-md shadow-sm">
            <h1 className="p-3 text-lg font-bold text-[#2667ff]">
              Our Services....
            </h1>
            <h4 className="p-2 mb-6 text-3xl font-bold">
              We build Website, App & Provide Support
            </h4>
            <p className="text-[#474747]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique officiis aperiam dolorem perspiciatis sapiente nihil,
              omnis molestias dolorum, esse a illum facere doloremque
              consequatur! Quam labore iste ex dignissimos aspernatur, maxime
            </p>
            <button
              type="button"
              className="bg-[#0d49d4] text-[#fefefe] my-8 rounded-sm py-3 text-xl px-5"
            >
              All services
            </button>
          </div>
          <div className="flex items-center h-full justify-evenly gap-9">
            <div className="px-4 py-6  bg-[#fefefe] rounded-lg shadow-lg flex justify-center items-center flex-col gap-5 max-w-[250px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={WEB}
                  alt="website"
                  loading="lazy"
                  className="w-[200px]  rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="my-3 text-xl font-bold">Web Development</h3>
                <p className="text-[#3e3e3e]">
                  We can build website and web app for you. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Vel fuga omnis
                  laboriosam laborum ipsam est.
                </p>
              </div>
            </div>

            <div className="px-4 py-6  bg-[#fefefe] rounded-lg shadow-lg flex justify-center items-center flex-col gap-5 max-w-[250px]">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={WEB}
                  alt="website"
                  loading="lazy"
                  className="w-[200px]  rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <h3 className="my-3 text-xl font-bold">App Development</h3>
                <p className="text-[#3e3e3e]">
                  We can build android and ios app for you. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Vel fuga omnis
                  laboriosam laborum ipsam est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#7c7c7c] mt-8"></div>
    </>
  );
};
