import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("movdzjrk");

  if (state.succeeded) {
    return (
      <p className="text-green-600 text-center mt-16 text-lg font-medium">
        Thanks for reaching out! We’ll be in touch soon.
      </p>
    );
  }

  return (
    <section id="contact" className="mt-24 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          Have questions or want a flooring quote? Fill out the form and we’ll
          get back to you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-6"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
