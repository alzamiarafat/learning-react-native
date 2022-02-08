import { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, ScrollView, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import FeIcon from 'react-native-vector-icons/Feather';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import style from 'tailwind-react-native-classnames';

export function ItemList(props) {

    const [item, setItem] = useState();
    const [itemList, setItemList] = useState([]);
    const [store, setStore] = useState([]);

    const handleAddItem = () => {
        setItemList([...itemList, item])
        console.log(itemList)
        setItem('');
    }

    const handleRemoveItem = (index) => {
        let itemCopy = [...itemList];
        itemCopy.splice(index, 1)
        setItemList(itemCopy)
    }

    const getApi = () => {
        axios.get('http://192.168.7.70:8000/api/test').then(response => {
            setStore(response.data)
        })
    }
    const searchApi = () => {
        // console.log(item)
        axios.get(`http://192.168.7.70:8000/api/search/${item}`).then(response => {
            setStore(response.data)
        })
    }
    const searchByNameApi = () => {
        axios.get('http://192.168.7.70:8000/api/search-name').then(response => {
            setStore(response.data)
        })
    }
    const clearApi = () => {
        setStore([])
    }

    return (
        <View>
            <View style={style`flex flex-row p-5`}>
                <KeyboardAvoidingView>
                    <TextInput style={style`w-72 text-black border border-gray-300 rounded p-2`} placeholder="Enter Text.." value={item} onChangeText={text => { setItem(text) }} onKeyPress={searchApi} />
                </KeyboardAvoidingView>
                {/* <Button title="Learn More"></Button> */}
                <TouchableOpacity onPress={searchByNameApi}>
                    <Text style={style`border border-gray-300 p-3 ml-5 rounded bg-blue-300`} >
                        {/* <ActivityIndicator size="small" color='#0000ff' /> */}
                        <AntIcon name="search1" size={20} color="#000" />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={style`flex flex-row`}>
                <TouchableOpacity onPress={getApi}>
                    <Text style={style`border border-gray-300 p-3 m-3 rounded bg-green-700 text-white`} >
                        Get Data
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearApi}>
                    <Text style={style`border border-gray-300 p-3 m-3 rounded bg-red-700 text-white`} >
                        Clear Data
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.props.navigation.navigate('Friends')}>
                    <Text style={style`border border-gray-300 p-3 m-3 rounded bg-yellow-600 text-white`} >
                        + Add New
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {store.map((s, i) => {
                    return (
                        <View key={i} style={style`border border-gray-400 rounded m-3 p-4`}>
                            <Text>ID: {s.id}</Text>
                            <Text>{s.name}</Text>
                            <Text>{s.email}</Text>
                        </View>
                    )
                })}
            </ScrollView>
            <ScrollView>
                {
                    itemList.map((item, index) => {
                        return (

                            <View style={[style`bg-white p-5 m-5 mb-0 flex flex-row`, styles.shadowProp]} key={index}>
                                <Text style={style`text-gray-500 w-64 p-2`}>{item}</Text>
                                <Text style={style`border border-gray-300 p-2`}>
                                    <FeIcon name="edit-2" size={20} style={style`text-green-600`} />
                                </Text>
                                <TouchableOpacity onPress={() => handleRemoveItem(index)} style={style`border border-gray-300 p-2 ml-3`}>
                                    <FaIcon name="trash-o" size={20} style={style`text-red-500`} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 12
    },
});
