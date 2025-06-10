const TextChip = ({ text }: { text: string }) => {
  return (
    <div className="select-none text-sm flex items-center justify-center rounded-[5px] bg-light2 px-2 py-1">
      {text}
    </div>
  );
};

export default TextChip;
