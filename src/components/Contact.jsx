import { CiMail } from "react-icons/ci";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="pt-[20px] pb-[100px] px-0 bg-light-pink-color">
      <h2 className="text-center py-[30px] md:pt-[60px]  md:pb-[60px] px-0 uppercase text-xl font-bold">
        Contact Us
      </h2>
      <div className="flex flex-col-reverse md:flex md:flex-row gap-12 items-start justify-between my-0 mx-auto py-0 px-[20px] max-w-[1300px]">
        <ul className="">
          <li className="flex gap-5 my-5 mx-0 items-center">
            <FaMapMarkerAlt className="text-xl" />
            <p>123 Campsite Avenue, Wilderness, CA 98765</p>
          </li>
          <li className="flex gap-5 my-5 mx-0 items-center">
            <CiMail className="text-xl" />
            <p>info@coffeeshopwebsite.com</p>
          </li>
          <li className="flex gap-5 my-5 mx-0 items-center">
            <FaPhoneAlt className="text-xl" />
            <p>(123) 456-78909</p>
          </li>
          <li className="flex gap-5 my-5 mx-0 items-center">
            <MdOutlineWatchLater className="text-xl" />
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          </li>
          <li className="flex gap-5 my-5 mx-0 items-center">
            <MdOutlineWatchLater className="text-xl" />
            <p>Sunday: Closed</p>
          </li>
          <li className="flex gap-5 my-5 mx-0 items-center">
            <TbWorldWww className="text-xl" />
            <p>www.codingwithme.com</p>
          </li>
        </ul>
        <form action="" className="w-[100%] md:max-w-[50%]">
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-[100%] h-[50px] py-0 px-3 outline-none mb-4 bg-white-color rounded-md border-[1px]"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-[100%] h-[50px] py-0 px-3 outline-none mb-4 bg-white-color rounded-md border-[1px]"
          />
          <textarea
            placeholder="Your message"
            required
            className="w-[100%] h-[50px] py-0 px-3 outline-none mb-4 bg-white-color rounded-md border-[1px]"
          />
          <button className="py-[10px] px-[26px] mt-[10px] text-white-color text-lg font-medium bg-primary-color rounded-full border-[1px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
