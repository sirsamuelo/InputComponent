import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { colors, fontSizes, labelTokens, radius, spacing } from './tokens.css';
import { VariantType } from '../enums';

export const textFieldOuterWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
    fontFamily: 'Poppins, '
});

export const labelRecipe = recipe({
    base: {
        fontFamily: 'Poppins, serif',
        fontSize: '14px',
        fontWeight: 500,
        color: colors.content.onNeutralXxHigh,
    },
    variants: {
        size: {
            s: {
                fontSize: labelTokens.s.fontSize,
                fontWeight: labelTokens.s.fontWeight.toString(),
                lineHeight: labelTokens.s.lineHeight,
                letterSpacing: labelTokens.s.letterSpacing
            },
            m: {
                fontSize: labelTokens.m.fontSize,
                fontWeight: labelTokens.m.fontWeight.toString(),
                lineHeight: labelTokens.m.lineHeight,
                letterSpacing: labelTokens.m.letterSpacing
            },
        }
    }
})

export const optionalClasses = style({
    color: '#9E9E9E',
    fontWeight: 400,
})

export const textFieldWrapperRecipe = recipe({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: radius.input,
        backgroundColor: colors.surface.xLow,
        border: `1px solid ${colors.surface.gray500}`,
        fontFamily: '"Poppins", serif',
        overflow: 'hidden',
        marginBottom: '12px',

        selectors: {
            '&:focus-within': {
                borderColor: colors.state.defaultFocus,
                boxShadow: `0 0 0 2px ${colors.state.defaultFocus}`,
            },
        },
    },
    variants: {
        size: {
            extra_small: {
                fontSize: fontSizes.xs,
                padding: spacing.xs,
            },
            small: {
                fontSize: fontSizes.s,
                padding: spacing.s,
            },
            medium: {
                fontSize: fontSizes.m,
                padding: spacing.m,
            },
            large: {
                fontSize: fontSizes.l,
                padding: spacing.l
            },
        },
        widthType: {
            fluid: {
                width: '100%',
            },
            fixed: {
                width: '200px',
            },
        },
        disabled: {
            true: {
                opacity: 0.5,
                cursor: 'not-allowed',
            },
            false: {},
        },
        variantType: {
            NONE: {},
            DANGER: {
                borderColor: colors.surface.danger,
                backgroundColor: colors.surface.dangerVariant,
            },
            WARNING: {
                borderColor: colors.surface.warning,
                backgroundColor: colors.surface.warningVariant,
            },
            SUCCESS: {
                borderColor: colors.surface.success,
                backgroundColor: colors.content.success,
            },
        },
    },
    defaultVariants: {
        widthType: 'fluid',
        disabled: false,
        variantType: VariantType.NONE,
    },
});

export const textFieldInputRecipe = recipe({
    base: {
        flex: 1,
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        fontFamily: '"Poppins", serif',
        color: colors.content.onNeutralXxHigh,

        selectors: {
            '&::placeholder': {
                color: colors.surface.gray500,
            },
            '&:focus': {
                outline: 'none',
            },
        },
    },
    variants: {
        size: {
            extra_small: {
                fontSize: spacing.xs,
            },
            small: {
                fontSize: spacing.s,
            },
            medium: {
                fontSize: spacing.m,
            },
            large: {
                fontSize: spacing.l,
            },
        },
        disabled: {
            true: {
                pointerEvents: 'none',
            },
            false: {},
        },
    },
    defaultVariants: {
        disabled: false,
    },
});

export const textFieldIconStart = style({
    marginRight: spacing.xs,
});

export const textFieldIconEnd = style({
    marginLeft: spacing.xs,
});
