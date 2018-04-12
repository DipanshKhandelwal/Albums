import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle ,viewStyle} = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle} > Albums </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 }, 
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
