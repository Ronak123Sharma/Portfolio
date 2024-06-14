"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/channel/UCF_AM3mV73QqTzjWYF0krKQ",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/ronak-sharma1/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Ronak123Sharma",
    name: <RiGithubFill />,
  },
  // {
  //   path: "/",
  //   name: <RiFacebookFill />,
  // },
  {
    path: "https://www.instagram.com/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
