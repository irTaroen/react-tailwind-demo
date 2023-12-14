export default function CardWebshopOne() {
  const items = [
    {
      path: "public/img/Cards/shoes.jpeg",
      title: "Explorer",
      subtext: "Affordable Exploration",
      price: 250,
      alt: "Explorer",
      id: 1,
      color: "",
      stars: 4,
    },
    {
      path: "public/img/Cards/headphones.jpeg",
      title: "Adventurer",
      subtext: "Best Selling Rocket",
      price: 350,
      alt: "Adventurer",
      id: 2,
      color: "",
      stars: 5,
    },
    {
      path: "public/img/Cards/coat.jpeg",
      title: "Infity",
      subtext: "Luxury Starship",
      price: 299,
      alt: "Infity",
      id: 3,
      color: "",
      stars: 5,
    },
  ];
  return (
    <div className=" flex gap-3 justify-center items-center">
      {items.map((item, index) => (
        <div className="">
          <img src={item.path} alt="" />
          <h3>{item.title}</h3>
          <p>Description</p>
          <h3>${item.price}</h3>
          <ul key={index} className="flex gap-1">
            {Array.from({ length: item.stars }, (_, itemIndex) => (
              <li key={itemIndex}>Full</li>
            ))}
            {Array.from({ length: 5 - item.stars }, (_, itemIndex) => (
              <li key={itemIndex}>Empty</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
