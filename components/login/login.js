import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/style.js';
import { Animated, Text, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import FormField from '../../forms/FormField';
import { formData } from '../../forms/formData';
import {useForm} from "react-hook-form";
import Form from 'react-native-form'

export default function Login(props) {
    const {backImage, fadeAnim} = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState('eye');
    const [showPass, setShowPass] = useState(true);
  
    const changeIcon = () => {
      if(icon === 'eye') {
        setIcon('eye-off');
        setShowPass(false);
      }
      else {
        setIcon('eye');
        setShowPass(true);
      }
    }

    const onSubmit = (data) =>
    { console.log(JSON.stringify(data));
};

    // const [formValues, handleFormValueChange, setFormValues] = formData({
    //   username: '',
    //   password: '',
    // })


  
    useEffect(() => {
      register("username", { required: true });
      register("password");
    }, []);

    const onError = (errors, e) => console.log(errors, e);

    const { register
      , handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
          username: '',
          password: ''
        },
        username: '',
        password: '',
      });

    return (
      backImage ?
      <Animated.View style={{opacity: fadeAnim}}>
          <Image style={styles.tinyLogo} source={require("../../images/logo1.png")} />
          <Text style={styles.titleText}>Welcome!</Text>
          
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormField
            label={"Username"}
            name='username'
            id='username'
            style={styles.texts}
            register={register}
            onChange={e => setValue("username", e.target.value)}
            aria-invalid={errors.username ? "true" : "false"}
            autoCapitalize='none'
            left={<TextInput.Icon color="#70758b" name='account' />}
            mode='outlined'
            theme={{ colors: { underlineColor: "transparent", primary: "#1d0e0b", borderColor: "#f5f5f5" } }}
          />

          <FormField
            label={'Password'}
            name='password'
            id='password'
            autoCapitalize='none'
            mode='outlined'
            left={<TextInput.Icon color="#70758b" name='lock' />}
            style={styles.texts}
            register={register}
            onChange={e => setValue("password", e.target.value)}
            aria-invalid={errors.password ? "true" : "false"}
            secureTextEntry={showPass}
            right={<TextInput.Icon color="#70758b" onPress={() => changeIcon(icon)} name={icon} />}
            theme={{ colors: { underlineColor: "transparent", primary: "#1d0e0b", borderColor: "#f5f5f5" } }}
          />

          <Button compact={true} mode="contained" style={styles.loginButton} type="submit">login</Button>
          </Form>
      </Animated.View>
      :
      ""
    )
}