import React from "react";

const Faq = () => {
  return (
    <div className="faq">
      <h1 className="faq__title">Frequently Asked Questions</h1>
      <details>
        <summary>Can I return my furniture?</summary>
        <p>
          Yes, you can return your furniture within 30 days of delivery. The
          furniture must be in its original condition and packaging to be
          eligible for return. Please note that return shipping fees may apply.
        </p>
      </details>
      <details>
        <summary>Do you offer warranty on your products?</summary>
        <p>
          Yes, we offer a one year warranty on all our furniture pieces. This
          covers manufacturing defects and does not cover damages resulting from
          misuse or natural wear and tear. For more details, please refer to our
          warranty policy.
        </p>
      </details>
      <details>
        <summary>Can I customize my order?</summary>
        <p>
          We strive to meet our customers unique needs and, depending on the
          product, customization options may be available. Please contact our
          customer service for more information.
        </p>
      </details>
      <details>
        <summary>What are your delivery times?</summary>
        <p>
          Our standard delivery time is between 5-7 business days, depending on
          your location. For customized orders, delivery times may vary. You
          will be informed of the estimated delivery date after placing your
          order.
        </p>
      </details>
      <details>
        <summary>How do I care for my new furniture?</summary>
        <p>
          Each of our furniture pieces comes with a specific care guide.
          Generally, we recommend dusting with a soft, dry cloth and avoiding
          the use of harsh chemicals. For leather pieces, periodic treatment
          with a suitable leather conditioner is advised.
        </p>
      </details>
      <details>
        <summary>What are the payment options?</summary>
        <p>
          We accept all major credit cards (Visa, MasterCard, American Express),
          PayPal, and bank transfers. We ensure a secure payment process for all
          transactions.
        </p>
      </details>
    </div>
  );
};

export default Faq;
