const Divider = ({ gap }: { gap: number }) => {
  return (
    <div
      className="bg-divider"
      style={{
        height: "1px",
        marginTop: `${gap}px`,
        marginBottom: `${gap}px`,
      }}
    />
  );
};

export default Divider;
