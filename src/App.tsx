import { motion } from "framer-motion";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import { duration } from "@mui/material";
const App = () => {
  return (
    <div>
      <section>
        <div className="course">
          <motion.div
            className="box"
            animate={{ opacity: 0 }}
            transition={{ duration: 2, delay: 2 }}
          ></motion.div>
        </div>
        <Navbar />
      </section>
      <section>a</section>
      <section>a</section>
      <section>a</section>
      <section>a</section>
      <section>a</section>
      <section>a</section>
    </div>
  );
};
export default App;
