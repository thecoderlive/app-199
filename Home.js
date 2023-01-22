import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Chats from './Chats'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Chats item={item.chats}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});