"use client"

import { useState, FormEvent } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [option, setOption] = useState<string>("WhatsApp");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (!name || !option || (option === "Email" && !subject) || !body) {
      alert("All inputs are required.");
      return;
    }

    if (subject.length > 369) {
      alert("Subject should not exceed 369 characters.");
      return;
    }

    if (body.length > 1693) {
      alert("Text should not exceed 1693 characters.");
      return;
    }

    let link;
    if (option === "WhatsApp") {
      link = `https://wa.me/+919360124835?text=${encodeURIComponent(
        `Hi Monishwar, I am ${name}\nBody: ${body}`
      )}`;
      window.open(link, "_blank");
    }

    if (option === "Email") {
      link = `mailto:monishwar69@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(link, "_blank");
    }


    console.log("Name:", name);
    console.log("Option:", option);
    console.log("Subject:", subject, subject.length);
    console.log("Body:", body, body.length);
    console.log("msg", link)
  };

  return (
    <div className="flex flex-col items-center" id="Contact">
      <h1 className="sm:text-7xl text-5xl text-zinc-600 mt-9 mb-6">Contact</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          className="rounded-full form-input text-zinc-600"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className=" mt-3 ">
          <select
            className="rounded-full form-select text-zinc-600 "
            value={option}
            onChange={(e) => setOption(e.target.value)}
            required
          >
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </select>
        </div>
        {
          option==="Email" &&
          <input
          className="rounded-full form-input text-zinc-600 mt-4"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          maxLength={369}
        />}
        <textarea
          className="rounded-xl form-textarea text-zinc-600 mt-4 resize-none"
          placeholder="Your message..."
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          maxLength={1693}
        />
        <button
          type="submit"
          className="bg-sky-300 dark:bg-sky-600 text-white font-bold rounded-full px-8 py-3 mt-6 transition-colors hover:bg-sky-400 dark:hover:bg-sky-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
