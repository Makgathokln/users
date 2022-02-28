import React from 'react'
import { StyleSheet,View,Text,Image,SafeAreaView, ScrollView} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default function About(){
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={{backgroundColor:'#fff',
        flex:1,flexDirection:'row', width:800}}>
            <View style={{backgroundColor:'#ffe6cc',flex:1}}>
        
         <Image
            style={{width:150,height:350,width: 400,borderColor:'white'}}
            source={require('../images/pic.jpg')}/>
            <Text style={{fontWeight:'bold',paddingTop:1,fontSize:40,lineHeight:84,marginLeft:10,color:'gray'}}>
              Leah Makgatho 
            </Text>
            <View style={{borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3,color:'gray'}}>Contacts</Text>

            </View>
            <Text style={{fontSize:20}}>Phone Number : 079 247 6117</Text>
            {/* <Icon   name="Location" size={30} color='black'/> */}
            <Text style={{fontSize:20}}>Address : 141 Zone F Lebowakgomo</Text>
            <Text style={{fontSize:20}}>Email : Makgathokln@gmail.com</Text>
            <Text style={{fontSize:20}}>Facebook : Leah Makgatho</Text>
            <View style={{borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3, color:'gray'}}>Skills </Text>
       
            </View>
            <Text style={{fontSize:20,paddingTop:3}}>
            Html</Text>
            <Text style={{fontSize:20,paddingTop:3}}>
            CSS</Text>
            <Text style={{fontSize:20,paddingTop:3}}>
            MVC Core C#</Text>
            <Text style={{fontSize:20,paddingTop:3}}>
            JavaScript</Text>
            <Text style={{fontSize:20,paddingTop:3}}>
           React Native</Text>
        </View>
           
            
        <View style={{backgroundColor:'white',flex:1,height:600}}>
        <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3,color:'gray'}}>About Me </Text>
            </View>
            
            <Text style ={{fontSize:20}}>
            A forward thinking developer offering more on building, integrating, testing and supporting
                            android applications for mobile and tablet android platforms. I am seeking a position
                            with a top technology firm. I am open to learning and equipping myself with the necessary skills.
                             
            </Text>

       
            <View style={{borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3, color:'gray'}}>Qualifications </Text>
            </View>
           
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3, color:'gray'}}>
            National senior certificate</Text>
            <Text style={{fontSize:20}}>
            Derek Kobe Senior Secondary School
              
            </Text>
            <Text style={{fontSize:20}}>2005-2010</Text>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3,color:'gray'}}>
            Higher National Diploma in Information Technology</Text>
            <Text style={{fontSize:20}}>
            Cti Education Group
             
            </Text>
            <Text style={{fontSize:20}}>2011-2012</Text>
            <View style={{borderRadius:7,
        marginVertical:10}}>
        <Text style={{
        fontSize:30,paddingTop:3, color:'gray',fontWeight:'bold'}}>Languages </Text>
            </View>
            <Text style={{fontSize:20,paddingTop:3}}>
            Sepedi</Text>
            <Text style={{fontSize:20,paddingTop:3}}>
            English</Text>

            
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        marginTop: 50,
        margin: 220
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
      },
})