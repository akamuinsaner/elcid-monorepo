import { Button, Rating } from '@elcid-monorepo/widgets';

const RATINGS = [
    { name: 'Excellent', score: 4, bgColor: 'bg-green-600' },
    { name: 'Good', score: 3, bgColor: 'bg-green-500' },
    { name: 'Average', score: 2, bgColor: 'bg-yellow-300' },
    { name: 'Below Average', score: 1, bgColor: 'bg-yellow-500' },
    { name: 'Poor', score: 0, bgColor: 'bg-red-600' },
];

const RatingSection = ({
    rating,
    setRating,
}: {
    rating: number;
    setRating: (rating: number) => void;
}) => {
    return (
        <div className='absolute top-0 left-0 w-full px-3 flex flex-col gap-6 tablet:px-8 desktop:w-[382px] transition-all'>
            <div>
                <h2 className='text-xl text-primary font-semibold mb-2'>
                    Overall Rating
                </h2>
                <div className='flex items-center gap-2'>
                    <span className='text-base font-semibold text-primary'>
                        {rating}
                    </span>
                    <Rating
                        value={rating}
                        onChange={setRating}
                        precision={0.5}
                    />
                </div>
                <ul className='flex flex-col py-4 gap-4'>
                    {RATINGS.map(item => {
                        return (
                            <li
                                className='flex items-center gap-2'
                                key={item.name}
                            >
                                <div className='whitespace-nowrap shrink-0 font-medium text-base text-disabled	min-w-[120px]'>
                                    {item.name}
                                </div>
                                <div className='flex-1 h-2 rounded-full bg-secondary overflow-hidden'>
                                    <div
                                        className={`h-full w-0 ${item.bgColor}`}
                                    ></div>
                                </div>
                                <div className='w-[42px] shrink-0 text-right text-secondary text-base'>
                                    0%
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Button
                type='button'
                name='Write a review'
                aria-label='Write a review'
                variant='secondary'
                size='lg'
                className='w-full tablet:w-[152px] block mx-auto'
            >
                Write a review
            </Button>
        </div>
    );
};

export default RatingSection;
