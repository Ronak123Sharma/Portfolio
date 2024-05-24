"use client";
import Socials from "./Socials";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container max-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* Copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Ronak Sharma All rights reserved
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        top="20"
        color="#4BBC74"
        className="items-center pl-1 hover:bg-green-500 rounded-50%"
      />
    </footer>
  );
};

export default Footer;
