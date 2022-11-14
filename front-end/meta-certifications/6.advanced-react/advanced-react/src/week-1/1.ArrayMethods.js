const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "the best tiramisu in town",
    image: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "blast of chocolate",
    image: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  }
];

const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price
  };
});

console.log(topDesserts);

