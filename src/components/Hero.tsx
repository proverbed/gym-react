import Button from "./Button";
import IllustrationLogo from "./../img/illustration-intro.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url('bg-tablet-pattern.svg')] bg-[size:800px] bg-[position:90%_-25%] bg-no-repeat "
    >
      <div className=" container mx-auto mt-10 flex flex-col-reverse items-center  space-y-0   px-6 md:flex-row md:space-y-0">
        {/* Left item  */}
        <div className="mb-32 flex flex-col space-y-12  md:w-1/2">
          <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button text="Get Started" />
          </div>
        </div>

        {/* Right Item */}
        <div className="md:w-1/2">
          <img src={IllustrationLogo} alt="Illusttration logo" />
        </div>
      </div>
    </section>
  );
}
