import './Contact.css';
import Marker from '../ui/Marker';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e, setStateFn) => {
    setStateFn(e.target.value);
  };

  /* Formspree handling */
  const [state, handleSubmit] = useForm('mlekvrjn');

  useEffect(() => {
    if (state.succeeded) {
      setName('');
      setEmail('');
      setMessage('');
      toast.success("Message sent. I'll get back to you soon.", {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }, [state.succeeded]);

  return (
    <section className="Contact" id="contact">
      <Marker content="Email me" />
      <form onSubmit={handleSubmit} className="Contact__form">
        <input
          aria-label="Name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            handleInputChange(e, setName);
          }}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          aria-label="Email Address"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            handleInputChange(e, setEmail);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          aria-label="Message"
          name="message"
          placeholder="Message"
          rows={7}
          value={message}
          onChange={(e) => {
            handleInputChange(e, setMessage);
          }}
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="Contact__form__btn--submit"
          type="submit"
          disabled={state.submitting || state.succeeded}
        >
          Submit
        </button>
      </form>
      <div className="Contact__decor-text">オレンジ</div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}
