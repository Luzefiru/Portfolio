import './Marker.css';

export default function ArrowItem({ content }) {
  return (
    <h2 tabIndex="0" className="Marker">
      {content}
      <svg
        className="Marker__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 20"
      >
        <title>Marker</title>
        <path
          fill="currentColor"
          d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
        />
      </svg>
    </h2>
  );
}
