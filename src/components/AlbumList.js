import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        console.log('AlbumList mounted');
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        console.log(this.state);

        return (
            <View>
                <Text> AlbumList !! </Text>
            </View>
        );
    }
}

export default AlbumList;
