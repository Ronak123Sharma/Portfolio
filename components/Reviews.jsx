"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper form React component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { AvatarIcon } from "@radix-ui/react-icons";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Harshit",
    Job: "student1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum autem deserunt odio alias pariatur dicta, at iste animi.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Prithvi",
    Job: "student2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum autem deserunt odio alias pariatur dicta, at iste animi.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Rahul",
    Job: "student3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum autem deserunt odio alias pariatur dicta, at iste animi.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Mohit",
    Job: "student4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum autem deserunt odio alias pariatur dicta, at iste animi.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Rochard",
    Job: "student5",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum autem deserunt odio alias pariatur dicta, at iste animi.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Hello",
    Job: "student6",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum autem deserunt odio alias pariatur dicta, at iste animi.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container max-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.Job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
