export const styles = {
    dropbox: {
        base: 'absolute transition-transform shadow-lg z-20 overflow-hidden bg-primary rounded-lg p-2',
        placement: {
            bottom: 'origin-top scale-y-0',
            top: 'origin-bottom scale-y-0',
            left: 'origin-right scale-x-0',
            right: 'origin-left scale-x-0',
        },
        active: {
            topBottom: 'scale-y-100 overflow-visible active',
            leftRight: 'scale-x-100 overflow-visible active',
        },
    },
};
