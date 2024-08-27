export const styles = {
    wrapper: {
        base: 'inline-flex gap-1 cursor-pointer focus:ring-2 focus:ring-brand-solid/[.12] rounded-sm',
    },
    iconWrapper: {
        base: 'flex items-center w-5 h-5 relative',
        left: 'w-1/2 h-full inline-block absolute left-0 inset-y-0 overflow-hidden',
        right: 'w-1/2 h-full inline-block absolute right-0 inset-y-0 overflow-hidden',
    },
    icon: {
        base: 'h-5 w-5 absolute inset-y-0 text-gray-200',
        left: 'left-0',
        right: 'right-0',
        active: 'text-warning',
        hover: 'stroke-indigo-200',
    },
};
