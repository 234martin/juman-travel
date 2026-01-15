import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-luxury text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif text-gold">
          JUMANTRAVEL
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/destinations" className="hover:text-gold transition">Destinations</Link>
          <Link to="/about" className="hover:text-gold transition">About Us</Link>
          <Link to="/contact" className="hover:text-gold transition">Contact</Link>
          <Link
            to="/booking"
            className="px-6 py-2 bg-gold text-luxury rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-gold"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-luxury text-white px-6 pb-4 space-y-4">
          <Link to="/" className="block hover:text-gold transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/destinations" className="block hover:text-gold transition" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link to="/about" className="block hover:text-gold transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="block hover:text-gold transition" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link
            to="/booking"
            className="block px-6 py-2 bg-gold text-luxury rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
