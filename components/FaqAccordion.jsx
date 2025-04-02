import PropTypes from "prop-types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Separator } from "./components/ui/separator";

function FaqAccordion({ faqs, className }) {
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full space-y-4 ${className || ""}`}
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className="rounded-lg border-0 bg-[#FEF7E7] [&>div]:border-0"
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
  );
}

FaqAccordion.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

FaqAccordion.defaultProps = {
  className: "",
};

export default FaqAccordion;
