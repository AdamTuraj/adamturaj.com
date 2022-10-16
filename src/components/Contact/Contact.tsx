import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  return (
    <section className="mt-52 mb-24 flex w-screen flex-col gap-5" id="contact">
      <h2 className="text-center text-6xl font-bold">Contact Me</h2>
      <p className="text-center text-lg font-thin md:mx-auto md:w-1/2 md:text-xl">
        My inbox is always open to new opportunities, questions or just saying
        hi. I provide flexible prices and am mostly always available for a new
        project. I hope to hear from you soon, this is the first step to a new
        opportunity!
      </p>
      <form
        className="flex flex-col gap-5 px-5 md:mx-auto md:w-1/2"
        onSubmit={handleSubmit(
          ({ subject, body }) =>
            ((
              window as Window
            ).location = `mailto:adam@adamturaj.com?subject=${subject}&body=${body}`)
        )}
      >
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-xl font-bold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="h-12 rounded-md border-2 border-gray-300 px-5 text-black"
            {...register("subject", { required: true })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="body" className="text-xl font-bold">
            Body
          </label>
          <textarea
            id="body"
            className="h-48 rounded-md border-2 border-gray-300 px-5 py-3 text-black"
            {...register("body", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="mx-auto mt-5 w-full rounded-lg border-4 border-primary py-3 text-center text-2xl font-bold text-white transition-colors duration-300 hover:bg-primary md:w-1/2"
        >
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default Contact;
