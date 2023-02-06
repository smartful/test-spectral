export interface ButtonProps {
  label: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const Button: React.FC<ButtonProps> = ({ label, handleClick }) => {
  const buttonStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    backgroundColor: "violet",
    color: "white",
    borderRadius: "10px",
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
