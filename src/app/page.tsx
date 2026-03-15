import Categories from "@/components/home/Categories";
import FeaturedToys from "@/components/home/FeaturedToys";
import HeroSlider from "@/components/home/HeroSlider";
import KidsFashion from "@/components/home/KidsFashion";
import TrendingProducts from "@/components/home/TrendingProducts";

export default function Home() {

  return (
    <div className="font-sans dark:bg-black">
      <main className="">
        <HeroSlider />
        <Categories />
        <TrendingProducts />
        <FeaturedToys />
        <KidsFashion/>
      </main>
    </div>
  );
}
