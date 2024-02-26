import FeaturesCard from "./FeaturesCard";

const HomeFeatures: React.FC = () => {
  return (
    <section id="features">
      <div className="container mx-auto mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:w-1/2">
          <FeaturesCard
            listNumber={1}
            heading={"Track company-wide progress"}
            description={
              "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again."
            }
          />
          <FeaturesCard
            listNumber={2}
            heading={"Advanced built-in reports"}
            description={
              "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
            }
          />
          <FeaturesCard
            listNumber={3}
            heading={"Everything you need in one place"}
            description={
              "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
