"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

const logos = [
  acmeLogo,
  quantumLogo,
  echoLogo,
  celestialLogo,
  pulseLogo,
  apexLogo,
];

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-14 pr-14 flex-none"
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Company Logo"
                className="h-8 w-auto logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};