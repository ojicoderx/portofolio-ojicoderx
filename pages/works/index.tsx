import Head from "next/head";
import worksJson from "./works.json";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Works = () => {
  const works = worksJson;
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: worksContainerRef
  });

  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [0, -distance]);
  };

  const y = useParallax(scrollXProgress, 28);

  return (
    <motion.div
      className="w-11/12 max-w-sm overflow-x-hidden lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 }
      }}
      initial="hidden"
      animate="enter"
    >
      <Head>
        <title>My works</title>
      </Head>
      <div className="flex w-full flex-col items-center">
        <div className="mb-2 mt-3 flex w-full">
          <h3
            className="w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-neutral-200 text-neutral-800 after:dark:bg-zinc-500"
          >
            Website
          </h3>
        </div>
        <motion.div
          ref={worksContainerRef}
          className="scrollbar flex w-full snap-x snap-mandatory overflow-x-auto py-4"
        >
          <motion.div
            className="grid h-fit min-w-full snap-center gap-8 lg:grid-cols-2 lg:gap-4"
          >
            {works
              .filter((work) => work.type === "website")
              .map((work, i) => (
                <WorkCard
                  key={i}
                  href={work.href}
                  imgSrcs={work.imgSrcs}
                  imgSrc={work.imgSrc}
                  title={work.title}
                  description={work.description}
                  icons={work.icons}
                />
              ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface workCardProps {
  href: string;
  imgSrcs?: string[];
  imgSrc: string;
  title: string;
  description: string;
  icons?: string[];
}

const WorkCard = ({
  imgSrc,
  title,
  description,
  imgSrcs,
  href,
  icons
}: workCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <motion.a
      draggable={false}
      whileHover={"hover"}
      className="group rounded-md p-4 hover:bg-neutral-200 dark:hover:bg-zinc-800"
      target="_blank"
      variants={{
        hover: {
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
        }
      }}
      href={href}
    >
      <div className="flex justify-center">
        <motion.div
          className={`flex h-36 rounded-md overflow-hidden relative ${
            imgSrcs
              ? "justify-between w-full"
              : "justify-center w-fit group-hover:border-2 dark:group-hover:border-white group-hover:border-neutral-400"
          }`}
          variants={{
            hover: {
              scale: 1.05
            }
          }}
        >
          {imgSrcs ? (
            imgSrcs.map((src, i) => (
              <div
                className="flex overflow-hidden rounded-md group-hover:border-2 dark:group-hover:border-white group-hover:border-neutral-400 relative"
                key={i}
              >
                <motion.img
                  onLoad={() => setIsLoaded(true)}
                  key={i}
                  className={`rounded-md group-hover:blur-sm ${
                    !isLoaded ?? "blur-sm"
                  }`}
                  src={src}
                  alt="img"
                  draggable={false}
                />
              </div>
            ))
          ) : (
            <motion.img
              className="rounded-md duration-200 ease-linear group-hover:blur-sm"
              src={imgSrc}
              alt="img"
              draggable={false}
            />
          )}
        </motion.div>
      </div>
      <div className="mt-5 flex flex-col content-center items-center">
        <motion.h1
          variants={{ hover: { scale: 1.05 } }}
          className="text-center text-4xl font-bold dark:text-neutral-200 text-neutral-800"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={{ hover: { scale: 1.05 } }}
          className="text-center dark:text-neutral-200 text-neutral-800"
        >
          {description}
        </motion.p>
      </div>
    </motion.a>
  );
};

export default Works;
