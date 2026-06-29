import ProductCard from "./ProductCard";

interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  badge?: {
    text: string;
    type: "best" | "new" | "premium" | "spec";
  };
  specs?: {
    label: string;
    value: string;
  }[];
  category: "bike" | "scooter" | "accessory";
}

interface ProductGridProps {
  products: ProductItem[];
  className?: string;
}

export default function ProductGrid({ products, className = "" }: ProductGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          badge={product.badge}
          specs={product.specs}
          category={product.category}
        />
      ))}
    </div>
  );
}
