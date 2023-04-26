import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';

export const MyMarker = () => {
    return(
        <View style={styles.marker}>
            <FontAwesome name="angle-left" size={15} color="#000" style={{marginRight: 5}} />
            <FontAwesome name="angle-right" size={15} color="#000" />
        </View>
    )
}

const styles = StyleSheet.create({
    marker: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        elevation: 50,
        width: 25,
        height: 25,
        borderRadius: 3,
    },
});