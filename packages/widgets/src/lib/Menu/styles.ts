export const styles = {
    menu: {
        base: 'flex flex-col gap-2',
    },
    item: {
        base: 'flex items.center p-2 gap-2 text-primary font-medium text-sm hover:bg-tertiary focus:rounded focus:ring-1 focus:ring-brand-subtle cursor-pointer',
        selected: 'bg-neutral-subtle rounded',
        icon: 'w-5 h-5',
        tailIcon: 'hidden',
        disabled: 'text-disabled select-none pointer-events-none',
    },
};
