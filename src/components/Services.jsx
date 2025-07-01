const services = [
  {
    title: "Hardwood Flooring",
    description: "Timeless wood floors with expert installation and finishes.",
    image: "/hardwood.avif", // put this in /public
  },
  {
    title: "Vinyl Plank Flooring",
    description: "Affordable and durable vinyl plank flooring for any space.",
    image: "/vinyl.jpg",
  },
  {
    title: "Tile Installation",
    description: "Custom tile flooring for kitchens, bathrooms, and more.",
    image: "/tile.jpg",
  },
  {
    title: "Laminate Flooring",
    description:
      "Stylish and cost-effective laminate flooring with a natural look.",
    image: "/laminate.jpg", // ensure this image is in the /public directory
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 px-4" id="services">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Services
      </h2>
      <div
        className={`max-w-6xl mx-auto grid gap-8 ${
          services.length % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
