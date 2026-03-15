import Categories from "@/components/home/Categories";
import HeroSlider from "@/components/home/HeroSlider";
import TrendingProducts from "@/components/home/TrendingProducts";

export default function Home() {

  return (
    <div className="font-sans dark:bg-black">
      <main className="">
        <HeroSlider />
        <Categories />
        <TrendingProducts/>
      </main>
    </div>
  );
}
