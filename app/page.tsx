import Banner from "@/components/banner/Banner";
import Category from "@/components/categories/Category";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div>
      <Category />
      <Banner />
      <Products />
    </div>
  );
}
