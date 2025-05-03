import { TiLocationArrow } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5B4CFF] py-12 text-black overflow-hidden">
      <div className="container mx-auto mb-8">
        <h1 className="font-zentry text-black text-center text-[12rem] md:text-[35rem] leading-none tracking-wider">
          ZENTRY
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-x-4 gap-y-8 px-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:px-4 lg:px-8">
        <div className="flex flex-col">
          <h3 className="mb-4 font-general text-xs uppercase tracking-wide">
            Explore
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#home" className="font-circular-web hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#prologue" className="font-circular-web hover:underline">
                Prologue
              </a>
            </li>
            <li>
              <a href="#about" className="font-circular-web hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="font-circular-web hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* PRODUCTS Section */}
        <div className="flex flex-col">
          <h3 className="mb-4 font-general text-xs uppercase tracking-wide">
            Products
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#radiant" className="font-circular-web hover:underline">
                Radiant
              </a>
            </li>
            <li>
              <a
                href="#nexus"
                className="font-circular-web flex items-center hover:underline"
              >
                Nexus <TiLocationArrow className="ml-1" />
              </a>
            </li>
            <li>
              <a href="#zigma" className="font-circular-web hover:underline">
                Zigma
              </a>
            </li>
            <li>
              <a href="#azul" className="font-circular-web hover:underline">
                Azul
              </a>
            </li>
          </ul>
        </div>

        {/* FOLLOW US Section */}
        <div className="flex flex-col">
          <h3 className="mb-4 font-general text-xs uppercase tracking-wide">
            Follow Us
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-circular-web flex items-center hover:underline"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-circular-web flex items-center hover:underline"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-circular-web flex items-center hover:underline"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-circular-web flex items-center hover:underline"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>

        {/* RESOURCES Section */}
        <div className="flex flex-col">
          <h3 className="mb-4 font-general text-xs uppercase tracking-wide">
            Resources
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#media-kit"
                className="font-circular-web hover:underline"
              >
                Media Kit
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section with Logo and Copyright */}
      <div className="container mx-auto mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 px-6 md:flex-row md:px-4 lg:px-8">
        <div className="flex items-center">
          <TiLocationArrow className="text-2xl transform rotate-45" />
        </div>

        <p className="text-center text-sm font-light md:text-left">
          &copy;Zentry 2025. All rights reserved
        </p>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
