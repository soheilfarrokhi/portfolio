import React from "react";
import { ViewLayout } from "../layout/ViewLayout";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import LocationImg from "../assets/location.jpg";

export const ContactView = () => {
  return (
    <ViewLayout title={"contact"} desc={"to contact me"} className="shadow-md">
      <div className="form_title mb-4">
        <h4>Send me a message</h4>
      </div>
      <div className="contact_ flex items-start gap-4 w-full">
        {/* form  */}
        <div className="form flex flex-col gap-2 flex-1">
          {/* form inputs  */}
          <div className="flex gap-4 ">
            <input
              className="p-2 rounded-md border w-1/2"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-2 rounded-md border w-1/2"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="flex gap-4 ">
            <input
              className="p-2 rounded-md border w-1/2"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-2 rounded-md border w-1/2"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="flex">
            <textarea
              className="w-full p-2 m-0 border rounded"
              name=""
              id=""
              rows="10"
              placeholder="what is your message ..."
            ></textarea>
          </div>

          <button className="bg-theme-primary text-theme-white p-2 rounded w-full mb-20">
            Send
          </button>
        </div>
        {/* data  */}
        <div className="data flex flex-col gap-4 py-2 px-4 border rounded-md flex-1">
          <div className="flex gap-2">
            {/* icon  */}
            <div className="icon flex  text-[1.5rem]">
              <CiLocationOn />
            </div>
            <div className="address">
              tehran , resalat , salman toroghi , shafahi , pellak 15
            </div>
          </div>
          <div className="flex gap-2">
            {/* icon  */}
            <div className="icon flex text-[1.5rem]">
              <BsPhone />
            </div>
            <div className="phone">+989221004985</div>
          </div>
          <div className="flex gap-2">
            {/* icon  */}
            <div className="icon flex text-[1.5rem]">
              <AiOutlineMail />
            </div>
            <div className="email">Email Adress</div>
          </div>
          <div className="loc-img rounded-md overflow-hidden mb-10">
            <img className="" src={LocationImg} alt="" />
          </div>
        </div>
      </div>
    </ViewLayout>
  );
};
