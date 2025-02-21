import { TSize } from "./types";

export function mapSizeToLabelSize(size: TSize) {
    switch (size) {
        case 'extra_small':
        case 'small':
            return 's';
        case 'large':
            return 'm';
        case 'medium':
        default:
            return 'm';
    }
}