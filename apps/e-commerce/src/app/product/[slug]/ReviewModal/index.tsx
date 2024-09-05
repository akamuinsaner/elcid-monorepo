'use client';
import { Modal } from '@elcid-monorepo/widgets';
import { useState } from 'react';
import RatingSection from './RateingSection';

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
            <RatingSection rating={rating} setRating={setRating} />
        </Modal>
    );
};

export default ReviewModal;
