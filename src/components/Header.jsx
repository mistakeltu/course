import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("CLick");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
