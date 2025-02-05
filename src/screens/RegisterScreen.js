import { View, Text,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Gradient from '../components/Gradient'
import AuthForm from '../components/AuthForm'
import LottieView from 'lottie-react-native';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = ({navigation}) => {
  return (
   <Gradient>
    <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
        <View style={{flex:2}}>
            <View style={{justifyContent:'center',alignItems:"center",flex:1}}>
            <LottieView style={{width:"50%",height:"65%"}} source={{uri:"https://lottie.host/08418f2d-3f4c-4d32-851b-170234d7e500/HHwKUDUX3g.json"}} autoPlay  />
                <Text style={{fontSize:30,fontWeight:"bold",marginBottom:25}}>Hello There!</Text>
                <Text style={{fontSize:20,fontWeight:'semibold',marginBottom:5}}>Join Us to Unlock a World</Text>
                <Text style={{fontSize:20,fontWeight:'semibold',marginBottom:5}}>of Shopping Delights!</Text>

            </View>

        </View>
        <View style={{flex:2,alignItems:'center',margin:10}}>
            <RegisterForm navigation={navigation}/>

        </View>

    </KeyboardAvoidingView>
   </Gradient>
  )
}

export default RegisterScreen