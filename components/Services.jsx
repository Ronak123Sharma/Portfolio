import { GanttChartSquare, ShieldCheck, FolderLock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "web design",
    description:
      "Crafting visually stunning and user-friendly websites tailored to your unique vision, ensuring an engaging and seamless user experience.",
  },
  {
    icon: <ShieldCheck size={72} strokeWidth={0.8} />,
    title: "Security Analysis",
    description:
      "Comprehensive security assessments to identify vulnerabilities and protect your digital assets from potential threats and breaches.",
  },
  {
    icon: <FolderLock size={72} strokeWidth={0.8} />,
    title: "Testing",
    description:
      "Thorough testing services to ensure your applications are robust, reliable, and perform optimally across all platforms and devices.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-green-200 dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
