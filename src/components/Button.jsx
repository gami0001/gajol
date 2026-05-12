const Button = ({ children, onClick, variant = "primary", className = "", type = "button" }) => {
  const baseStyles = "px-5 py-2 cursor-pointer";

  const variants = {
    primary: "border-y border-white text-white uppercase",
    secondary: "border border-gray-500 uppercase",
    tertiary: "text-white bg-gradient-to-r from-[oklch(0.6417_0.2372_5.45)] via-[oklch(0.5984 0.2295 348.95)] to-[oklch(0.5588_0.2348_329.1)] uppercase",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
