import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQ.css";
import { useState } from "react";

const faqs = [
  {
    question: "What is the purpose of the Medicine Club?",
    answer: "The Medicine Club aims to bring together students interested in medical sciences, offering educational events, networking opportunities, and hands-on experiences."
  },
  {
    question: "Who can join the club?",
    answer: "Any student with an interest in medicine, healthcare, or related fields is welcome to join. Membership is open to all."
  },
  {
    question: "What does Innovate-x mean?",
    answer: "It is a word made up of two parts :Innovate, which means innovation and is the basis of our scientific club The letter X, which symbolizes its absorption of all specializations and the exchange of ideas and knowledge This is the basis of the club"
  },
  {
    question: "What are the most important features of the club?",
    answer: "The club provides an opportunity for many students from different fields to meet, especially the field of pharmacy, in addition to being the first scientific club to launch a digital platform and its own scientific magazine."
  },
  {
    question: "What does the magazine contain?",
    answer: "It is a magazine that contains many scientific articles in the field of pharmacy, which are of interest not only to pharmacy students, but to all groups, as it provides scientific articles on physical and mental health, advice for the best use of medicinal plants, and many other topics."
  },
  {
    question: "How can I stay updated on club activities?",
    answer: "You can follow us on social media, check our website regularly, or follow us on facebook and instagram for updates."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-5 faq-container" id="FAQ">
      <h2 className="text-center mb-4 faq-title">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item faq-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
            >
              <div className="accordion-body faq-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
