const Divider = ({ gap }: { gap: number }) => {
  return (
    <div
      className="bg-gray-200"
      style={{
        height: "1px",
        marginTop: `${gap}px`,
        marginBottom: `${gap}px`,
      }}
    />
  );
};

export default Divider;
