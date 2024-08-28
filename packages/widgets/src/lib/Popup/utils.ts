import { NTAPopup } from '.';

export const getPopupInsetData = (
    anchor: HTMLElement,
    placement: NTAPopup['placement'],
    popup: HTMLDivElement,
): {
    top: number | 'auto';
    right: number | 'auto';
    bottom: number | 'auto';
    left: number | 'auto';
} => {
    let offset = 8;
    if (!anchor) return null;
    if (!popup) return null;
    const position = anchor.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    const scrollElement =
        document.scrollingElement || document.documentElement || document.body;
    const scrollTop = scrollElement.scrollTop;
    if (placement === 'bottom-start') {
        return {
            top: position.y + position.height + offset + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.x,
        };
    }
    if (placement === 'bottom') {
        return {
            top: position.y + position.height + offset + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.width / 2 + position.x - popupRect.width / 2,
        };
    }
    if (placement === 'bottom-end') {
        return {
            top: position.y + position.height + offset + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.width + position.x - popupRect.width,
        };
    }
    if (placement === 'top-start') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.top + offset - scrollTop,
            left: position.x,
        };
    }
    if (placement === 'top') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.top + offset - scrollTop,
            left: position.width / 2 + position.x - popupRect.width / 2,
        };
    }
    if (placement === 'top-end') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.top + offset - scrollTop,
            left: position.width + position.x - popupRect.width,
        };
    }
    if (placement === 'left-start') {
        return {
            top: position.y + scrollTop,
            right: window.innerWidth - position.right + position.width + offset,
            bottom: 'auto',
            left: 'auto',
        };
    }
    if (placement === 'left') {
        return {
            top:
                position.y +
                position.height / 2 -
                popupRect.height / 2 +
                scrollTop,
            right: window.innerWidth - position.right + position.width + offset,
            bottom: 'auto',
            left: 'auto',
        };
    }
    if (placement === 'left-end') {
        return {
            top: 'auto',
            right: window.innerWidth - position.right + position.width + offset,
            bottom: window.innerHeight - position.bottom - scrollTop,
            left: 'auto',
        };
    }
    if (placement === 'right-start') {
        return {
            top: position.y + scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.x + position.width + offset,
        };
    }
    if (placement === 'right') {
        return {
            top:
                position.y +
                position.height / 2 -
                popupRect.height / 2 +
                scrollTop,
            right: 'auto',
            bottom: 'auto',
            left: position.x + position.width + offset,
        };
    }
    if (placement === 'right-end') {
        return {
            top: 'auto',
            right: 'auto',
            bottom: window.innerHeight - position.bottom - scrollTop,
            left: position.x + position.width + offset,
        };
    }
    return {
        top: position.y + position.height + offset + scrollTop,
        right: 'auto',
        bottom: 'auto',
        left: position.width / 2 + position.x - popupRect.width / 2,
    };
};
