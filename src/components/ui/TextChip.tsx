const TextChip = ({ text, type }: { text: string; type?: string }) => {
  return (
    <div
      className={`select-none text-sm flex items-center justify-center rounded-[5px] bg-light2 px-2 py-1 ${
        type === "mb" ? "mb:text-xs" : ""
      }`}
    >
      {text}
    </div>
  );
};

export default TextChip;
