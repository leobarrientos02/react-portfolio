import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../lotties/lochness-animation.json";

export const Error = () => {
  return (
    <div className="error-page">
      <motion.h2
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Page was not Found
      </motion.h2>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "400px", width: "400px" }}
      ></Player>
    </div>
  );
};
