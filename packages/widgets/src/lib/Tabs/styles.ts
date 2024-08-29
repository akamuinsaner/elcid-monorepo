export const styles = {
    wrapper: {
        base: 'inline-block relative',
        after: 'after:content-[""] after:absolute after:inset-y-0 after:right-0 after:select-none after:pointer-events-none after:w-[18px] after:bg-gradient-to-r after:from-[#fff]/80 after:to-[#D1D5DB]/80',
        before: 'before:content-[""] before:absolute before:inset-y-0 before:left-0 before:select-none before:pointer-events-none before:w-[18px] before:bg-gradient-to-l before:from-[#fff]/80 before:to-[#D1D5DB]/80',
    },
    tabs: {
        base: 'w-full flex items-center border-b border-bottom border-primary scroll-smooth overflow-x-auto scrollbar-none relative',
    },
    tab: {
        base: 'inline-flex items-center justify-center px-3.5 py-2.5 font-medium text-base text-secondary cursor-pointer',
        active: 'text-brand border-b border-solid border-brand-solid',
    },
};
