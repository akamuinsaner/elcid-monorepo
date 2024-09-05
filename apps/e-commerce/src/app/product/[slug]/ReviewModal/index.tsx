'use client';
import { Modal } from '@elcid-monorepo/widgets';
import { useState } from 'react';
import RatingSection from './RateingSection';
import Empty from './Empty';

const ReviewModal = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
    const [rating, setRating] = useState<number>(0);

    return (
        <Modal
            open={open}
            onClose={onClose}
            className='h-[716px] tablet:h-[864px] tablet:w-[522px] desktop:w-[] desktop:h-[624px] desktop:w-[1008px] p-0 pt-[72px]'
        >
            <div className='flex flex-col desktop:flex-row gap-10 desktop:gap-8 h-full relative'>
                <RatingSection rating={rating} setRating={setRating} />
                <Empty />
            </div>
        </Modal>
    );
};

export default ReviewModal;
