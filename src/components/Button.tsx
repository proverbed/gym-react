interface Props {
  text: string;
  inverted?: boolean;
}

const Button: React.FC<Props> = ({ text, inverted = false }: Props) => {
  if (inverted) {
    return (
      <a
        href="#"
        className="baseline rounded-full bg-white p-3 px-6 pt-2 text-brightRed shadow-2xl hover:bg-gray-900"
      >
        {text}
      </a>
    );
  } else {
    return (
      <a
        href="#"
        className="baseline rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight"
      >
        {text}
      </a>
    );
  }
};

export default Button;
