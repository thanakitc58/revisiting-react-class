import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ProductCard from "./ProductCard";
function ProductHighlight() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard title="The Lorem Ipsum for photos." price="$99.99" image="https://picsum.photos/id/231/200/200" description="The Lorem Ipsum for photos." />
          <ProductCard title="Wireless Bluetooth Earbuds" price="$79.99" image="https://picsum.photos/id/232/200/200" description="Wireless Bluetooth Earbuds" />
          <ProductCard title="Stylish Cool Sunglasses in The World" price="$79.99" image="https://picsum.photos/200/200" description="Stylish Cool Sunglasses in The World" />
        </div>
      </div>
    </section>
  );
}

export default ProductHighlight;
