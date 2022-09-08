import React from "react";

export default function FAQs() {
  const faqs = [
    {
      qus: "DO we need to pay any fee in order to register ?",
      ans: "No, it is free of charges.",
    },
    {
      qus: "Can we promote our stuff here ?",
      ans: "Spams and promotions are not allowed, and may lead to your account ban from the platform.",
    },
  ];
  return (
    <div>
      <p className="mb-[2rem] font-semibold text-pri text-[24px] mt-[4rem] underline decoration-sec">
        FAQs
      </p>

      {faqs.map((faq, i) => {
        return (
          <div key={i} className="text-black text-[24px] mt-[16px]">
            <p className="font-bold">{faq.qus}</p>
            <p>{faq.ans}</p>
          </div>
        );
      })}
    </div>
  );
}
