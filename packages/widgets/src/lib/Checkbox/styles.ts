export const styles = {
    wrapper: {
        base: 'w-6 h-6 inline-block p-1 relative group',
    },
    input: {
        base: 'absolute inset-1 opacity-0 cursor-pointer z-[1]',
    },
    inner: {
        base: 'flex items-center justify-center w-full h-full border border-solid border-primary rounded group-hover:border-brand-solid bg-inherit transition-[background-color]',
        focus: 'border-brand-solid ring-4 ring-brand-solid/[.12]',
        checked: 'bg-brand-primary',
    },
    mark: {
        base: 'w-full h-full text-white hidden',
        show: 'block',
    },
};
