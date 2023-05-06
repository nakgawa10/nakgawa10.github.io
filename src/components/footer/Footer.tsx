import {
    EnvelopeAt,
    FilePersonFill,
    Github,
    Instagram,
    Linkedin,
    StackOverflow,
} from "react-bootstrap-icons";
import "./Footer.css";

function Navigation() {
  return (
    <div className="footer">
      <div className="footer_social">
        <a href="https://github.com/nakgawa10">
          <Github size={27} />
        </a>
        <a href="https://www.instagram.com/gawandenakul/">
          <Instagram size={27} />
        </a>
        <a href="https://www.linkedin.com/in/nakul-gawande-011/">
          <Linkedin size={27} />
        </a>
        <a href="https://stackoverflow.com/users/6329056/nakul-gawande">
          <StackOverflow size={27} />
        </a>
        <a href="mailto:nakgawande@gmail.com">
          <EnvelopeAt size={27} />
        </a>
      </div>
      <div className="copyright">
        <a href="/" className="copyright">
          © 2023 | Nakul Gawande
        </a>
      </div>
      <div className="footer-resume">
        <a href="./images/Nakul.pdf">
          <FilePersonFill size={27} />
          Resume
        </a>
      </div>
    </div>
  );
}
export default Navigation;
