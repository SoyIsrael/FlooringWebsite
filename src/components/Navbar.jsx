import { Link, useLocation } from "react-router-dom";
import MobileMenu from "@/components/MobileMenu";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Define navigation items based on current page
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/logotextless.png"
            className="w-12 h-12 object-contain"
            alt="RaicesFlooring logo"
          />
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
            RaicesFlooring
          </h1>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="space-x-6 hidden lg:flex">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-blue-600"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
