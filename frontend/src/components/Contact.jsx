export const Contact = () => {
  // add7f6
  // bdd8f8ee
  return (
    <>
      <div className="bg-[#d7e3fc] w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-between w-full h-full gap-6 px-4 py-6 md:flex-row max-w-[1200px]">
          <div className="max-w-[400px] md:max-w-[400px] h-full">
            <h2 className="p-3 text-lg font-bold text-[#2667ff]">
              Connect with us...
            </h2>
            <h3 className="p-2 mb-6 text-3xl font-bold">
              Want to work together? Contact us
            </h3>
            <p className="text-[#474747]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, optio?
            </p>
          </div>
          <div className="px-4 py-8 ">
            <form className="flex flex-col gap-6 px-4 py-8 transition-all duration-500 ease-in-out">
              <input
                type="text"
                placeholder="Ener your name"
                required
                className="px-5 py-3 text-lg bg-transparent border rounded-md border-[#0a4ae0] placeholder:text-[#616161] placeholder:font-bold outline-none focus:border-b-2 focus:border-[#0a4ae0] transition-all duration-500 ease-in-out shadow-md shadow-[#bdd0fa] hover:bg-[#4f4ff51e]"
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="px-5 py-3 text-lg bg-transparent border rounded-md border-[#0a4ae0] placeholder:text-[#616161] placeholder:font-bold outline-none focus:border-b-2 focus:border-[#0a4ae0] transition-all duration-500 ease-in-out shadow-md shadow-[#bdd0fa] hover:bg-[#4f4ff51e]"
              />
              <textarea
                className="px-5 py-3 text-lg bg-transparent border rounded-md border-[#0a4ae0] placeholder:text-[#616161] placeholder:font-bold outline-none focus:border-b-2 focus:border-[#0a4ae0] transition-all duration-500 ease-in-out shadow-md shadow-[#bdd0fa] hover:bg-[#4f4ff51e]"
                placeholder="write message here..."
                maxLength={200}
              ></textarea>
              <button
                type="submit"
                className="bg-[#0d49d4] text-[#fefefe]  rounded-sm py-3 text-xl px-5 mx-3 hover:bg-[#023dc5]"
              >
                Connect
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#7c7c7c] mb-8"></div>
    </>
  );
};
