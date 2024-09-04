import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from '@elcid-monorepo/widgets';

const ReviewModal = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <ModalHeader>qwew</ModalHeader>
            <ModalBody>qwewqewqewqeqwe</ModalBody>
            <ModalFooter>fwfwefwerewrewrewr</ModalFooter>
        </Modal>
    );
};

export default ReviewModal;
