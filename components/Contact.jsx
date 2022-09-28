import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div className="w-screen h-[25rem] bg-black flex flex-col md:flex-row justify-center  items-center gap-24">
      <div className="flex flex-col">
        <h3 className="text-5xl font-semibold text-white">
          Get In <span className="text-secondary-200">Touch</span>.
          <div className="flex pt-2 justify-between">
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100085942994474"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.instagram.com/notfort.official/"
              bgColor="white"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/notfort/about/"
              bgColor="white"
            />
            <SocialIcon
              url="contact@notfort.com"
              network="email"
              bgColor="white"
            />
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
