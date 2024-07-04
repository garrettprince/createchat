import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Box() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSquare, setIsSquare] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col space-y-4">
        <AnimatePresence mode="popLayout">
          {isSquare && (
            <motion.div
              onClick={() => setIsExpanded(!isExpanded)}
              animate={{
                width: isExpanded ? "20rem" : "2.5rem",
                height: isExpanded ? "3rem" : "2.5rem",
                borderRadius: isExpanded ? "1rem" : "1rem",
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                duration: 0.5,
                damping: 30,
              }}

              key="square"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              className="bg-gray-300 cursor-pointer"
              layout
            ></motion.div>
          )}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="cursor-pointer flex items-center justify-center"
            onClick={() => {
              setIsSquare(!isSquare);
              setIsExpanded(false);
            }}
            layout
          >
            {!isSquare ? "Open" : "Close"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Box;
