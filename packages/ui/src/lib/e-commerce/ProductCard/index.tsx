import { TECommerce } from '@elcid-monorepo/types';
import { Link } from '@elcid-monorepo/widgets';

const ProductCard = ({ product }: { product: TECommerce.IProduct }) => {
    return (
        <li key={product.id}>
            <Link
                type='button'
                className='p-0 bg-inherit border-none outline-none text-left block w-full group rounded-lg'
            >
                <div className='h-auto tablet:h-[300px] rounded-lg overflow-hidden'>
                    <img
                        alt=''
                        src={product.image}
                        loading='lazy'
                        className='w-full h-full object-center object-cover'
                    />
                </div>
                <div className='py-4 flex flex-col'>
                    <span className='text-xs text-secondary'>
                        {product.color}
                    </span>
                    <h3 className='text-lg font-medium text-primary mb-3 group-hover:text-brand'>
                        {product.name}
                    </h3>
                    <span className='inline-block pb-4 flex items-center'>
                        <span className='text-tertiery text-lg mr-2'>
                            {product.price}
                        </span>
                        <span className='text-sm text-secondary line-through'>
                            {product.origin}
                        </span>
                    </span>
                    <div className='flex gap-1'>
                        {product.colors.map(color => {
                            return (
                                <div className='p-1' key={color}>
                                    <div
                                        className='h-4 w-4 rounded-full'
                                        style={{
                                            backgroundColor: color,
                                        }}
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default ProductCard;
