import StepCard from "./StepCard";

import step1 from "../../assets/icons/step1.png";
import step2 from "../../assets/icons/step2.png";
import step3 from "../../assets/icons/step3.png";
import step4 from "../../assets/icons/step4.png";

function HowItWorks() {
  const steps = [
    {
      icon: step1,
      title: "Choose Product",
      desc: "Use the search to find the product you need.",
    },
    {
      icon: step2,
      title: "Choose Pharmacy",
      desc: "Select the pharmacy where you want to pick up your order.",
    },
    {
      icon: step3,
      title: "Place Your Order",
      desc: "Follow the instructions and complete your purchase.",
    },
    {
      icon: step4,
      title: "Receive Your Order",
      desc: "Collect your order from your selected pharmacy.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-14">

      <h2 className="text-xl font-bold text-gray-800 mb-10">
        How It Works?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </div>

    </section>
  );
}

export default HowItWorks;