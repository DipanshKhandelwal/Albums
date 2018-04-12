import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    componentWillMount() {
        console.log('AlbumList mounted');
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => console.log(response));
    }

    render() {
        return (
            <View>
                <Text> AlbumList !! </Text>
            </View>
        );
    }
}

export default AlbumList;
