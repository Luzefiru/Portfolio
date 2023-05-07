import './Contact.css';
import Marker from '../ui/Marker';

export default function Contact() {
  return (
    <section className="Contact">
      <Marker content="Send me a message" />
      <form
        className="Contact__form"
        action="mailto:ian.deejay.iv@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <input
          aria-label="Name"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          aria-label="Email Address"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          aria-label="Message"
          name="message"
          placeholder="Message"
          rows={7}
          required
        ></textarea>
        <button className="Contact__form__btn--submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
