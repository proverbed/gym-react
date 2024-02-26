interface Props {
  logo: string;
  name: string;
  description: string;
  className?: string;
}

const TestimonialCard: React.FC<Props> = ({
  logo,
  name,
  description,
  ...props
}: Props) => {
  props.className +=
    " flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3";
  return (
    <div {...props}>
      <img src={logo} className="-mt-14 w-16" alt="" />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">“{description}”</p>
    </div>
  );
};

export default TestimonialCard;
