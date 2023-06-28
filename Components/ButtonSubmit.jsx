import { Text, StyleSheet, Pressable } from 'react-native';

const SubmitBtn = ({ title }) => {
  return (
    <Pressable style={styled.button} >
      <Text style={styled.text}>{title}</Text>
    </Pressable>
  );
}

const styled = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',   
  },  
  text: {
    fontSize: 16,
    lineHeight: 19,   
    color: 'white',
  },
});
export default SubmitBtn;