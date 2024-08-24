export const styles = {
    base: 'flex items-center outline-none bg-transparent border-none rounded shadow font-medium',
    varaint: {
        primary:
            'text-primary-invert bg-brand-primary hover:bg-brand-primary-emphasize focus:bg-brand-primary-emphasize focus:ring-4 focus:ring-brand-solid/[.12]',
        secondary:
            'text-primary bg-primary border-primary hover:bg-primary-hover focus:bg-primary-hover focus:ring-4 focus:ring-brand-solid/[.12]',
        tertiary:
            'shadow-none text-brand hover:bg-primary-hover focus:bg-primary-hover focus:ring-4 focus:ring-brand-solid/[.12]',
        destructive:
            'text-primary-invert bg-error hover:bg-error-emphasize focus:bg-error-emphasize focus:ring-4 focus:ring-[#D92D20]/[.12]',
    },
    button: {
        size: {
            sm: 'px-3.5 py-2.5 text-sm gap-1',
            md: 'px-4 py-2.5 text-base gap-1.5',
            lg: 'px-5 py-3 text-base gap-1.5',
            xl: 'px-6 py-4 text-lg gap-2.5',
        },
    },
    iconButton: {
        size: {
            sm: 'p-2.5',
            md: 'p-3',
            lg: 'p-3.5',
            xl: 'p-4',
        },
        iconSize: {
            sm: 'w-5 h-5',
            md: 'w-5 h-5',
            lg: 'w-5 h-5',
            xl: 'w-6 h-6',
        },
    },
    link: {
        base: 'text-secondary hover:text-primary focus:text-primary focus:ring-4 focus:ring-brand-solid/[.12] font-medium rounded outline-none',
        size: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-base',
            xl: 'text-lg',
        },
        disabled:
            'text-disabled select-none pointer-event-none border-none hover:text-disabled focus:text-disabled focus:ring-0 focus:ring-transparent',
    },
    disabled:
        'bg-disabled text-disabled select-none pointer-event-none border-none hover:bg-disabled',
};
