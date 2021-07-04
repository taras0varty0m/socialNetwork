import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pWEq0Ws2LvaUdaL54gjglSViYF4IVL70GFVIk18uryQ9S1tO5NKtFKKEaYHRFKDFz9E&usqp=CAU"
        alt="logo"
      />
    </header>
  );
};

export default Header;
