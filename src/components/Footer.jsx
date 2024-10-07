import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-5 px-0 bg-dark-color text-white-color ">
      <div className="my-0 mx-auto py-0 px-[20px] max-w-[1300px] flex flex-col md:flex md:flex-row items-center justify-between">
        <p className="my-3 md:my-0">@ 2024 Coffee Shop</p>
        <div className="flex gap-[25px] justify-center my-3 md:my-0">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaXTwitter className="text-2xl" />
        </div>
        <p className="my-3 md:my-0">
          <a href="">Privacy Policy</a>
          <span>.</span>
          <a href="">Refund Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
