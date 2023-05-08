import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <h1 className="Header__logo">
        <a href="#">Portfolio</a>
      </h1>
      <div className="Header__copyright">
        Christian de Jesus&nbsp;2023&nbsp;&copy;
      </div>
    </header>
  );
}
