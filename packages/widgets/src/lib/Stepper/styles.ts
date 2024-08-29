export const styles = {
    wrapper: {
        base: 'inline-flex items-center rounded-md border border-solid border-primary bg-primary-hover p-0.5 px-1 gap-3 text-secondary hover:border-brand-solid',
        focus: 'border-brand-solid ring-4 ring-brand-solid/[.12] text-primary',
        error: 'border-error hover:border-error',
        'error&focus': 'border-error ring-4 ring-error/[.12]',
        disabled:
            'border-disabled text-disabled select-none pointer-events-none cursor-auto hover:border-disabled',
    },
    input: {
        base: 'flex-1 w-0 border-none outline-none bg-inherit h-8 text-center px-3 py-1.5 font-medium text-sm text-inherit [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
    },
    icon: {
        base: 'w-4 h-4 shrink-0 text-inherit cursor-pointer focus:ring-4 focus:ring-brand-solid/[.12]',
        disabled: 'text-disabled select-none pointer-events-none',
    },
};
