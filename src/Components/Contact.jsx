import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>

      <div className="contact-icons">
        <a
          href="mailto:vinayakdhulubulu45@gmail.com"
          className="icon-link"
          aria-label="Send email"
        >
          <MdEmail />
        </a>

        <a
          href="https://github.com/vinayak302004"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="GitHub profile"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/vinayak-dhulubulu-b4a824287/"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;
