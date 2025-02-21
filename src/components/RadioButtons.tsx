import { VariantType } from "../enums"

interface Props {
    variant: VariantType;
    handleVariantChange: (helperType: VariantType) => void;
}

export const RadioButtons: React.FC<Props> = ({ handleVariantChange, variant }) => {
    return (
        <>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexDirection: "column", alignItems: "center" }}>
                <h1>Variants</h1>
                <div className="flex-col">
                    <div className="radio-wrapper">
                        <label>
                            <input
                                type="radio"
                                name="variant"
                                value={VariantType.NONE}
                                checked={variant === VariantType.NONE}
                                onChange={() => handleVariantChange(VariantType.NONE)}
                            />
                            None
                        </label>
                    </div>
                    <div className="radio-wrapper success">
                        <label>
                            <input
                                type="radio"
                                name="variant"
                                value={VariantType.SUCCESS}
                                checked={variant === VariantType.SUCCESS}
                                onChange={() => handleVariantChange(VariantType.SUCCESS)}
                            />
                            Success
                        </label>
                    </div>
                    <div className="radio-wrapper warning">
                        <label>
                            <input
                                type="radio"
                                name="variant"
                                value={VariantType.WARNING}
                                checked={variant === VariantType.WARNING}
                                onChange={() => handleVariantChange(VariantType.WARNING)}
                            />
                            Warning
                        </label>
                    </div>
                    <div className="radio-wrapper danger">
                        <label>
                            <input
                                type="radio"
                                name="variant"
                                value={VariantType.DANGER}
                                checked={variant === VariantType.DANGER}
                                onChange={() => handleVariantChange(VariantType.DANGER)}
                            />
                            Danger
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}