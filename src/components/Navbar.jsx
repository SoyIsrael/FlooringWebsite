export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="logotextless.png"
            className="w-12 h-12 object-contain"
            alt="RaicesFlooring logo"
          />
          <h1 className="text-2xl font-bold text-gray-800">RaicesFlooring</h1>
        </div>
        <div className="space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
