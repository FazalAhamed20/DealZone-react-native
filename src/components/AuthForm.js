import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { signInValidation} from '../utils/validation';

const AuthForm = ({navigation}) => {

  const handleAuth=(values)=>{
    console.log(values);
    

  }
  return (
    <View style={{width:"100%",padding:25}}>
      <Formik 
      initialValues={{email:'',password:''}}
      validationSchema={signInValidation}
      onSubmit={handleAuth}
      >
         {({ handleChange, handleSubmit,handleBlur, values, touched, errors }) => (
          <View style={{gap:20}}>
        <View>
        <TextInput 
        style={styles.input} 
        placeholder='Enter Email'
        onBlur={handleBlur('email')}
        onChangeText={handleChange('email')}
        value={values.email}
        />

{touched.email && errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}

        </View>
        <View>
        <TextInput style={styles.input}
         placeholder='Enter Password'
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         secureTextEntry
         value={values.password}
         />

        {touched.password && errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}

        </View>
    
     
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{alignSelf:'center',fontSize:15,fontWeight:'600',color:"white"}}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
      <Text style={{alignSelf:"center",fontSize:15,fontWeight:"600"}}>Not a member? <Text style={{color:"#00BFFF"}}>Register Now</Text>
        </Text>
        </TouchableOpacity>
        </View>
         )}
        </Formik>
    </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  input:{
    padding:20,
    backgroundColor:"white",
    borderRadius:15
    
  },
  button:{
   
      padding:20,
      backgroundColor:"#FE7C31",
      borderRadius:10,
      marginVertical:20


  },
  errorText: {
    color: 'red',
    margin: 5,
  }

})