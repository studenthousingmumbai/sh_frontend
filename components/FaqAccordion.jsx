import PropTypes from "prop-types";

import { Separator } from "../components/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import SectionTitle from "./SectionTitle";

function FAQ({ faqs, className }) {
  return (
    <div className="py-12">
      <SectionTitle title={"FAQ"} className={"mb-9"} />

      <div className="max-w-3xl mx-auto flex flex-col justify-center items-center">
        <Accordion
          type="single"
          collapsible
          className={`w-full space-y-4 ${className || ""}`}
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-lg border border-[rgba(0,0,0,0.08)] bg-[linear-gradient(to_left,#FEF7E7,#FFFBF4)] [&>div]:border-0"
            >
              <AccordionTrigger className="flex w-full items-center justify-between px-6 py-4 text-left hover:no-underline">
                <span className="text-base font-medium">{faq.question}</span>
              </AccordionTrigger>

              <AccordionContent>
                <Separator className="mb-4" />
                <p className="text-gray-600 px-6 space-y-4 font-medium">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

FAQ.defaultProps = {
  className: "",
};

export default FAQ;
