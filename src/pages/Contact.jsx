import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "254700000000"; // replace with your number
  const whatsappMessage = "Hello! I would like to inquire about your travel services.";

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* HERO SECTION */}
      <section
        className="relative h-64 sm:h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl sm:text-5xl font-serif text-center px-4">
          Connect With Us
        </h1>
      </section>

      {/* SOCIAL MEDIA LINKS */}
      <section className="flex-grow py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-luxury mb-10 text-center">
          Follow & Connect
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-white">
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-4 rounded-full text-xl hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 p-4 rounded-full text-xl hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 p-4 rounded-full text-xl hover:scale-110 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 p-4 rounded-full text-xl hover:scale-110 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-4 rounded-full text-xl hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="mt-12 text-center text-gray-600 max-w-xl">
          Reach out to us anytime via social media or WhatsApp for inquiries, bookings, or assistance. 
          We are here to make your luxury travel experience seamless and memorable.
        </p>
      </section>
    </main>
  );
}
