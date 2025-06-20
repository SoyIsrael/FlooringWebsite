export default function About() {
  return (
    <section className="bg-gray-100 py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Optional image */}
        <img
          src="/owners.jpg"
          alt="Our Team"
          className="w-full lg:w-1/2 rounded-lg shadow-md object-cover h-80"
        />

        {/* Text content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            We're a familssssy-run flooring business built on craftsmanship,
            honesty, and care. After years of working in home renovation, we
            decided to bring high-quality flooring services directly to our
            community.
          </p>
          <p className="text-gray-700">
            Whether it’s a cozy home or a commercial space, we treat every
            project like it’s our own. We believe that great floors are the
            foundation of great spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
