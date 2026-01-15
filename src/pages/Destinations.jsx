import { Link } from "react-router-dom";

export default function Destinations() {
  const destinations = [
    // UK Cities
    { name: "London, UK", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80" },
    { name: "Edinburgh, UK", image: "https://images.unsplash.com/photo-1579013784944-7ef7c7a9f85d?auto=format&fit=crop&w=1200&q=80" },
    { name: "Manchester, UK", image: "https://images.unsplash.com/photo-1564501044719-ec8f5a0dbb80?auto=format&fit=crop&w=1200&q=80" },
    { name: "Birmingham, UK", image: "https://images.unsplash.com/photo-1528915600711-10de4c037d4f?auto=format&fit=crop&w=1200&q=80" },
    { name: "Glasgow, UK", image: "https://images.unsplash.com/photo-1564550976743-d6c0b71b103f?auto=format&fit=crop&w=1200&q=80" },
    { name: "Liverpool, UK", image: "https://images.unsplash.com/photo-1543932921-efad15c79e50?auto=format&fit=crop&w=1200&q=80" },

    // Canada Cities
    { name: "Toronto, Canada", image: "https://images.unsplash.com/photo-1534323612841-86b90e05d8be?auto=format&fit=crop&w=1200&q=80" },
    { name: "Vancouver, Canada", image: "https://images.unsplash.com/photo-1501425359016-0b94786c11e3?auto=format&fit=crop&w=1200&q=80" },
    { name: "Montreal, Canada", image: "https://images.unsplash.com/photo-1505056195577-38e8a3e97b7a?auto=format&fit=crop&w=1200&q=80" },
    { name: "Calgary, Canada", image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80" },
    { name: "Ottawa, Canada", image: "https://images.unsplash.com/photo-1589403147768-0a2d9c6f3f9f?auto=format&fit=crop&w=1200&q=80" },
    { name: "Quebec City, Canada", image: "https://images.unsplash.com/photo-1572433565517-1644a59d5e3f?auto=format&fit=crop&w=1200&q=80" },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative h-80 sm:h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl sm:text-5xl md:text-6xl font-serif text-center px-4">
          Explore Destinations
        </h1>
      </section>

      {/* DESTINATION GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Button */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <Link
                to="/booking"
                className="bg-gold text-luxury px-6 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-400 transition text-sm sm:text-base"
              >
                Book {dest.name}
              </Link>
            </div>
            <h3 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-semibold drop-shadow-lg">
              {dest.name}
            </h3>
          </div>
        ))}
      </section>
    </main>
  );
}
