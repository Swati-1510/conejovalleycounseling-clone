import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQsPage() {
  const faqs = [
    {
      q: "Do you offer in-person or virtual sessions?",
      a: "I offer both in-person therapy at my Santa Monica office (123th Street 45 W, Santa Monica, CA 90401) and secure telehealth appointments for clients residing anywhere in California."
    },
    {
      q: "What primary concerns do you treat?",
      a: "I specialize in working with adults navigating anxiety, panic, trauma recovery (EMDR), professional burnout, and high internal pressure/perfectionism."
    },
    {
      q: "Who is your practice designed for?",
      a: "My practice focuses on thoughtful, high-achieving adults, professionals, and creatives who feel internally exhausted, overwhelmed, or stuck in overthinking."
    },
    {
      q: "What is your therapeutic approach?",
      a: "I integrate evidence-based methods—including CBT, EMDR, mindfulness, and body-oriented somatic techniques—paced with an emphasis on safety and regulation."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Navbar />
      
      <div className="flex-1 w-full max-w-4xl mx-auto px-8 md:px-12 py-32 md:py-48">
        <h1 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] leading-tight mb-16 text-[var(--bg-dark)]">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="flex flex-col border-t border-[var(--border-color)] pt-8">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-[var(--color-primary)]">
                {faq.q}
              </h2>
              <p className="font-sans font-light text-[16px] md:text-[18px] leading-[1.8] text-[var(--text-main)] max-w-3xl">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
