const Square = () => {
  const handleClick = () => {
    console.log("Square clicked");
  };

  return (
    <div>
      <button onClick={handleClick} className="w-16 h-16 border-1 "></button>
    </div>
  );
};

export default Square;
