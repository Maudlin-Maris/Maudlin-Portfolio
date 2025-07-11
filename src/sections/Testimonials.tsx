import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Jonathan Sopuruchi ",
    position: "CEO @ SMAPPS TECHNOLOGIES",
    text: "Maudlin has been instrumental in transforming our website into a powerful marketing tool. Her attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Ekeoma Nwajuba",
    position: "FOUNDER @ REACHOUT FOR CHARITY FOUNDATION",
    text: "Working with Maudlin was a pleasure. Her expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Faustina Sofia",
    position: "UI/UX DESIGNER",
    text: "Working with Maudlin has been a great experience. As a UX/UI designer, I appreciate how accurately and efficiently she brings designs to life. she pays close attention to detail, care about user experience, and often offer smart suggestions that improve the final product. Communication is always smooth, and her collaborative attitude makes every project better.",
    avatar: memojiAvatar3,
  },
  {
    name: "Nnamdi Aghanya",
    position: "IT OFFICER @ DORMANLONG ENGINEERING LIMITED",
    text: "Maudlin has been a dependable and resourceful member of our IT support team. She handled technical support requests efficiently, maintained accurate documentation, and ensured systems ran smoothly through regular maintenance and data backups. Her ability to manage helpdesk operations, support users with enterprise tools, and keep our asset register up to date was impressive. Maudlin demonstrated strong attention to detail, good communication skills, and a solid understanding of IT processes throughout her time with us",
    avatar: memojiAvatar4,
  },
  // {
  //   name: "Michael Brown",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Maudlin's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="what Clients Say about Me"
          description=" Don't Just take my word for it. See what my clients have to say about my
        work"
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
