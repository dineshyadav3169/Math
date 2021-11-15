import HomeContainer from '@/components/HomeContainer';
import { useRef, useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import SucessMessage from '@/components/SucessMessage';
import Fetcher from '@/lib/fetcher';
import { CONTACT } from '@/lib/endpoints';
import { BASE_URI } from '@/lib/base'

export default function Contact() {
  const [form, setForm] = useState({
    isLoading: false,
    isError: false,
    isMessageSent: false
  });
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const message = useRef();

  const conatctFormHandler = (event) => {
    event.preventDefault();
    setForm({
      isLoading: true,
      ...form
    });

    const REQUEST_DATA = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      message: message.current.value
    };

    Fetcher(CONTACT, REQUEST_DATA, BASE_URI)
      .then(() => {
        setForm({
          isMessageSent: true,
          isLoading: false,
          ...form
        });

        // Re-setting values
        firstName.current.value = '';
        lastName.current.value = '';
        email.current.value = '';
        message.current.value = '';
      })
      .catch(() => {
        setForm({
          isError: true,
          ...form
        });
      });
  };
  return (
    <HomeContainer title="Contact" description="">
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">
        Contact Form
      </h1>
      <hr className="w-full border-1 border-gray-200 mb-3" />
      <form className="w-full max-w-lg self-center" onSubmit={conatctFormHandler}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              ref={firstName}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              ref={lastName}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="json@gmail.com"
              ref={email}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-message"
            type="textarea"
            ref={message}
            required
          />
        </div>
        <button
          type="submit"
          aria-label="Send"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm py-3 px-6 bg-blue-500 text-base font-bold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0"
        >
          {form.isLoading ? <LoadingSpinner /> : 'Send'}
        </button>
        <div>
          {form.isMessageSent ? (
            <SucessMessage>Message sent</SucessMessage>
          ) : (
            ''
          )}
        </div>
      </form>
      <br />
      <hr className="w-full border-1 border-gray-200 mb-3" />
      <p>Email: <a className="text-blue-500 cursor-pointer hover:underline" href="mailto:support@math-node-develop-app.netlify.app" >support@math-node-develop-app.netlify.app</a></p>
      
    </HomeContainer>
  );
}
