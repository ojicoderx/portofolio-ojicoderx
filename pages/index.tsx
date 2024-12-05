import type { NextPage } from "next";
import profile from "../public/IMG-20240714-WA0099_transcpr.jpg";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { createElement } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div
      className="w-11/12 max-w-sm  lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 }
      }}
      initial="hidden"
      animate="enter"
    >
      <Head>
        <title>OJI | Tentang Saya</title>
      </Head>

      {/* Intro */}
      <div className="flex justify-between pt-4">
        <div>
          <h1 className="text-4xl font-bold  dark:text-neutral-200 text-neutral-800">@ojicoderx</h1>
          <p className="dark:text-neutral-200 text-neutral-800">
            Backend Developer 
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 tracking-wide text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="mailto: fauzytri06@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              fauzytri06@gmail.com
            </a>
          </p>
        </div>
        {/* prof pic */}
        <div className="flex h-fit w-24 overflow-hidden rounded-full border-2">
          <a
            draggable={false}
            target="_blank"
            href="https://wa.me/6285725254154"
            rel="noreferrer"
          >
            <div className="group flex items-center justify-center">
              <Image
                width="100%"
                height="100%"
                className="rounded-full duration-200 ease-linear group-hover:blur-sm"
                src={profile.src}
                alt="prof-pic"
                draggable={false}
              />
              <FaWhatsapp
                className="invisible absolute text-white opacity-0 duration-200 ease-linear group-hover:visible group-hover:opacity-100"
                size={28}
              />
            </div>
          </a>
        </div>
      </div>
      {/* About */}
      <div className="mt-4 flex flex-col">
        <h3
          className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-neutral-200 text-neutral-800 after:dark:bg-zinc-500">
          About
        </h3>
        <p className="text-justify tracking-wide dark:text-neutral-200 text-neutral-800">
          ojicoderx is a backend programmer specializing in building reliable APIs, managing databases, and ensuring application security. He is dedicated to creating scalable and efficient tech solutions.
        </p>
      </div>
      {/* Social media */}
      <div className="mt-4 flex flex-col">
        <h3
          className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-neutral-200 text-neutral-800 after:dark:bg-zinc-500">
          Social Media
        </h3>
        <div className="flex flex-col">
          <MediaLink
            icon={() => <FaWhatsapp />}
            text="WhatsApp"
            mediaLink="https://wa.me/6283170801193"
          />
          <MediaLink
            icon={() => <FaGithub />}
            text="Github"
            mediaLink="https://github.com/ojicoderx"
          />
          <MediaLink
            icon={() => <FaInstagram />}
            text="Instagram"
            mediaLink="https://www.instagram.com/ojiwzrd_"
          />
        </div>
      </div>
    </motion.div>
  );
};

interface mediaLinkProps {
  icon: IconType;
  mediaLink: string;
  text: string;
}

const MediaLink = ({ icon, mediaLink, text }: mediaLinkProps) => {
  return (
    <a
      draggable={false}
      target="_blank"
      href={mediaLink}
      className="group flex w-fit items-center rounded-md py-2 px-3 duration-200 ease-linear hover:bg-sky-200 hover:bg-opacity-60 dark:hover:bg-teal-200 dark:hover:bg-opacity-20"
      rel="noreferrer"
    >
      <div
        className="text-sky-500 duration-200 ease-linear group-hover:text-sky-600 dark:text-teal-300 dark:group-hover:text-teal-200">
        {createElement(icon)}
      </div>
      <p
        className="ml-2 inline-block origin-bottom-right indent-0 text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 group-hover:text-sky-600 group-hover:after:scale-100  group-hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 dark:group-hover:text-teal-200 dark:group-hover:after:bg-teal-200">
        {text}
      </p>
    </a>
  );
};

export default Home;
