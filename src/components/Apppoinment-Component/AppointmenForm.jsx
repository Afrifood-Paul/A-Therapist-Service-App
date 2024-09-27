import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AppointmentIMG from '../../assets/Appointment.webp'

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    service: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentDetails = {
      ...formData,
      date: selectedDate,
    };

    

    // Placeholder for sending appointment details to company email
    console.log('Appointment details:', appointmentDetails);
    alert('Appointment sent successfully!');

     // Logic to clear the form fields after submission
    setFormData({
      service: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    // Clear the selected date field
    setSelectedDate(null);
  };

  return (
    <main className="bg-gray-50 font-poppins">
      <div className="mx-auto z-20 py-12 px-4">
        <div className=" rounded-lg  flex relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-1/2 bg-cover bg-no-repeat "
            style={{backgroundImage:`url(${AppointmentIMG})`}}
          ></div>

          {/* Form Container */}
          <div className="ml-auto shadow-lg w-2/3 bg-white rounded-lg p-10 relative z-10">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Select Service */}
              <div>
                <label className="block text-gray-700 ">Select Service</label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border bg-gray-100 rounded px-3 py-2"
                >
                  <option className='text-gray-400 hover:bg-gray-500' value="">Select service</option>
                  <option value="Individual Therapy">Individual Therapy</option>
                  <option value="Anxiety Therapy">Anxiety Therapy</option>
                  <option value="Depression Therapy">Depression Therapy</option>
                  <option value="Stress Management">Stress Management</option>
                </select>
              </div>

              {/* Date and Time Selection */}
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label className="block text-gray-700">Select Date</label>
                  <DatePicker
                    required
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="w-full border bg-gray-100 rounded px-3 py-2"
                    placeholderText="Select date"
                    dateFormat="MM/dd/yyyy"
                    showPopperArrow={false}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">Select Time</label>
                  <select
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full border bg-gray-100 rounded px-3 py-2"
                  >
                    <option value="">Select time</option>
                    {Array.from({ length: 11 }, (_, i) => (
                      <option key={i} value={`${10 + i}:00`}>
                        {`${10 + i}:00`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name, Email, Phone */}
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <label className="block text-gray-700">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border bg-gray-100 rounded px-3 py-2"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-gray-700">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border bg-gray-100 rounded px-3 py-2"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border bg-gray-100 rounded px-3 py-2"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700">Have Any Message?</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border  bg-gray-100 rounded px-3 py-2"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#5a9e7c] text-sm  text-white px-3 py-2 rounded-full font-poppins font-semibold"
              >
                Send Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppointmentForm;
