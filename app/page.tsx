import FoodCard from "@/components/ui/cards/food-card";
import menuImage from "@/public/menu.jpg";
import combosImage from "@/public/combos.jpg";
import specialImage from "@/public/special.jpg";
import favouriteImage from "@/public/favourite.jpg";
import Image from "next/image";
const cards = [
  { title: "Menu", image: menuImage },
  { title: "Best Combos", image: combosImage },
  { title: "Our Special", image: specialImage },
  { title: "Customer Favourite", image: favouriteImage },
];

const Index = () => {
  return (
    <main className="h-dvh bg-background px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-2xl bg-card/40 px-8 py-6 shadow-card backdrop-blur-3xl backdrop-saturate-150 backdrop-brightness-110">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Discover Our <span className="text-primary">Delights</span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FoodCard
              key={card.title}
              title={card.title}
              image={card.image}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Index;
