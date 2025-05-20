import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          setError("Failed to send message. Please try again later.");
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__content">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>kponia05@gmail.com</h5>
              <a
                href="mailto:kponia05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>

            <article className="contact__option">
              <FiPhone className="contact__option-icon" />
              <h4>Phone</h4>
              <h5>(773) 575-0690</h5>
              <a href="tel:+17735750690">Call me</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>(773) 575-0690</h5>
              <a
                href="https://api.whatsapp.com/send?phone=17735750690"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp me
              </a>
            </article>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className={isSubmitted ? "submitted" : ""}
          >
            {!isSubmitted ? (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  disabled={isLoading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  disabled={isLoading}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  disabled={isLoading}
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                  disabled={isLoading}
                ></textarea>
                {error && <p className="error-message">{error}</p>}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </>
            ) : (
              <div className="success-message">
                <h3>Thank you for your message!</h3>
                <p>I'll get back to you as soon as possible.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
