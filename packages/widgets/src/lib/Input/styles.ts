export const styles = {
    wrapper: {
        base: 'flex items-center px-3.5 py-2.5 border-primary border border-solid rounded gap-2 bg-primary-hover w-full hover:border-brand-solid cursor-pointer',
        focus: 'border-brand-solid ring-4 ring-brand-solid/[.12] text-primary',
        error: 'border-error hover:border-error',
        'error&focus': 'border-error ring-4 ring-error/[.12]',
        disabled:
            'border-disabled text-disabled select-none pointer-event-none cursor-auto hover:border-disabled',
    },
    input: {
        base: 'outline-none border-none p-0 text-inherit placeholder:text-tertiary bg-inherit text-sm w-full h-full ',
    },
};
