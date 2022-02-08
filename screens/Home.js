import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { ItemList } from './ItemList';


export function Home(props) {

    return (
        <View>
            <ItemList props={props} />
        </View>
    );
}