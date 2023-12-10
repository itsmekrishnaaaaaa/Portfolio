import "./form.css";
import React, { useState } from 'react';

const Form = () => {
  const [inputs, setInputs] = useState({});

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      });

      if (res.ok) {
        console.log("Email sent successfully");
        // Optionally, you can reset the form or show a success message.
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="Form">
      <form method="POST">
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Your Name"
          name="UserName"
          value={inputs.UserName || ""}
          onChange={handleChange}
          required
        ></input>
        <label>Your EMail</label>
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          required
        ></input>

        <label>Messsage</label>
        <textarea
          rows="6"
          placeholder="Type your Message Here"
          required
          name="Message"
          value={inputs.Message || ""}
          onChange={handleChange}
        ></textarea>
        <button
          className="btn"
          type="submit"
          value="Message Sent Successfully"
          onClick={sendEmail}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
