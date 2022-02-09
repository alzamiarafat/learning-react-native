import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, TextInput, Text, View, Button, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import style from 'tailwind-react-native-classnames';
import IonIcon from 'react-native-vector-icons/Ionicons';


export default function Friend(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [iconShow, setIconShow] = useState(true);

    const saveData = () => {
        const data = {
            'name': name,
            'email': email,
            'phone': phone,
            'password': password,
        }
        axios.post(`http://192.168.7.70:8000/api/users`, data).then(response => {
            Alert.alert(`Success!`, "User has been added successfully", [
                { text: "OK" },
            ]);
        }).then(() => props.navigation.navigate('Home'))
    }

    const handlePassword = () => {
        if (iconShow) {
            setIconShow(false)
        } else {
            setIconShow(true)
        }
    }

    return (
        <View >
            <KeyboardAvoidingView style={style`m-3 mb-0`}>
                <Text>Name</Text>
                <TextInput style={style`text-black border border-gray-300 bg-white rounded p-2`} placeholder="Enter Text.." value={name} onChangeText={text => { setName(text) }} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={style`m-3 mb-0`}>
                <Text>Email</Text>
                <TextInput style={style`text-black border border-gray-300 rounded bg-white p-2`} placeholder="Enter Text.." keyboardType="email-address" value={email} onChangeText={text => { setEmail(text) }} />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={style`m-3 mb-0`}>
                <Text>Phone</Text>
                <TextInput style={style`text-black border border-gray-300 rounded bg-white p-2`} placeholder="Enter Text.." keyboardType="phone-pad" value={phone} onChangeText={text => { setPhone(text) }} />
            </KeyboardAvoidingView>
            <Text style={style`m-3 mb-0`}>Password</Text>
            <KeyboardAvoidingView style={style`m-3 mt-0 border border-gray-300 bg-white rounded`}>
                <TextInput style={style`text-black w-80 p-2 pr-0`} placeholder="Enter Text.." value={password} secureTextEntry={iconShow ? true : false} onChangeText={text => { setPassword(text) }} />
                {
                    iconShow ?
                        <IonIcon name="eye" size={25} style={[style`mt-2 pl-2 ml-80`, styles.iconStyle]} color="#999" onPress={handlePassword} /> :
                        <IonIcon name="eye-off" size={25} style={[style`mt-2 pl-2 ml-80`, styles.iconStyle]} color="#999" onPress={handlePassword} />
                }
            </KeyboardAvoidingView>

            <View style={style`flex flex-row`}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <Text style={style`w-44 border border-gray-300 p-3 m-3 mr-1 text-center rounded bg-red-600 text-black`} >
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={saveData} >
                    <Text style={style`w-44 border border-gray-300 p-3 m-3 rounded text-center bg-blue-400 text-black`} >
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        position: 'absolute',
        zIndex: 1
    }
});
