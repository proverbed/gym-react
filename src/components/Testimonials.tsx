import Button from "./Button";
import AnishaAvatar from "./../img/avatar-anisha.png";
import AliAvatar from "./../img/avatar-ali.png";
import RichardAvatar from "./../img/avatar-richard.png";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <div className="mx-auto mt-32 max-w-6xl px-5 text-center">
        <h2 className="text-center text-4xl font-bold">
          What's Different About Manage?
        </h2>
        <div className="mt-24 flex flex-col md:flex-row md:space-x-6">
          <TestimonialCard
            className="hidden md:flex"
            name="Anisha Li"
            description="Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps
              everyone motivated."
            logo={AnishaAvatar}
          />
          <TestimonialCard
            name="Ali Bravo"
            description="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and
              everyone is much more focused."
            logo={AliAvatar}
          />
          <TestimonialCard
            className="hidden md:flex"
            name="Richard Watts"
            description="Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps
              everyone motivated."
            logo={RichardAvatar}
          />
        </div>
        <div className="my-16">
          <Button text="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
