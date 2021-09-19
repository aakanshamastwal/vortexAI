import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

const FormField = (props) => {
    console.log(props)
    return (
        <View>
            <TextInput
            mode={props.mode}
            left={props.left}
            id={props.id}
            name={props.name}
            label={props.label}
            outlineColor="transparent"
            register={props.register(props.name, {required: true})}
            onChange={(value) => props.onChange(value)}
            secureTextEntry={props.secureTextEntry}
            multiline={false}
            keyboardType="default"
            style={[props.style]}
            underlineColorAndroid='transparent'
            underlineColor="transparent"
            autoCorrect={false}
            autoCapitalize='none'
            theme={props.theme}
            />
        </View>
    )
}
    
export default FormField;
    