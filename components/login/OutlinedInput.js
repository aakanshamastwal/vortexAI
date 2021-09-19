import * as React from 'react';
import { TextInput } from 'react-native-paper';

const OutlinedInput = (props) => {
  return (
    <TextInput
      mode={props.mode}
      left={props.left}
      label={props.label}
      outlineColor="transparent"
      style={props.style}
      underlineColorAndroid='transparent'
      underlineColor="transparent"
      autoCorrect={false}
      autoCapitalize='none'
      theme={props.theme}
    />
  );
};

export default OutlinedInput;