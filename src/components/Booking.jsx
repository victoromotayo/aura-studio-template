import { useState } from 'react';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send data to an API here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <section id="book" className="booking hidden">
      <div className="booking-container">
        <div className="booking-text">
          <h2>Reserve Your Time</h2>
          <p>Schedule your personalized treatment today. Our specialists will confirm your appointment within 24 hours.</p>
        </div>

        <div className="booking-form-wrapper">
          {isSubmitted ? (
            <div className="success-message">
              <h3>Request Received</h3>
              <p>We look forward to seeing you. A confirmation email is on its way.</p>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              
              <select required defaultValue="">
                <option value="" disabled>Select a Service</option>
                <option value="facial">Signature Aura Facial</option>
                <option value="microdermabrasion">Microdermabrasion</option>
                <option value="haircut">Precision Cut & Blowout</option>
                <option value="color">Balayage & Color</option>
              </select>

              <div className="form-row">
                <input type="date" required />
                <select required defaultValue="">
                  <option value="" disabled>Preferred Time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 7PM)</option>
                </select>
              </div>

              <button type="submit" className="btn-book full-width">Request Appointment</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;