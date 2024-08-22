import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ugtxyed";
    const templateId = "template_0vd7j0i";
    const publicKey = "B24GwL2zwyJpcmoIx";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Vishesh Shah",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent Successfully!!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800 py-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6 font-semibold text-xl">
            Submit the below form to get in touch with me
          </p>
        </div>

        {/*----------------------------------- form ---------------------------*/}

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col w-[350px] md:w-1/2 mx-auto contact-form "
          >
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white capitalize"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white "
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              value={message}
              rows="10"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 text-white rounded-md"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md mx-auto hover:scale-110 duration-300 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
