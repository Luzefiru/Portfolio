import './Palette.css';

export default function Palette() {
  return (
    <div className="Hero__right__color-palette">
      <a
        href="https://diagnostic-emery-79.notion.site/C-Programming-A-Modern-Approach-2nd-Edition-6cf99e84e01b44cb800a1e7fe9512b4e"
        target="_blank"
        rel="noreferrer"
      >
        <div className="color-palette__color color--primary"></div>
      </a>

      <div className="color-palette__color color--secondary"></div>
      <div className="color-palette__color color--tertiary"></div>
      <div className="color-palette__color color--neutral"></div>
    </div>
  );
}
