import Services from "../components/Services";
import About from "../components/About";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen text-white text-center flex items-center justify-center px-4"
        id="home"
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/floor.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/20 sm:bg-black/50 z-0" />

        {/* Hero content */}
        <div className="relative z-10 p-8 rounded-lg">
          <h1 className="text-5xl font-extrabold mb-4">
            Bring Your Floors to Life
          </h1>
          <p className="text-xl mb-6">
            Expert installation. Beautiful results.
          </p>
          <a href="#contact">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded transition">
              Get a Free Quote
            </button>
          </a>
        </div>
      </section>

      {/* Scroll-down content */}
      <Services />
      <About />
      <ContactForm />
    </main>
  );
}
