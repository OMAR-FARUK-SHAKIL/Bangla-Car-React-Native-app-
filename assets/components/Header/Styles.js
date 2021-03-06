import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:'50',
        zIndex: '100',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: '20'
    },
    logo: {
        width:'100',
        height:'20',
        resizeMode:'contain'
    },
    menu: {
        width:'25',
        height:'20',
        resizeMode:'contain'
    }
})

export default  styles;