import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#202124] border-t border-[#555] py-6 px-8 mt-12">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <p className="text-gray-400 text-sm">
          © 2026 KeepNote. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-5 h-5" aria-hidden="true" />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" aria-hidden="true" />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
