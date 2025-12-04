import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  // TODO: Replace with your form ID
  const [state, handleSubmit] = useForm("mrbavlvr");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="space-y-4">
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your email"
        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
      />
      <ValidationError 
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        rows={4}
        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
      />
      <ValidationError 
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors">
        SEND MESSAGE
      </button>
    </form>
  );
}

export default ContactForm;