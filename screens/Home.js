import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { ItemList } from './ItemList';
import style from 'tailwind-react-native-classnames';


export function Home(props) {

    return (
        <View style={style`flex-1 bg-blue-100`}>
            <ItemList props={props} />
        </View>
    );
}