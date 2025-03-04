
import { useState } from "react";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    // Normally, you would send form data to an API or email service here.
    console.log("Form submitted successfully:", formData);
  };

  return (
    <section id="Contact">
      <div className="container mx-auto text-center my-6 px-4">
        
        <h2 className='text-red-800 font-bold text-2xl'>Contact Us</h2>
        <p className="text-lg text-gray-600 mb-10">
          We would love to hear from you. Please fill out the form below to get in touch.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="mx-8 bg-white p-4 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                placeholder="Your Name"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                placeholder="Your Email"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                placeholder="Your message here..."
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 focus:outline-none"
            >
              {submitted ? "Thank You!" : "Submit"}
            </button>
          </form>
          </div>

        <div className="space-y-6 content-center">

          <div>
            <h4 className="text-lg font-medium text-gray-700">Email</h4>
            <p className="text-gray-600">crystalcurebd@gmail.com</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-700">Phone</h4>
            <p className="text-gray-600"> +880 189197 1990 / +880 190448 0448</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-700">Address</h4>
            <p className="text-gray-600">672 B, North Kafrul, Dhaka-1207</p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-700">Website</h4>
            <p className="text-gray-600">www.ccpestcontrolbd.com</p>
          </div>
        </div>
        </div>

        {submitted && (
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-800">Your message has been successfully sent! We will get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;



// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', { name, email });
//     setName(''); // Clear the name input
//     setEmail(''); // Clear the email input
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Contact;