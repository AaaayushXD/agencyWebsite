import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="border-2 border-[#7c7c7c]"></div>
      <div className="w-full h-full bg-[#e2e2e2] ">
        {/* links */}
        <div className="grid grid-cols-2 gap-8 max-w-screen sm:grid-cols-3 sm:gap-6">
          <div className="px-3 py-2">
            <h1 className="mb-6">RESOURCES</h1>

            <p className="text-[#5e5e5e] mb-4 hover:underline px-1">About Us</p>

            <p className="text-[#5e5e5e] mb-4 hover:underline px-1">Services</p>

            <p className="text-[#5e5e5e] mb-4 hover:underline px-1">Team</p>

            <p className="text-[#5e5e5e] mb-4 hover:underline px-1">
              Testimonials
            </p>
          </div>
          <div className="px-3 py-2">
            <h1 className="mb-6">FOLLOW US</h1>
            <a
              target="_blank"
              href="https://www.facebook.com/Aayush.914/"
              className="flex gap-2 text-[#5e5e5e] mb-4 hover:underline px-1 ]"
              rel="noreferrer"
            >
              <Facebook />
              <p>Facebook</p>
            </a>
            <a
              href="https://www.linkedin.com/in/aayush15l/"
              target="_blank"
              className="flex gap-2 text-[#5e5e5e] mb-4 hover:underline px-1 ]"
              rel="noreferrer"
            >
              <Linkedin />
              <p>LinkdeIn</p>
            </a>
            <a
              href="https://x.com/Aayush15l"
              target="_blank"
              className="flex gap-2 text-[#5e5e5e] mb-4 hover:underline px-1 ]"
              rel="noreferrer"
            >
              <Twitter />
              <p>X</p>
            </a>
          </div>
          <div className="px-3 py-2">
            <h1 className="mb-6">LEGAL</h1>
            <p className="flex gap-2 text-[#5e5e5e] mb-4 hover:underline px-1">
              Privacy Policy
            </p>

            <p className="flex gap-2 text-[#5e5e5e] mb-4 hover:underline px-1">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="border border-[#5a5a5a] m-2"></div>

        {/* copyright */}
        <div className="flex flex-col justify-between gap-3 px-4 pb-[80px] md:pb-5 sm:flex-row">
          <div className="px-3 py-2">
            <p className="flex gap-1 text-[#5e5e5e]">
              © 2023{" "}
              <a
                href="https://portfoliosite-aayush.netlify.app/"
                target="_blank"
                className="hover:text-[#39b2ad] hover:underline"
                rel="noreferrer"
              >
                Aayush.
              </a>
              All Rights Reserved
            </p>
          </div>
          <div className="flex gap-5 px-3 py-2 text-[#5e5e5e] items-center  mb-2">
            <a
              target="_blank"
              href="https://www.facebook.com/Aayush.914/"
              className="hover:text-[#202020]"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/in/aayush15l/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#202020]"
            >
              <Linkedin />
            </a>
            <a
              href="https://x.com/Aayush15l"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#202020]"
            >
              <Twitter />
            </a>
            <a
              href="https://github.com/AaaayushXD"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#202020]"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
