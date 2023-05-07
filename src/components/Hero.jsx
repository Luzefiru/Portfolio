import './Hero.css';
import Portrait from '../assets/portrait.jpg';
import Palette from './Palette';

export default function Hero() {
  return (
    <section className="Hero">
      <div className="Hero__left">
        <h2 className="Hero__left__heading">
          <div className="Hero__left__heading--greeting">Hello world,</div>
          My&nbsp;name&nbsp;is&nbsp;Christian&nbsp;de&nbsp;Jesus.
        </h2>
      </div>
      <div className="Hero__right">
        <img
          className="Hero__right__portrait"
          src={Portrait}
          alt="Christian de Jesus, Web Developer"
        />
        <Palette />
      </div>
    </section>
  );
}
