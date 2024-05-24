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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Cyber Security",
    name: "Certfied Network Defender",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "https://drive.google.com/file/d/1If5ToeI16h_-Hx7aM08jMU7rSfKUmfPE/view?usp=sharing",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Cyber Security",
    name: "EC Council Certified Security Specialist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/6.png",
    category: "Cyber Security",
    name: "Cisco Cybersecurity Essential",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia repudiandae fugit omnis.",
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
          <div className="w-full text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
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
