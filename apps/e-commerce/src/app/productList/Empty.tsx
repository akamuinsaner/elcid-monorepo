import { Button } from '@elcid-monorepo/widgets';
import { RiTShirt2Line } from '@remixicon/react';

const Empty = ({ resetFilterParams }: { resetFilterParams: () => void }) => {
    return (
        <div className='flex-1 flex flex-col items-center justify-center p-6'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center shadow bg-primary text-brand mb-5'>
                <RiTShirt2Line />
            </div>
            <h3 className='font-medium text-xl text-primary mb-2'>
                Nothing found just yet
            </h3>
            <p className='text-center text-base text-primary mb-5'>
                Adjust your filters a bit, and let's see what we can find!
            </p>
            <Button
                size='md'
                onClick={resetFilterParams}
                name='reset filter'
                aria-label='reset-filter'
            >
                Reset filters
            </Button>
        </div>
    );
};

export default Empty;
