"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
// remove Category duplicates
const uniqueCategories = [
  "all Certificates",
  ...new Set(projectData.map((item) => item.category)),
];

const projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all Certificates");

  const filteredProjects = projectData.filter((project) => {
    // if (category === "all projects") return project;
    return category === "all Certificates"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Certificates
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-fit gap-4 grid h-full md:grid-cols-4 lg:mx-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="w-fit text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default projects;
