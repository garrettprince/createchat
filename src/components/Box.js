/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, PlayIcon, ForwardIcon } from "@heroicons/react/24/solid";

function Box() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSquare, setIsSquare] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col space-y-4">
        <AnimatePresence mode="wait">
          {isSquare && (
            <motion.div
              onClick={() => setIsExpanded(!isExpanded)}
              animate={{
                width: isExpanded ? "24rem" : "7rem",
                height: isExpanded ? "3rem" : "7rem",
                borderRadius: isExpanded ? ".75rem" : ".75rem",
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
              className="bg-gray-300 cursor-pointer flex items-center justify-between"
              layout
            >
                {/* LEFT SIDE OF PLAYER/ALBUM COVER */}
              <motion.div className="flex items-center ">
                <motion.img
                  src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1689568913/Long%20Addition/Posts/Logs/Test%20Log/tatsuroyour_nfxfac.jpg"
                  className={`${
                    isExpanded ? "ml-[.375rem]" : "w-[7rem] h-[7rem] rounded-xl"
                  }`}
                  animate={{
                    width: isExpanded ? "2.25rem" : "7rem",
                    height: isExpanded ? "2.25rem" : "7rem",
                    borderRadius: isExpanded ? ".40rem" : ".75rem",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    duration: 0.5,
                    damping: 30,
                  }}
                />
              </motion.div>

              {/* RIGHT SIDE OF PLAYER/PLAY CONTROLS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-2"
              >
                <PlayIcon
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`${
                    isExpanded ? "w-8 h-8 text-black " : "hidden"
                  }`}
                />
                <ForwardIcon
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`${
                    isExpanded ? "w-6 h-6 text-black mx-2" : "hidden"
                  }`}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
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
        </div>
      </div>
    </div>
  );
}

export default Box;
