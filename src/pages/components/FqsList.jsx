import React from "react";
import FaqsCard from "./FaqsCard";

const FqsList = () => {
  const faqsList = [
    {
      q: "Q1. Which country is the top choice for AI studies?",
      a: "Leading destinations include the UK, USA, Germany, and Canada, with the UK offering globally ranked AI programmes and industry-aligned curricula.",
    },
    {
      q: "Q2. Where do AI professionals earn the highest salaries?",
      a: "Top-paying regions are the USA, Canada, and the UK, particularly for roles in machine learning, robotics, and data science.",
    },
    {
      q: "Q3. Is artificial intelligence difficult to learn?",
      a: "AI requires strong analytical and programming skills, but structured education (e.g., UK university programmes) simplifies mastery through hands-on training and expert mentorship.",
    },
  ];

  return (
    <section className="leading-relaxed mt-8 px-4 md:px-8">
      <div className="mt-4 border border-gray-300">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FqsList;
