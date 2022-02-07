import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ItemList } from './screens/ItemList';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import Friend from './screens/Friend';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Friends"
          component={Friend}
        />
        {/* <View style={styles.container}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>Item List</Text>
          </View>
          <View style={styles.bodySection}>
            <ItemList />
          </View>
        </View> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
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
    height: 700
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',

  },
});
