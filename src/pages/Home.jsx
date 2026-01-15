import { Link } from "react-router-dom";

export default function Home() {
  const featuredDestinations = [
    {
      name: "London, UK",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Edinburgh, UK",
      image:
        "https://images.unsplash.com/photo-1579013784944-7ef7c7a9f85d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Toronto, Canada",
      image:
        "https://images.unsplash.com/photo-1534323612841-86b90e05d8be?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Vancouver, Canada",
      image:
        "https://images.unsplash.com/photo-1501425359016-0b94786c11e3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Montreal, Canada",
      image:
        "https://images.unsplash.com/photo-1505056195577-38e8a3e97b7a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Manchester, UK",
      image:
        "https://images.unsplash.com/photo-1564501044719-ec8f5a0dbb80?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative h-screen overflow-hidden flex flex-col"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Logo */}
        <div className="absolute top-6 left-6 z-20">
          <img
            src="https://i.ibb.co/2s5yH8r/WanderLux-Logo.png" // Replace with your hosted logo URL
            alt="WanderLux Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight max-w-3xl text-white">
            Exceptional Journeys,
            <br />
            <span className="text-gold font-semibold">Thoughtfully Designed</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-gray-200">
            JUMANTRAVEL specializes in bespoke global travel experiences — combining comfort, cultural depth, and seamless planning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              to="/booking"
              className="bg-gold text-luxury px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-yellow-400 transition"
            >
              Plan Your Trip
            </Link>
            <Link
              to="/destinations"
              className="border border-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-white hover:text-luxury transition"
            >
              View Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Bespoke Itineraries",
              text: "Every journey is crafted from the ground up — tailored to your preferences, interests, and expectations.",
            },
            {
              title: "Global Expertise",
              text: "Our network spans trusted hotels, airlines, and local guides across the UK and Canada.",
            },
            {
              title: "Seamless Experience",
              text: "From planning to return, we handle every detail with discretion and precision.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-14">
            <h2 className="text-4xl font-light">Featured Destinations</h2>
            <Link
              to="/destinations"
              className="uppercase tracking-widest text-sm text-gray-500 hover:text-gold transition"
            >
              Explore All
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {featuredDestinations.map((d) => (
              <div key={d.name} className="group cursor-pointer relative">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-80 w-full object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
                  {d.name}
                </h3>
                <Link
                  to="/booking"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40 rounded-xl"
                >
                  <span className="bg-gold text-luxury px-6 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-400 transition">
                    Book {d.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-luxury text-white text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-serif mb-6">Let’s Design Your Next Journey</h2>
          <p className="text-gray-300 text-lg mb-10">
            Speak with our consultants and begin planning a luxury experience tailored to you.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-gold text-luxury px-12 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-yellow-400 transition"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  );
}
