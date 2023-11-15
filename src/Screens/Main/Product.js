import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Product = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name='chevron-back' size={24}/>
        <Ionicons name='cart-outline' size={24}/>
      </View>

      <View style={styles.img}>
        <Image source={require('../../Asset/apple-product.png')} style={{ marginBottom: 20,}} />
      </View>

      <View style={styles.productContainer}>
        <Text>
        Naturel Red Apple
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    img: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "#F2F3F2",
        borderRadius: 30,
    },
    productContainer:{
        flex: 1,
        backgroundColor: "#FFF"
    }
})