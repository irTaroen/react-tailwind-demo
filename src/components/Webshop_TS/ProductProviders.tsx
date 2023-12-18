export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  { sku: "item001", name: "Widget", price: 9.99 },
  { sku: "item002", name: "Premium Widget", price: 19.99 },
  { sku: "item003", name: "Deluxe Widget", price: 29.99 },
];

export type UseProductsContextType = { products: ProductType[] };
