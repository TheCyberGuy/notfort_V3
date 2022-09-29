import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-screen h-[6rem] flex flex-col">
      <div>
        <ul>
          <Link to="home" smooth={true}>
            <li>Home</li>
          </Link>
          <Link to="work" smooth={true}>
            <li>How We Work</li>
          </Link>
          <Link to="about" smooth={true}>
            <li>About Us</li>
          </Link>
          <Link to="contact" smooth={true}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-between mx-4">
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100085942994474"
          bgColor="black"
          fgColor="white"
          style={{}}
          className="scale-105 fill-secondary-200"
        />
        <SocialIcon
          url="https://www.instagram.com/notfort.official/"
          bgColor="black"
          fgColor="white"
          style={{}}
          className="scale-105 fill-secondary-200"
        />
        <SocialIcon
          url="https://www.linkedin.com/company/notfort/about/"
          bgColor="black"
          fgColor="white"
          style={{}}
          className="scale-105 fill-secondary-200"
        />
        <SocialIcon
          url="contact@notfort.com"
          network="email"
          bgColor="black"
          fgColor="white"
          style={{}}
          className="scale-105 fill-secondary-200"
        />
      </div>
    </div>
  );
};

export default Footer;
