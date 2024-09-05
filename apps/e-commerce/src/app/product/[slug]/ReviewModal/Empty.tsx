import { RiChatSmile3Line } from '@remixicon/react';

const Empty = () => {
    return (
        <div className='absolute top-[412px] w-full left-0 h-[176px] tablet:h-auto tablet:bottom-0 flex flex-col items-center justify-center gap-5 text-center desktop:inset-0 desktop:left-[414px] desktop:h-full desktop:w-auto transition-all'>
            <div className='w-12 h-12 rounded-full shadow flex items-center justify-center'>
                <RiChatSmile3Line className='w-6 h-6 text-brand' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-xl text-primary font-medium'>
                    No reviews yet!
                </div>
                <div className='text-base text-primary'>
                    Be the first to review this product
                </div>
            </div>
        </div>
    );
};

export default Empty;
