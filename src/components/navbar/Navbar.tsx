import "./navbar.scss";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Side-component */}
      <div className="wrapper">
        <span>Nugar.dev</span>
        <div className="social">
          <a href="https://www.twitter.com/NugarRahman" target="_blank">
            <XIcon />
          </a>
          <a href="https://www." target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://www.github.com/Rahmannugar" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://www.wa" target="_blank">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
