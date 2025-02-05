import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Feather from '@expo/vector-icons/Feather';

const Search = () => {
  return (
    <View style={{flexDirection:"row",backgroundColor:'#D3D3D3',borderRadius:25,marginHorizontal:15,padding:12,gap:10}}>
    
                <Feather name="search" size={24} color="black" />

        <TextInput style={{flex:1}}placeholder='Search...'/>

      

    </View>
  )
}

export default Search

const styles = StyleSheet.create({})