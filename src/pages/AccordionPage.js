import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "ajfaiufj",
      label: "Can I use React on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "ajfaiufgwrg",
      label: "Can I use Javascript on a project.",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "ajfaiufjgwregw",
      label: "Can I use CSS on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
