/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  PlayIcon,
  ForwardIcon,
  BackwardIcon,
  PauseIcon,
} from "@heroicons/react/24/solid";
import { songData } from "@/lib/songData";
import RiveTest from "./RiveTest";

function Box() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSquare, setIsSquare] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col space-y-4 ">
        <AnimatePresence mode="wait">
          {isSquare && (
            <motion.div
              onClick={() => setIsExpanded(true)}
              animate={{
                width:
                  isExpanded === true && isCollapsed === false
                    ? "22rem"
                    : isCollapsed === true && isExpanded === true
                    ? "3.4rem"
                    : "7rem",
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
              className="cursor-pointer flex items-center justify-between  bg-white shadow-sm mx-auto"
              layout
            >
              {/* LEFT SIDE OF PLAYER/ALBUM COVER */}

              <motion.div className="flex items-center space-x-[.45rem] ">
                <motion.img
                  src="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1722213801/New%20Garrett.cool/Modern%20Player/losleo_wrza3i.jpg"
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
                  onClick={() => (
                    setIsPlaying(true),
                    setIsExpanded(true),
                    setIsCollapsed(false)
                  )}
                />
                {!isCollapsed && (
                  <motion.div
                    className={`${
                      isExpanded ? " text-black text-xs" : "hidden"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      duration: 0.5,
                      damping: 30,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-bold">Real Life</p>
                    <p className="text-gray-500">LOS LEO</p>
                  </motion.div>
                )}
              </motion.div>
              {/* RIGHT SIDE OF PLAYER/PLAY CONTROLS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${
                  isExpanded === true && isCollapsed === false
                    ? "flex items-center space-x-2"
                    : isCollapsed === true && isExpanded === true
                    ? "hidden"
                    : "hidden"
                }`}
              >
                <BackwardIcon
                  onClick={() => (
                    setIsExpanded(!isExpanded), setIsCollapsed(!isCollapsed)
                  )}
                  className={`${
                    isExpanded === true && isCollapsed === false
                      ? "w-6 h-6 text-black"
                      : isCollapsed === true && isExpanded === true
                      ? "hidden"
                      : "hidden"
                  }`}
                />
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
                    isExpanded === true && isCollapsed === false
                      ? "w-6 h-6 text-black"
                      : isCollapsed === true && isExpanded === true
                      ? "hidden"
                      : "hidden"
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
            setIsCollapsed(false);
          }}
          layout
        >
          {!isSquare ? "Open" : "Close"}
        </div>
        {/* <div className="flex">
          {songData.map((song) => {
            return (
              <div key={song.title}>
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.album}</p>
              </div>
            );
          })}
        </div> */}
        {/* <div className="h-20 w-20 mx-auto border border-black">
          <div className="absolute left-0 bottom-0">
            <RiveTest />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Box;
