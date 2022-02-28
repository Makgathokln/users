import React from 'react';
import { StyleSheet,Button,TextInput,View,Text } from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup'

const reviewform = ({addReview}) => {
    const ReviewSchem = yup.object({
        name:yup.string().required().min(3),
        location:yup.string().required().min(3),
        gender:yup.string().required().test('is-num-1-100','gender must be Female/Male',
        (val)=>{
            return val == 'Female' || val == 'Male';
        }
        ),
        surname:yup.string().required().min(4),
        Age:yup.string().required().test('is-num-1-100','Age must be number 1- 100',
        (val)=>{
            return parseInt(val) < 101 && parseInt(val) > 0;
        }
        )
    })
    
    return (
        <>
           <View>
               <Formik 
               initialValues={{name:'',surname:'',Age:'',location:'',gender:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                addReview(values)
               }}
               >

                   {(props)=>(
                       <View style={{marginTop:50}}>
                                                  <Text h2 >Add user below</Text>

                           <TextInput 
                           style={styles.input}
                           placeholder='User Name'
                           onChangeText={props.handleChange('name')}
                           value={props.values.name}
                           onBlur={props.handleBlur('name')}


                           />
                           <Text>{props.touched.name && props.errors.name}</Text>
                            <TextInput 
                           style={styles.input}
                           placeholder='User Surname'
                           onChangeText={props.handleChange('surname')}
                           value={props.values.surname}
                           onBlur={props.handleBlur('surname')}
                           />
                           <Text>{props.touched.surname && props.errors.surname}</Text>
                            <TextInput 
                           style={styles.input}
                           placeholder='User Age'
                           onChangeText={props.handleChange('Age')}
                           value={props.values.Age}
                           keyboardType='numeric'
                           onBlur={props.handleBlur('Age')}
                           />
                           <Text>{props.touched.Age && props.errors.Age}</Text>
                            <TextInput 
                            multiline
                           style={styles.input}
                           placeholder='User Location'
                           onChangeText={props.handleChange('location')}
                           value={props.values.location}
                           onBlur={props.handleBlur('location')}
                           />
                           <Text style={{fontWeight:'bold',fontSize:20, color:'orange'}}>{props.touched.location && props.errors.location}</Text>
                            <TextInput 
                           style={styles.input}
                           placeholder='User Gender'
                           onChangeText={props.handleChange('gender')}
                           value={props.values.gender}
                           onBlur={props.handleBlur('gender')}
                           />
                           <Text>{props.touched.gender && props.errors.gender}</Text>
                           <Button title='Add User' color='orange' onPress={props.handleSubmit}/>
                       </View>
                   )}
                    
                   </Formik>
                   {/*  */}
               
               </View> 
        </>
    )
}
const styles =StyleSheet.create({
    container:{
        padding:24
    },
    input:{
        borderWidth:2,
        borderColor:'orange',
        padding:10,
        marginBottom:15,
        marginTop:10,
        fontSize:18,
        borderRadius:6,
    },
    
})

export default reviewform
