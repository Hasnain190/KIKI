import React from "react";
import ContactForm from "../../src/components/ContactForm";
import PageTransition from "src/components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">
        Have a question or collaboration? Send a message.
      </p>
      <ContactForm />
    </PageTransition>
  );
}
