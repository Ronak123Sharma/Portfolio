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
      "Learned ethical hacking techniques, penetration testing methodologies, and defensive strategies, enabling me to identify and mitigate cybersecurity risks proactively and ethically",
    link: "https://drive.google.com/file/d/1gb6zF2CaTZD_LbLLVPG29dtrIVnAZogd/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Cyber Security",
    name: "Certfied Network Defender",
    description:
      "Gained proficiency in network defense strategies, including network security controls, protocols, perimeter defenses, and secure firewall configuration etc.",
    link: "https://drive.google.com/file/d/1Ei-Chj2pYKsHXSSuBS6IO7F-uLHkmleN/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Cyber Security",
    name: "EC Council Certified Security Specialist",
    description:
      "Acquired comprehensive knowledge in network security, ethical hacking, and information security management, equipping me with the skills to safeguard systems and data from cyber threats.",
    link: "https://drive.google.com/file/d/1kPAgbAYd559tp7hYDXBGhlltX7Jo-KB3/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/6.png",
    category: "Cyber Security",
    name: "Cisco Cybersecurity Essential",
    description:
      "Developed a foundational understanding of cybersecurity principles, including network security, cryptography, and cyber threats, as well as practical skills in securing network devices and data.",
    link: "https://drive.google.com/file/d/1UzF2-01DncT3-p-shu4n7841Rt5k8YJ7/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/9.png",
    category: "Web Development",
    name: "Boot Camp development ",
    description:
      "Led the design and execution of comprehensive boot camps, equipping participants with essential skills and knowledge in web development.",
    link: "https://drive.google.com/file/d/1An_bIHHHshRBLXWCH2CEf-Fd-s5IMpoB/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Networking",
    name: "EC Council Certified Security Specialis",
    description:
      "Acquired comprehensive knowledge in network security, ethical hacking, and information security management, equipping me with the skills to safeguard systems and data from cyber threats.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/7.png",
    category: "Web Development",
    name: "Micorsoft Development Completion Project",
    description:
      "Successfully completed a comprehensive project focusing on Microsoft development technologies.",
    link: "https://drive.google.com/file/d/1_erTBkfMfwUzn-dKjXBKfyXH_GcY4kGT/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/10.png",
    category: "Web Development",
    name: "Data Analytics Certification",
    description:
      "Attained expertise in data analysis methodologies, tools, and techniques, enabling insightful decision-making and strategic planning based on data-driven insights.",
    link: "https://drive.google.com/file/d/1jB8lMGoI4ODNo_ZJ7oQvWdDwwqU-4RkR/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/8.png",
    category: "Web Development",
    name: "Alibaba Low Code Development",
    description:
      "Acquired proficiency in low-code development on Alibaba Cloud, empowering rapid application development and deployment while optimizing efficiency.",
    link: "https://drive.google.com/file/d/12M0s0wB77wRS2j4XGqXocvL8oWMgbzvT/view?usp=sharing",
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
            Demonstrating my commitment to continuous learning and professional
            development, these certifications validate my expertise in web
            development, cybersecurity, and user experience design
          </p>
          <Link href="/certificates">
            <Button>All Certificates</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-auto xl:h-[580px]"
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
