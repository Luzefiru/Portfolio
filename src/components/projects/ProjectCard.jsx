import './ProjectCard.css';

export default function ProjectCard() {
  return (
    <a className="ProjectCard--link" href="github.com" target="_blank">
      <article className="ProjectCard">
        <img
          className="ProjectCard__cover-img"
          src="https://picsum.photos/seed/picsum/200/300"
          alt="Acta, a Blogging Application"
        />
        <h3 className="ProjectCard__heading">Acta: Blogging Application</h3>
        <p className="ProjectCard__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          repellat est, officia provident nam commodi dolores adipisci aperiam
          minima reprehenderit officiis a, doloribus optio inventore. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Error, repellat
          est, officia provident nam commodi dolores adipisci aperiam minima
          reprehenderit officiis a, doloribus optio inventore.
        </p>
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
