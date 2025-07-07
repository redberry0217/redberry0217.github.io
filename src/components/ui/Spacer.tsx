const Spacer = ({
  height,
  className,
}: {
  height: number;
  className?: string;
}) => {
  return <div style={{ height: `${height}px` }} className={className} />;
};

export default Spacer;
