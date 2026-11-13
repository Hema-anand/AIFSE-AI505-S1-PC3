import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#1b1c20] border-t border-[#25262a] px-3 py-2 flex items-center justify-between">
      <p className="text-xs text-gray-400">
        © 2026 KeepNote. All rights reserved.
      </p>

      <ul className="flex justify-center gap-4 list-none">
        <li>
          <a
            href="https://facebook.com"
            className="text-white text-md hover:text-cyan-200"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com"
            className="text-white text-md hover:text-cyan-200"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            className="text-white text-md hover:text-cyan-200"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
