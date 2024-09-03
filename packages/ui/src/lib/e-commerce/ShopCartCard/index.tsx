import { ECommerce } from '@elcid-monorepo/types';

const ShopCartCard = ({
    id,
    product,
    count,
    onRemove = () => {},
}: {
    id: number;
    product: ECommerce.Product.IProduct;
    count: number;
    onRemove: (id: number) => void;
}) => {
    return <div></div>;
};

export default ShopCartCard;
