import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const chatsItem = ({ item }) => (
<View style={styles.chats_item}>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
<Text style={styles.last_message}>{item.last_message}</Text>
</View>
  );

const Chats = ({ item }) => (
<FlatList
    style={styles.chats}
    data={item}
    renderItem={chatsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Chats;

const styles = StyleSheet.create({
    'user_image': {
        'width': '20vw',
        'height': '20vw',
        'marginTop': 5,
        'backgroundColor': '#d79104ff'
    },
    'user_name': {
        'color': '#9d0269ff',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'fontFamily': 'monospace'
    },
    'last_message': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#190b00ff',
        'fontFamily': 'monospace'
    }
});