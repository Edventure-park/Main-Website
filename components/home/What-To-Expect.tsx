import { HoverEffect } from "@/components/ui/card-hover-effect";

export function What_To_Expect() {
  return (
    <div className="mx-auto max-w-5xl px-8  md:pt-[500px] lg:pt-[160px]">
      <div className="z-10 flex flex-col gap-5 text-center">
        <h1 className="bg-gradient-to-r from-black to-green-500 bg-clip-text text-6xl font-semibold text-transparent md:text-5xl">
          What to expect?
        </h1>
        <h2 className="text-xl font-medium text-[#858585]">
          Real stories from real founders. See how entrepreneurs like you transformed their businesses with incubation from us ! 
        </h2>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id: 1,
    title: "1:1 sessions",
    description:
      "Through a series of 8 tasks and interactions with the mentors from the ecosystem",
    link: "/testimonial/sarah-chen",
  },
  {
    id: 2,
    title: "Cohort sessions",
    description:
      "Through a series of 8 tasks and interactions with the mentors from the ecosystem",
    link: "/testimonial/mark-roberts",
  },
  {
    id: 3,
    title: "Buddy support",
    description:
      "Through a series of 8 tasks and interactions with the mentors from the ecosystem.",
    link: "/testimonial/emma-wong",
  },
  {
    id: 4,
    title: "Investor pitches",
    description:
      "Through a series of 8 tasks and interactions with the mentors from the ecosystem.",
    link: "/testimonial/david-park",
  },
  {
    id: 5,
    title: "Market access",
    description:
      "Through a series of 8 tasks and interactions with the mentors from the ecosystem.",
    link: "/testimonial/rachel-martinez",
  },
  {
    id: 6,
    title: "Exclusive workshops",
    description:
      "Through a series of 8 tasks and interactions with the mentors from the ecosystem.",
    link: "/testimonial/alex-thompson",
  },
];