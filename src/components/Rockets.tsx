export default function Rockets() {
  const images = [
    {
      path: "img/rocketman.png",
      title: "Explorer",
      subtext: "Affordable Exploration",
      price: "$",
      alt: "Explorer",
      id: 1,
    },
    {
      path: "img/rocketride.png",
      title: "Adventurer",
      subtext: "Best Selling Rocket",
      price: "$$",
      alt: "Adventurer",
      id: 2,
    },
    {
      path: "img/rocketlaunch.png",
      title: "Infity",
      subtext: "Luxury Starship",
      price: "$$$",
      alt: "Infity",
      id: 3,
    },
  ];

  return (
    <>
      <section id="rockets" className=" p-6 my-12 scroll-mt-20">
        <h2 className=" text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul className=" list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          {images.map((img) => (
            <li
              key={img.id}
              className=" hover:-translate-y-1 transition cursor-pointer flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-harpa-main py-6 px-2 rounded-3xl shadow-xl"
            >
              <img src={img.path} alt="Explorer" className=" w-1/2 mb-6" />
              <h3 className="text-3xl mt-2 text-center text-slate-500 dark:text-slate-500 ">
                {img.title}
              </h3>
              <p className="  hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-white">
                {img.price}
              </p>
              <p className=" sm:hidden text-2xl mt-2 text-center text-slate-900 dark:text-slate-400">
                {img.subtext}
              </p>
            </li>
          ))}
        </ul>
        <hr className=" mx-auto bg-white dark:bg-harpa-main w-1/2" />
      </section>
    </>
  );
}
