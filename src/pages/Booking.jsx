import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    startDate: "",
    endDate: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your booking for ${formData.destination} with ${formData.paymentMethod} payment has been received.`
    );
    // Integrate your backend or payment logic here
  };

  const whatsappLink = `https://wa.me/254768129982?text=Hello! I would like to inquire about a trip to ${formData.destination}`;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* HERO */}
      <section
        className="relative h-64 sm:h-80 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1950&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl sm:text-5xl font-serif text-center px-4">
          Plan Your Journey
        </h1>
      </section>

      {/* BOOKING FORM */}
      <section className="flex-grow py-24 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-10 w-full max-w-3xl space-y-6"
        >
          <h2 className="text-3xl font-semibold text-luxury text-center mb-6">
            Booking Inquiry
          </h2>

          {/* Personal Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Destination"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Dates */}
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Payment Method
            </label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="mpesa">M-Pesa</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash on Arrival</option>
            </select>
          </div>

          {/* Payment Info (dynamic placeholder) */}
          {formData.paymentMethod === "card" && (
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          )}

          {formData.paymentMethod === "paypal" && (
            <p className="text-gray-600">
              You will be redirected to PayPal to complete your payment after
              submitting the booking.
            </p>
          )}

          {formData.paymentMethod === "mpesa" && (
            <p className="text-gray-600">
              You will receive instructions to complete payment via M-Pesa.
            </p>
          )}

          {formData.paymentMethod === "bank" && (
            <p className="text-gray-600">
              Bank transfer details will be sent to your email after submitting.
            </p>
          )}

          {formData.paymentMethod === "cash" && (
            <p className="text-gray-600">
              You can pay in cash on arrival at the hotel or meeting point.
            </p>
          )}

          {/* Submit & WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              type="submit"
              className="bg-gold text-luxury px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-400 transition"
            >
              Submit Booking
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:bg-green-600 transition text-center"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
