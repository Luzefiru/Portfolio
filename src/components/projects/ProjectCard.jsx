import './ProjectCard.css';

export default function ProjectCard({ name, description, url, img }) {
  return (
    <a
      className="ProjectCard--link"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <article className="ProjectCard">
        <div className="ProjectCard__cover">
          <img className="ProjectCard__cover--img" src={img} alt={name} />
        </div>

        <h3 className="ProjectCard__heading">{name}</h3>
        <p className="ProjectCard__description">{description}</p>
        <div className="ProjectCard__view">
          View Repository
          <svg
            className="ProjectCard__view__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Open In New Tab</title>
            <path
              fill="currentColor"
              d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
            />
          </svg>
        </div>
      </article>
    </a>
  );
}
