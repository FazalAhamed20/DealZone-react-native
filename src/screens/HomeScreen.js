import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import img from '../../assets/support.png'
import Gradient from '../components/Gradient';


const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1}} >
      <Gradient>
        <View style={{width:"100%",height:"60%",alignItems:'center'}}>
        {/* <LottieView style={{width:"100%",height:"100%"}} source={{uri:"https://lottie.host/ae74045b-01ef-4d84-a64a-c3dd1a1771af/gnun6yk7DJ.json"}} autoPlay loop /> */}
        <Image style={{width:"100%",height:"100%",padding:60}}  source={img}/>

        </View>
        <View style={{flex:1,alignItems:"center"}}>

       <View style={{marginVertical:30}}>
       <Text style={[styles.content,styles.text]}>Discover Your </Text>
       <Text  style={styles.content}>Best Products Here</Text>
       <View style={{width:'70%',margin:10}}>
       <Text style={{alignSelf:"center",color:"gray",marginBottom:5}}>Explore all the most exciting best products</Text>
       <Text style={{alignSelf:"center",color:"gray"}}>based on your intrest and needs</Text>
      
       </View>
       </View>
     
        </View>
        <View style={{alignItems:'flex-start',flex:1,alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity style={{backgroundColor:"white",width:"45%",height:"30%",borderRadius:10,flexDirection:'row',borderWidth:2,borderColor:"black"}} onPress={()=>navigation.navigate('Register')} >
          <View style={{flex:2,justifyContent:"center",margin:10}}>
          <Text style={{alignSelf:'flex-end',fontSize:17,fontWeight:"bold"}}>Register</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',margin:10,alignItems:"flex-start"}}>
          <FontAwesome  name="long-arrow-right" size={34} color="black" />
          </View>
        </TouchableOpacity>
       
      
            
       </View>
     

       </Gradient>
    </View>
  )
}

const styles=StyleSheet.create({
      content:{
        fontSize:30,
        fontWeight:"bold"
      },
      text:{
        alignSelf:'center'
      }
})

export default HomeScreen