import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ItemList } from './screens/ItemList'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Item List</Text>
      </View>
      <View style={styles.bodySection}>
        <ItemList />
      </View>
    </View>
  );
}

const Test = (props) => {
  return (
    <>
      <Text>{props.title}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  titleSection: {
    paddingTop: 30,

  },
  bodySection: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',

  },
});
