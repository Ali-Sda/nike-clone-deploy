// Dynamic component Quick Assists
document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    {
      title: "Returns",
      links: [
        { text: "What is Nike's return policy?", href: "#" },
        { text: "How do I return my Nike order?", href: "#" },
        { text: "Where is my refund?", href: "#" },
        { text: "View all", href: "#" },
      ],
    },
    {
      title: "Shipping & Delivery",
      links: [
        { text: "What are Nike's shipping options?", href: "#" },
        { text: "Can I buy online and pick up in a store?", href: "#" },
        { text: "How do I get free shipping on Nike orders?", href: "#" },
        { text: "View all", href: "#" },
      ],
    },
    {
      title: "Orders & Payment",
      links: [
        { text: "Where is my Nike order?", href: "#" },
        { text: "Can I cancel or change my Nike order?", href: "#" },
        { text: "What are Nike's payment options?", href: "#" },
        { text: "View all", href: "#" },
      ],
    },
    {
      title: "Shopping",
      links: [
        { text: "How do I find the right size and fit?", href: "#" },
        { text: "How can I get Nike's best deals?", href: "#" },
        { text: "Does Nike offer product advice?", href: "#" },
        { text: "View all", href: "#" },
      ],
    },
    {
      title: "Nike Membership & Apps",
      links: [
        { text: "What is Nike Membership?", href: "#" },
        { text: "What is Nike SNKRS Pass?", href: "#" },
        { text: "How can I join Nike SNKRS drawings?", href: "#" },
        { text: "View all", href: "#" },
      ],
    },
    {
      title: "Company Info",
      links: [
        { text: "Do Nike shoes have a warranty?", href: "#" },
        { text: "Can I recycle my Nike shoes?", href: "#" },
        { text: "Does Nike offer grants or donations?", href: "#" },
        { text: "View all", href: "#" },
      ],
    },
  ];

  const container = document.getElementById('info-sections');

  sections.forEach(section => {
    const sectionDiv = document.createElement('div');

    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'text-lg font-semibold mb-4';
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    const linkList = document.createElement('ul');
    linkList.className = 'space-y-2';
    section.links.forEach(link => {
      const listItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.className = 'hover:underline';
      linkElement.href = link.href;
      linkElement.textContent = link.text;
      listItem.appendChild(linkElement);
      linkList.appendChild(listItem);
    });
    sectionDiv.appendChild(linkList);
    container.appendChild(sectionDiv);
  });
});

// Dynamic component Contact us 

