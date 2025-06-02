import React, {useState} from "react";
import "./Contact.css";

const Contact = () => {
  const [success, setSuccess] = useState("");
  const [submission, setSubmission] = useState({
    name: "",
    email: "",
    message: ""
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ba2de324-d211-49f0-b7c1-25907c34d828");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccess("Thank you, your message has been sent!");
      setSubmission({
        name: "",
        email: "",
        message: ""
      })
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your Name"
            name="name"
            value={submission.name}
            onChange={(e) =>
              setSubmission({
                ...submission,
                name: e.target.value
              })
            }
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your Email"
            name="email"
            value={submission.email}
            onChange={(e) =>
              setSubmission({
                ...submission,
                email: e.target.value
              })
            }
            required
          />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea
            name="message"
            id=""
            className="field mess"
            placeholder="Enter your message"
            value={submission.message}
            onChange={(e) =>
              setSubmission({
                ...submission,
                message: e.target.value
              })
            }
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
        <p className="success">{success}</p>
      </form>
    </section>
  );
};

export default Contact;
