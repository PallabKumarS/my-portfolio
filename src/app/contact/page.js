"use client";

import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

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
      <div className="">
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
            className="px-2 py-2 rounded-xl mb-3 w-1/2"
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
            className="px-2 py-2 rounded-xl mb-3 w-1/2"
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
            className="px-2 py-2 rounded-xl mb-3 w-1/2"
          ></textarea>
          <br />
          <Button type="submit" color="secondary" variant="shadow">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
