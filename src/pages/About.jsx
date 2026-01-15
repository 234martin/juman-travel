import { motion } from "framer-motion";

export default function About() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Travel Consultant",
      image:
        "https://images.unsplash.com/photo-1603415526960-f9e4b8ee8a4b?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Michael Smith",
      role: "Luxury Travel Planner",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Sophia Lee",
      role: "Destination Specialist",
      image:
        "https://images.unsplash.com/photo-1603415526960-f9e4b8ee8a4b?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-light text-center px-4">
          About JUMANTRAVEL
        </h1>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
              alt="Travel Experience"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4">
              JUMANTRAVEL is a premium travel agency dedicated to curating bespoke journeys around the globe. 
              Our philosophy is simple: travel should be immersive, effortless, and unforgettable. 
              From luxurious accommodations to personalized itineraries, we craft experiences tailored to your tastes and interests.
            </p>
            <p className="text-gray-700 text-lg">
              Our team of experienced travel consultants combines global expertise with attention to detail, 
              ensuring every trip is seamless and extraordinary. Whether you’re seeking adventure, cultural immersion, or relaxation, WanderLux delivers unparalleled travel experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES / MISSION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Excellence",
                text: "We strive for perfection in every detail to create unforgettable travel experiences."
              },
              {
                title: "Personalization",
                text: "Every journey is customized to reflect your style, interests, and pace."
              },
              {
                title: "Integrity",
                text: "We maintain transparency and honesty in all our recommendations and partnerships."
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-luxury text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-6">Start Your Journey with Us</h2>
          <p className="text-gray-300 text-lg mb-10">
            Speak with our travel consultants and begin planning a luxury experience tailored to you.
          </p>
          <a
            href="/booking"
            className="inline-block bg-gold text-luxury px-12 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </a>
        </div>
      </section>
    </main>
  );
}
