import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Box() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <AnimatePresence>
        <motion.div
          onClick={() => setIsExpanded(!isExpanded)}
          animate={{
            width: isExpanded ? "5rem" : "2.5rem",
            height: isExpanded ? "5rem" : "2.5rem",
            borderRadius: isExpanded ? "1rem" : "1rem",
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            duration: 0.5,
            damping: 20,
          }}
          className={
            isExpanded === false
              ? "bg-gray-300 rounded-md"
              : "bg-gray-300 rounded-full"
          }
        ></motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Box;
