import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, FlatList, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { categories } from "./categories";

export default function Home () {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.subtitle}>Enontre no mapa um ponto de comercio local</Text>
            </View>

            <MapView style={styles.map}>
                <Marker coordinate={{
                    latitude: 0,
                    longitude: 0,
                }}
                />
            </MapView>

            <View style={styles.categoryContainer}>
                <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                contentContainerStyle={{
                    alignItems: 'center'
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoryItem}
                    key={item.key}
                    >
                        <Image style={styles.categyImage} source={item.image} />
                        <Text style={styles.categoryText}>{item.label}</Text>

                    </TouchableOpacity>
                )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#ffff"
    },
    headerContainer:{
        padding: 20,
        paddingTop: Platform.OS == 'android' ? 50 : 0
    },
    title: {
        fontSize: 24,
        fontWeight: "400",
        color: "#322153"
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "400",
        color: "#6c6c80"
    },
    map: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    categoryContainer: {
        padding: 10,
    },
    categoryItem: {
        height: 110,
        backgroundColor: '#f0f0f5',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    categyImage:{
        width: 50,
        height: 50
    },
    categoryText:{
        textAlign: 'center',
        color: '#6c6c80'
    }

});