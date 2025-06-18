interface ColoredTextProps {
  text: string;
  color?: "purple" | "black";
}

const COLORS = {
  purple: "text-primary",
  black: "text-black",
};

const ColoredText = ({ text, color = "black" }: ColoredTextProps) => {
  return <span className={`${COLORS[color]} font-bold`}>{text}</span>;
};

export default ColoredText;
