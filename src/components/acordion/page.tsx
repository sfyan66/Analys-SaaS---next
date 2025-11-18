import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const array = [
  {
    title: "San Francisco",
    email: "sanfrancisco@analyzer.com",
  },
  {
    title: "London",
    email: "london@analyzer.com",
  },
  {
    title: "New York",
    email: "newyork@analyzer.com",
  },
];

export function PLaces() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {array.map((item, index) => (
        <AccordionItem
          value={`item-${index + 1}`}
          key={item.title}
          className="after-line max-w-[600px]"
        >
          <AccordionTrigger className="text-white text-2xl hover:ml-8">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-8 text-balance text-secondary text-lg">
            <p>
              Our hub of tech innovation, driving product development and
              fostering partnerships on the West Coast.
            </p>
            <div className=" hover:ml-2 hover:text-white text-lg">
              <Image
                src={"/email.svg"}
                alt=""
                className="size-6 mr-4 inline"
                width={26}
                height={26}
              />
              {item.email}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
