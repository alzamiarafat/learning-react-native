import { StyleSheet, Text, View, TextInput } from 'react-native';
import FeIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import tailwind from 'tailwind-react-native-classnames';

export function ItemList() {

    return (
        <View >
            <View style={[tailwind`bg-white p-5 m-5 mb-0`, styles.shadowProp]}>
                <Text style={tailwind`text-gray-500`}>This is item 1<FeIcon name="edit-2" size={20} color="#900" /></Text>
            </View>
            <View style={[tailwind`bg-white p-5 m-5 mb-0`, styles.shadowProp]}>
                <Text style={tailwind`text-gray-500`}>This is item 2</Text>
            </View>
            <View style={[tailwind`bg-white p-5 m-5 mb-0`, styles.shadowProp]}>
                <Text style={tailwind`text-gray-500`}>This is item 3</Text>
            </View>
            <View style={[tailwind`bg-white p-5 m-5 mb-0`, styles.shadowProp]}>
                <Text style={tailwind`text-gray-500`}>This is item 4</Text>
            </View>
            <View style={tailwind`flex flex-row`}>
                <TextInput style={tailwind`w-72 text-black border border-gray-300 p-2 m-5 rounded`} placeholder="Enter Text.." />
                <Text style={tailwind`border border-gray-300 rounded-full p-3`}><AntIcon name="plus" size={20} color="#000" /></Text>
            </View>
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
