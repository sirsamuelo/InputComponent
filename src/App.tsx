import React from 'react';
import './App.css'
import { TextFieldBase } from './components/TextFieldBase';
import { SizeType, VariantType, WidthType } from './enums';
import { Search } from 'lucide-react';
import { RadioButtons } from './components/RadioButtons';
import { Sizes } from './components/Sizes';
import { WidthChanger } from './components/WidthChanger';

function App() {
  const [value, setValue] = React.useState('');
  const [variant, setVariant] = React.useState<VariantType>(VariantType.NONE);
  const [size, setSize] = React.useState<SizeType>(SizeType.MEDIUM);
  const [width, setWidth] = React.useState<WidthType>(WidthType.FLUID);

  const _handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const _handleSizeChange = (size: SizeType) => {
    setSize(size);
  }

  const _handleVariantChange = (newVariant: VariantType) => {
    setVariant(newVariant);
  };

  const _handleWidthChange = (width: WidthType) => {
    setWidth(width);
  }

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <RadioButtons variant={variant} handleVariantChange={_handleVariantChange} />
      <Sizes selectedSize={size} handleSizeChange={_handleSizeChange} />
      <WidthChanger handleWidthChange={_handleWidthChange} selectedWidth={width} />

      <TextFieldBase
        size={size}
        placeholder="Enter your email"
        name="email"
        label="Email"
        type="email"
        widthType={width}
        variantType={variant}
        onChangeValue={_handleValueChange}
        renderStartIcon={() => <span><Search /></span>}
        onFocus={() => console.log('Focused!')}
        onBlur={() => console.log('Blurred!')}
        isOptional={true}
      />
    </div>
  )
}

export default App;
