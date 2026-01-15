export default function Footer() {
  return (
    <footer className="bg-luxury text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">JUMANTRAVEL</h3>
          <p className="text-gray-400">
            Bespoke luxury travel experiences crafted for discerning travelers. Your journey, perfected.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gold transition">Home</a></li>
            <li><a href="/destinations" className="hover:text-gold transition">Destinations</a></li>
            <li><a href="/about" className="hover:text-gold transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-gold transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl text-white font-semibold mb-4">Contact</h3>
          <p>123 Luxury Lane, Nairobi, Kenya</p>
          <p>
            <a href="mailto:info@wanderlux.com" className="hover:text-gold transition">
              info@jumantravel.com
            </a>
          </p>
          <p>
            <a href="tel:+254700000000" className="hover:text-gold transition">
              +44 7577 028 612 <br /> +1 (579) 900-7528
              
            </a>
          </p>
        </div>
      </div>
      <div className="bg-black/30 text-center py-4 mt-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} JUMANTRAVEL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
