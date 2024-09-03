import ProductCard from 'packages/ui/src/lib/e-commerce/ProductCard';
import { State } from './store';

const ProductList = ({
    productList,
}: {
    productList: State['productList'];
}) => {
    return (
        <ul className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8'>
            {productList.map(product => {
                return <ProductCard product={product} />;
            })}
        </ul>
    );
};

export default ProductList;
