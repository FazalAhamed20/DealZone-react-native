import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Gradient from '../components/Gradient'
import AuthForm from '../components/AuthForm'
import LottieView from 'lottie-react-native';

const LoginScreen = ({navigation}) => {
  return (
   <Gradient>
    <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
        <View style={{flex:2}}>
            <View style={{justifyContent:'center',alignItems:"center",flex:1}}>
            <LottieView style={{width:"100%",height:"80%"}} source={{uri:"https://lottie.host/8b96b5f1-d1d9-470c-8ec0-ae3404c88eb0/cYr3b6uVkU.json"}} autoPlay  />
                <Text style={{fontSize:30,fontWeight:"bold",marginBottom:25}}>Hello Again!</Text>
                <Text style={{fontSize:20,fontWeight:'semibold',marginBottom:5}}>Welcome back you've</Text>
                <Text style={{fontSize:20,fontWeight:'semibold',marginBottom:5}}>been missed</Text>

            </View>

        </View>
        <View style={{flex:2,alignItems:'center',margin:10}}>
            <AuthForm navigation={navigation}/>

        </View>

    </KeyboardAvoidingView>
   </Gradient>
  )
}

export default LoginScreen