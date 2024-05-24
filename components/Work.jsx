"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper form React component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

// Component
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "Cyber Security",
    name: "Certfied Ethical Hacker",
    description:
      "Attained the ethical hacking techniques, penetration testing methodologies, and defensive strategies.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Cyber Security",
    name: "Certfied Network Defender",
    description:
      "Gained proficiency in network defense strategies, including network security controls, protocols etc.",
    link: "https://drive.google.com/file/d/1If5ToeI16h_-Hx7aM08jMU7rSfKUmfPE/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Cyber Security",
    name: "EC Council Certified Security Specialist",
    description:
      "Acquired comprehensive knowledge in network security, ethical hacking, and information security management, ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/6.png",
    category: "Cyber Security",
    name: "Cisco Cybersecurity Essential",
    description:
      "Developed a foundational understanding of cybersecurity principles, including network security, cryptography, and cyber threats.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/9.png",
    category: "Web Development",
    name: "Boot Camp development ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Networking",
    name: "EC Council Certified Security Specialis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/7.png",
    category: "Web Development",
    name: "Micorsoft Development Completion Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/10.png",
    category: "Web Development",
    name: "Data Analytics Certification",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/8.png",
    category: "Web Development",
    name: "Alibaba Low Code Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "https://drive.google.com/file/d/1If5ToeI16h_-Hx7aM08jMU7rSfKUmfPE/view?usp=sharing",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">My Certifications</h2>
          <p className="subtitle mb-8">
          Demonstrating my commitment to continuous learning and professional development, these certifications validate my expertise in web development, cybersecurity, and user experience design
          </p>
          <Link href="/certificates">
            <Button>All Certificates</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 certificates in the slider */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
