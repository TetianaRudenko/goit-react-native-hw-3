import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View,} from 'react-native';
import Avatar from "../Components/FormComponents/Avatar";
import SubmitBtn from "../Components/ButtonSubmit";


const RegistrationForm= () => {
  
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return ( 
    <View style={ styles.container }>
      <Avatar />
      <Text style={styles.title}>Реєстрація</Text>
          
      <TextInput
        placeholder="Логін"
        onChangeText={(newLogin) => setLogin(newLogin)}
        defaultValue={login}
        style={loginFocus ? styles.inputOnFocus : styles.input}
        onFocus={() => setLoginFocus(true)}
        onBlur={() => setLoginFocus(false)}
      />
      <TextInput
        placeholder="Адреса електронної пошти"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
        style={emailFocus ? styles.inputOnFocus : styles.input}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
      />
      <TextInput
        placeholder="Пароль"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
        style={passwordFocus ? [styles.inputOnFocus, { marginBottom: 43,}] : [styles.input, {marginBottom: 43},]}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        />
        
      <SubmitBtn title="Зареєстуватися"/>
      <Text style={styles.text}>Вже є акаунт? Увійти </Text>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    height: '70%',
    
    paddingHorizontal: 16,
    paddingBottom: 66,
    
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,

    textAlign: 'center',
    color: "#212121",
    fontWeight: 'bold',
    fontSize: 30,
    //fontFamily: "Roboto-Bold",
    letterSpacing: 0.3,
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  inputOnFocus: {
    height: 50,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  text: {
    marginTop: 16,
    
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});


export default RegistrationForm; 



