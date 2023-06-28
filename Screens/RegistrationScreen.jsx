import { StatusBar } from 'expo-status-bar';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import imageBg from "../assets/imageBg.png";
import RegistrationForm from "../Components/RegistrationForm";

const RegistrationScreen = () => {
  
  return ( 
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={imageBg}
          resizeMode="cover"
          style={styles.image}
        >

          <RegistrationForm />

          <StatusBar style="auto" />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    //justifyContent: 'center',
    //position: "absolute",
    //top: 0,
    //left: 0,
    //width: Dimensions.get("window").width,
   // height: Dimensions.get("window").height,
  },
});


export default RegistrationScreen; 



