import TestimonialCard from "../components/TestimonialCard";
import AnishaAvatar from "./../img/avatar-anisha.png";

export default {
  component: TestimonialCard,
};

export const Primary = {
  args: {
    label: "TestimonialCard",
    name: "Anisha Li",
    description:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    logo: { AnishaAvatar },
  },
};
