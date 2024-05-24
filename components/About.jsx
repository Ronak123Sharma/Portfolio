import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  University,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ronak",
  },
  // {
  //   icon: <PhoneCall size={20} />,
  //   text: "+91 111111111",
  // },
  {
    icon: <MailIcon size={20} />,
    text: "sharmaronak10101@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 13 Dec,2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelore of Computer Application",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Rajasthan, Jaipur, India",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        University: "JECRC University",
        qualification: "bachelore in Computer Application",
        years: "2021-2024",
      },
      {
        University: "Government Sr. Sec. School",
        qualification: "Board Of Secondary Education",
        years: "2019-2020",
      },
      {
        University: "Government Sr. Sec. School",
        qualification: "Board Of Senior Secondary Education",
        years: "2020-2021",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "IBM Edunet Program",
        role: "Security Intern",
        years: "June:2023 - August:2023",
      },
      {
        company: "JECRC University",
        role: "Web Developer",
        years: "Feb:2024 - May:2024",
      },
      {
        company: "JECRC Universirty",
        role: "Web Developer",
        years: "2021-2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        // name: "HTML , CSS",
      },
      {
        name: "Front End Development",
      },
      {
        name: "JAVAscript,Python",
      },
      {
        name: "Cyber Security , Web Testing , Networking ",
      },
    ],
  },

  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/security-shield-svgrepo-com.svg",
      },
      {
        imgPath: "/about/tools-svgrepo-com.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="h-fit pb-12 xl:py-20 flex justify-center items-center">
      <div className="container h-full mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-1 xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_Light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png  "
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full  grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-green-300  ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Currently Pursuing BCA , in Cyber Secutiy
                    </h3>
                    <p className=" subtitle max-w-xl mx-auto xl:mx-0">
                      I am having specialization in cyber Security,also having
                      experience in web Testing and security
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">language skills</div>
                      <div className="border-b border-border"></div>
                      <div>English , HINDI</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualification */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 text-center mb-8 xl:text-left">
                      My Journey Begins From
                    </h3>
                    {/* Experience & Education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { University, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {University}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/*  Skills Tab */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">I have Specialization in</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto  xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold m-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=" "
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
