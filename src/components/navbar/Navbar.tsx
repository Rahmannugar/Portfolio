import "./navbar.scss";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Side-component */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nugar.dev
        </motion.span>
        <div className="social">
          <a href="https://www.twitter.com/NugarRahman" target="_blank">
            <XIcon />
          </a>
          <a href="https://www.linkedin.com/in/Rahmannugar" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="https://www.github.com/Rahmannugar" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://wa.link/119aal" target="_blank">
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
