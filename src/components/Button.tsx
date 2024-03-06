interface Props {
  children: string;
  color?: string; // color is just a variable name. doesnt have any other meaning.
  // ? in the end means, color is an optional property.

  //color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  // above implementation of the color property means you can only select from the given options.
  onClick: () => void;
}

// below sets a default value for color, in case it is not passed.
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
