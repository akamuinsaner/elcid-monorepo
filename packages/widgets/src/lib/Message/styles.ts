export const styles = {
    box: {
        base: `bg-main text-mainText opacity-0 -top-20  transition-all left-1/2  font-medium text-sm
                 rounded-full py-2 px-3 text-base fixed shadow-lg -translate-x-1/2 z-50 flex items-center
                 flex items-center gap-3 w-full max-w-[343px] tablet:max-w-[565px] tablet:w-auto p-1 pr-[10px]
                 `,
        success: 'text-success bg-success-subtle',
        info: 'text-secondary bg-neutral-subtle',
        warning: 'text-warning bg-warning-subtle',
        error: 'text-error-emphasize bg-error-subtle',
        show: 'opacity-100 top-10',
    },
    badge: {
        base: 'px-[10px] py-0.5 bg-primary rounded-full shadow',
    },
};
