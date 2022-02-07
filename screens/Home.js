import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { ItemList } from './ItemList';

export function Home(props) {

    return (
        <View>
            <Text>You have (undefined) friends.</Text>
            <ItemList />
            <Button
                title="Add some friends"
                onPress={() =>
                    props.navigation.navigate('Friends')
                }
            />
            <TextInput
                placeholder="useless placeholder"
                secureTextEntry={true}
            />
        </View>
    );
}

