import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { registerValidation } from '../utils/validation';

const RegisterForm = ({navigation}) => {


  const handleRegistration=(values)=>{
    console.log(values);
    

  }
   
    
  return (
    <View style={{width:"100%",padding:25}}>
        <Formik 
            initialValues={{name:'',email:'',password:''}}
            validationSchema={registerValidation}
            onSubmit={handleRegistration}
            >
               {({ handleChange, handleSubmit,handleBlur, values, touched, errors }) => (
                 <View style={{gap:20}}>
                  <View>
         <TextInput style={styles.input} 
         onBlur={handleBlur('name')}
         onChangeText={handleChange('name')}
         value={values.name}
         placeholder='Enter Name'
         />
{touched.name && errors.name ? (
                <Text style={styles.errorText}>{errors.name}</Text>
              ) : null}
                  </View>
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
        <Text style={{alignSelf:'center',fontSize:15,fontWeight:'600',color:"white"}}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
      <Text style={{alignSelf:"center",fontSize:15,fontWeight:"600"}}>Already a member? <Text style={{color:"#00BFFF"}}>Sign In</Text>
        </Text>
        </TouchableOpacity>
        </View>
               )}
         </Formik>
    </View>
  )
}

export default RegisterForm

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