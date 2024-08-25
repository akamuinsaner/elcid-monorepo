import { Button } from '@elcid-monorepo/widgets';
import { TECommerce } from '@elcid-monorepo/types';
import ProductCard from '../ProductCard';

const PRODUCT_LIST: TECommerce.IProduct[] = [
  {
    id: 1,
    image: '/mock/1.jpg',
    color: 'Black',
    name: 'Urban Drift Bucket Hat',
    price: 15,
    colors: ['#000', '#fff'],
  },
  {
    id: 2,
    image: '/mock/2.jpg',
    color: 'Orange',
    name: 'Tangerine Mini Tote',
    price: 150,
    colors: ['#EA580C'],
  },
  {
    id: 3,
    image: '/mock/3.jpg',
    color: 'Beige',
    name: 'Elemental Sneakers',
    price: 80,
    origin: 100,
    colors: ['#D2B08A'],
  },
  {
    id: 4,
    image: '/mock/4.jpg',
    color: 'Black',
    name: 'Metro Hoodie',
    price: 810,
    origin: 90,
    colors: ['#000'],
  },
  {
    id: 5,
    image: '/mock/5.jpg',
    color: 'Yellow',
    name: 'Sunbeam Mules',
    price: 68,
    origin: 85,
    colors: ['#EAB308'],
  },
  {
    id: 6,
    image: '/mock/6.jpg',
    color: 'Blue',
    name: 'Azure Attitude Shades',
    price: 45,
    colors: ['#2563EB'],
  },
  {
    id: 7,
    image: '/mock/7.jpg',
    color: 'Green',
    name: 'Voyager Hoodie',
    price: 76,
    origin: 95,
    colors: ['#65A30D', '#CA8A04'],
  },
  {
    id: 8,
    image: '/mock/8.jpg',
    color: 'Black',
    name: 'LA Baseball Hat',
    price: 20,
    colors: ['#000'],
  },
];

const ProductGridSection = ({
  productList = PRODUCT_LIST,
}: {
  productList?: TECommerce.IProduct[];
}) => {
  return (
    <section className="px-3 py-12 tablet:px-4 tablet:py-16 desktop:px-24 desktop:py-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-primary font-semibold text-2xl tablet:text-3xl">
          Latest Arrivals
        </h2>
        <Button size="md" variant="secondary">
          View all
        </Button>
      </div>
      <ul className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
        {productList.map((item) => {
          return <ProductCard product={item} />;
        })}
      </ul>
    </section>
  );
};

export default ProductGridSection;
