"use client";

import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const ContactPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = form.subject.value;
    const payload = { name, email, message, subject };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Email could not be sent!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto pt-20">
      <h1 className="text-center text-2xl text-gray-300 font-semibold my-5">
        You Can Contact Me Here!
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="w-full flex-1">
          <form
            action="/submit-form"
            className="text-center"
            onSubmit={handleSubmit}
          >
            <label for="name" className="text-lg text-gray-300">
              Name:
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter Your Name"
              className="px-2 py-2 rounded-xl mb-3 w-3/4"
            />
            <br />
            <label for="email" className="text-lg text-gray-300">
              Email:
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="px-2 py-2 rounded-xl mb-3 w-3/4"
            />
            <br />
            <label for="message" className="text-lg text-gray-300">
              Text Message:
            </label>{" "}
            <br />
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="enter message"
              className="px-2 py-2 rounded-xl mb-3 w-3/4"
            ></textarea>
            <br />
            <Button
              type="submit"
              color="secondary"
              variant="shadow"
              className="w-1/2"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="flex-1">
          <h2 className="text-center text-xl font-semibold text-gray-300 mt-10 mb-5">
            You can also get to me through
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="https://www.instagram.com/pallabkumars/">
              <FaInstagram className="text-5xl text-rose-500" />
            </a>
            <a href="https://www.linkedin.com/in/pallab-kumar-sarker-7a6362251/">
              <FaLinkedin className="text-5xl text-sky-500" />
            </a>
            <a href="https://www.facebook.com/PallabKumars/">
              <FaFacebook className="text-5xl text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
