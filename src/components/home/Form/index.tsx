import React from 'react';
import Label from './Label';
import ThemeSelect from './ThemeSelect';
import FontFamilyInput from './FontFamilyInput';
import FontSizeInput from './FontSizeInput';
import TextInput from './TextInput';
import ImageSrcInput from './ImageSrcInput';
import ImageSizeInput from './ImageSizeInput';

const Form: React.VFC = () => (
  <form className="w-full flex flex-col gap-4">
    <Label text="Theme">
      <ThemeSelect />
    </Label>

    <Label text="Font Family">
      <FontFamilyInput />
    </Label>

    <Label text="Font Size">
      <FontSizeInput />
    </Label>

    <Label text="Markdown Text">
      <TextInput />
    </Label>

    <Label text="Image URLs">
      <ImageSrcInput />
    </Label>

    <Label text="Image Size">
      <ImageSizeInput />
    </Label>
  </form>
);

export default Form;
