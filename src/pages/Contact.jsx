import React from "react";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsEnvelopeAt } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="bg-white rounded-2xl p-10">
      <h1 className="text-4xl mb-10 font-semibold uppercase after:block after:w-56 after:h-1 after:bg-linear-to-r after:from-primary after:to-secondary after:mx-auto">
        Contact
      </h1>
      {/* <hr className='h-0.5 bg-primary border-0'/> */}
      <div className="sm:grid grid-cols-2 gap-5">
        <div className="bg-[#FFEED9] p-10 rounded-2xl flex gap-2">
          <MdOutlineWifiCalling3 size={24} className="text-primary" />
          <div>
            <h3 className="font-black mb-4">Phone:</h3>
            <p>+234 90 1800 5785</p>
            <p>+234 90 1800 5785</p>
          </div>
        </div>
        <div className="bg-[#F2F7FC] p-10 rounded-2xl flex gap-2">
          <BsEnvelopeAt size={24} className="text-primary" />
          <div>
            <h3 className="font-black mb-4">Email:</h3>
            <p>imole.dev@hotmail.com</p>
          </div>
        </div>
        <div className="bg-[#F8FBFB] p-10 rounded-2xl col-span-2">
          <p className="text-2xl mb-10">
            I am always open to discussing new projects, opportunities in tech
            world, partnerships and more so mentorship.
          </p>
          <form action="" method="get" className="">
            <label className="h-10 shadow flex gap-10 mb-5">
              <span className="font-black">Name:</span>
              <input
                type="text"
                name="name"
                className="w-full h-full p-2 outline-0"
              />
            </label>

            <label className="h-10 shadow flex gap-10 mb-5">
              <span className="font-black">Email:</span>
              <input
                type="email"
                name="email"
                className="w-full h-full p-2 outline-0"
              />
            </label>

            <label className="shadow flex gap-10 mb-5">
              <span className="font-black">Message:</span>
              <textarea
                id=""
                name="name"
                className="w-full h-full p-2 outline-0"
              ></textarea>
            </label>

            <button
              type="submit"
              className="border border-primary w-max py-2 px-10  rounded-4xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
