import * as React from 'react';
import { TextInput } from 'react-native-paper';

const OutlinedInputPassword = (props) => {
  return (
    <TextInput
        mode="outlined"
        right={props.right}
        left={<TextInput.Icon color="#70758b" name='lock' />}
        label={props.label}
        outlineColor="transparent"
        secureTextEntry={props.secureTextEntry}
        multiline={false}
        keyboardType="default"
        value={props.value}
        onChangeText={(value) => props.onChangeText(value)}
        style={[props.style]}
        underlineColorAndroid='transparent'
        underlineColor="transparent"
        autoCorrect={false}
        autoCapitalize='none'
        theme={props.theme}
    />
  );
};

export default OutlinedInputPassword;