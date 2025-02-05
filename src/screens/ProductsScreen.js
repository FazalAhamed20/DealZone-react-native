import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Banner from '../components/Banner'

const ProductsScreen = () => {
  return (
    <SafeAreaView style={{flex:1,borderWidth:2,borderColor:"red"}}>
      <View style={{flex:1,borderWidth:2,borderColor:"green",justifyContent:'center'}}>
      <Search/>

      </View>
      <View style={{flex:2,borderWidth:2,borderColor:"orange"}}>
       <Banner/>
      </View>
      <View style={{flex:2,borderWidth:2,borderColor:"blue"}}>
        <Text>Categories</Text>
      </View>
      <View style={{flex:4,borderWidth:2,borderColor:"yellow"}}>
        <Text>Products</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProductsScreen