import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, ScrollView, Platform, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import FeIcon from 'react-native-vector-icons/Feather';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import style from 'tailwind-react-native-classnames';

export function ItemList() {

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

    const testApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setStore(json)
                console.log(store)
            })
    }

    return (
        <View>
            <View style={style`flex flex-row p-5`}>
                <KeyboardAvoidingView>
                    <TextInput style={style`w-72 text-black border border-gray-300 rounded p-2`} placeholder="Enter Text.." value={item} onChangeText={text => { setItem(text) }} />
                </KeyboardAvoidingView>
                {/* <Button title="Learn More"></Button> */}
                <TouchableOpacity onPress={handleAddItem}>
                    <Text style={style`border border-gray-300 p-3 ml-5 rounded bg-blue-300`} >
                        {/* <ActivityIndicator size="small" color='#0000ff' /> */}
                        <AntIcon name="plus" size={20} color="#000" />
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={testApi}>
                <Text style={style`border border-gray-300 p-3 m-3 rounded bg-blue-300`} >
                    {/* <ActivityIndicator size="small" color='#0000ff' /> */}
                    {/* <AntIcon name="plus" size={20} color="#000" /> */}
                    Test
                </Text>
            </TouchableOpacity>
            <ScrollView>
                {store.map((s, i) => {
                    return (
                        <View key={i} style={style`border border-gray-400 rounded m-3 p-4`}>
                            <Text>{s.id}</Text>
                            <Text>{s.title}</Text>
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
