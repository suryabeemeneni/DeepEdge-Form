import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Success = () => {
    const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const Name = localStorage.getItem('username')

  return (
    <>
      <Header />
      <div className="stepper-container form form-sucess">
        <motion.img
          src="data:image/png;base64,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"
          alt="sucess"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        />

        <div>
          <h2>Thank You!</h2>
          <h5>{Name}</h5>
          <h6>you have successfully registered with DeepEdge.</h6>
        </div>

        <div style={{ height: "100px" }} />


        {/* {isVisible && (
        <motion.div className="Success-footer" */}
        <div className="Success-footer"
        variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}>
          <span></span>
          {/* <h5
            onClick={() =>
              (window.location.href = "mailto:beemeneni@gmail.com")
            }
          >
            Hire me!
          </h5> */}
          <a href="https://surya-cv.netlify.app/" target="_blank">Explore surya</a>
          <span></span>
        </div>
        {/* </motion.div>
        )} */}

        <div style={{ height: "50px" }} />
      </div>
    </>
  );
};

export default Success;
