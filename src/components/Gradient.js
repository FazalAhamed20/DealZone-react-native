
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

const Gradient = ({children}) => {
  return (
      <LinearGradient
           colors={['#FFFFFF','#FFE4B5','#FFE1E6','#FFFFFF']}
           start={{ x: 0.1, y: 0.2 }}
           end={{ x: 0.1, y: 1 }}
           style={styles.gradient}
         >
            {children}
               </LinearGradient>

  )
}
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
      }
})

export default Gradient