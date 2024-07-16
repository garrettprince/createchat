/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  PlayIcon,
  ForwardIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";
import { songData } from "@/lib/songData";
import RiveTest  from "./RiveTest";

function Box() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSquare, setIsSquare] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col space-y-4 border border-black">
        <AnimatePresence mode="wait">
          {isSquare && (
            <motion.div
              onClick={() => setIsExpanded(true)}
              animate={{
                width: isExpanded ? "22rem" : "7rem",
                height: isExpanded ? "3.25rem" : "7rem",
                borderRadius: isExpanded ? "3rem" : ".5rem",
                paddingLeft: isExpanded ? ".6rem" : 0,
                paddingRight: isExpanded ? ".6rem" : 0,
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
              className="cursor-pointer flex items-center justify-between  bg-white "
              layout
            >
              {/* LEFT SIDE OF PLAYER/ALBUM COVER */}

              <motion.div className="flex items-center space-x-[.45rem] ">
                <motion.img
                  src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1689568913/Long%20Addition/Posts/Logs/Test%20Log/tatsuroyour_nfxfac.jpg"
                  className={`${
                    isExpanded && isPlaying ? "animate-spin-slower" : ""
                  }`}
                  animate={{
                    width: isExpanded ? "2.15rem" : "7rem",
                    height: isExpanded ? "2.15rem" : "7rem",
                    borderRadius: isExpanded ? "3rem" : ".5rem",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    duration: 0.5,
                    damping: 30,
                  }}
                  onClick={() => (setIsPlaying(true), setIsExpanded(true))}
                />
                <motion.div
                  className={`${isExpanded ? " text-black text-xs" : "hidden"}`}
                >
                  <p className="font-bold">In Your Eyes</p>
                  <p className="text-gray-500">Tatsuro Yamashita</p>
                </motion.div>
              </motion.div>
              {/* RIGHT SIDE OF PLAYER/PLAY CONTROLS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-2"
              >
                {isPlaying ? (
                  <PauseIcon
                    onClick={() => setIsPlaying(false)}
                    className={`${
                      isExpanded ? "w-8 h-8 text-black " : "hidden"
                    }`}
                  />
                ) : (
                  <PlayIcon
                    onClick={() => setIsPlaying(true)}
                    className={`${
                      isExpanded ? "w-8 h-8 text-black " : "hidden"
                    }`}
                  />
                )}
                <ForwardIcon
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`${
                    isExpanded ? "w-6 h-6 text-black mx-2" : "hidden"
                  }`}
                />
              </motion.div>

              {/* SONG PROGRESS BAR */}
              {/* <div className="relative h-1">
                <input
                  type="range"
                  min="0"
                  step="0.001"
                  max="1"
                  value="1"
                  onChange
                  id="range1"
                  className="bg-zinc-600 w-full absolute rounded"
                />
              </div> */}
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
        <div className="flex">
          {songData.map((song) => {
            return (
              <div key={song.title}>
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.album}</p>
              </div>
            );
          })}
        </div>
        <div className="h-20 w-20 border border-black">
            <div className="relative left-0 bottom-0">
                <RiveTest />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
