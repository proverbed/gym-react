interface Props {
  listNumber: number;
  heading: string;
  description: string;
}

const FeaturesCard: React.FC<Props> = ({
  listNumber,
  heading,
  description,
}: Props) => {
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
            {String(listNumber).padStart(2, "0")}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">{heading}</h3>
        </div>
      </div>

      <div>
        <h3 className="mb-4 hidden text-lg font-bold md:block">{heading}</h3>
        <p className="text-darkGrayishBlue">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
