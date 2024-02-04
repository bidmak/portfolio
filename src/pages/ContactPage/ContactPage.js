import React from "react";

const ContactPage = ({ id, contactDetails }) => {
  return (
    <section id={id} className="contact-section">
      <div className="bg-gray-100 w-full ">{contactDetails.phoneNumber}</div>
    </section>
  );
};

export default ContactPage;
