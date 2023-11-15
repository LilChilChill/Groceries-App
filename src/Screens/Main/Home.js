import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import COLORS from '../../const/colors';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.logo}> 
        <Image source={require('../../Asset/logo.png')} style={{ resizeMode: 'center' }} />
      <View>
        <Text style={{fontFamily: "Gilroy", fontSize: 20, marginTop: -10}}> 
            <Ionicons name='location-sharp' size={20}/> 
            Dhaka, Banassre
        </Text>
      </View>
      </View>

      <View style={styles.searchContainer}> 
        <Ionicons name='search-outline' size={24} color={COLORS.dark} style={{marginHorizontal: 10}} />
        <TextInput 
            placeholder='Search Store' 
            style={styles.input}/>
      </View>

      <View style={styles.bannerContainer}> 
        <Image source={require('../../Asset/banner.jpg')} style={styles.banner}/>
      </View>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
        }}>
        <Text style={{
            fontFamily: "Gilroy",
            fontSize: 24,
            fontWeight: 'bold'
        }}>
            Exclusive Offer
        </Text>   
        <TouchableOpacity>
            <Text style={{
                color: "#53B175",
                marginTop: 5,
                fontFamily: "medGilroy",
                fontSize: 16
            }}>
                See all
            </Text>
        </TouchableOpacity> 
      </View>    

      <ScrollView horizontal={true} style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <View style={styles.box}>
            <Image source={require('../../Asset/banana.png')} style={{}}/>
            <Text style={{fontFamily: "Gilroy", fontWeight: 'bold', fontSize: 16}}>
                Organic Banana
                {'\n'}
                <Text style={{color: "#7C7C7C", fontFamily: "medGilroy", fontSize: 14}}>7pcs, Priceg {'\n'}</Text>
            </Text>
            <View style={{flexDirection: 'row', }}> 
                
                <Text style={{fontFamily: "Gilroy", fontSize: 18, marginTop: 10}}>
                    $4.99 {'\b'} {'\b'} {'\b'}
                </Text>

                <TouchableOpacity>
                    <Ionicons  
                        name='add-sharp'  
                        size={24} 
                        color={COLORS.white}
                        style={{backgroundColor: "#53B175", borderRadius: 15, padding: 10}} />
                </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <View style={styles.box}>
            <Image source={require('../../Asset/apple.png')} style={{}}/>
            <Text style={{fontFamily: "Gilroy", fontWeight: 'bold', fontSize: 16}}>
                Organic Banana
                {'\n'}
                <Text style={{color: "#7C7C7C", fontFamily: "medGilroy", fontSize: 14}}>1kg, Priceg {'\n'}</Text>
            </Text>
            <View style={{flexDirection: 'row', }}> 
                
                <Text style={{fontFamily: "Gilroy", fontSize: 18, marginTop: 10}}>
                    $4.99 {'\b'} {'\b'} {'\b'}
                </Text>

                <TouchableOpacity>
                    <Ionicons  
                        name='add-sharp'  
                        size={24} 
                        color={COLORS.white}
                        style={{backgroundColor: "#53B175", borderRadius: 15, padding: 10}} />
                </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>
      
      <View style={styles.box}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.box}>
        <Text>Item 4</Text>
      </View>
    </ScrollView>

    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
        }}>
        <Text style={{
            fontFamily: "Gilroy",
            fontSize: 24,
            fontWeight: 'bold'
        }}>
            Best Selling
        </Text>   
        <TouchableOpacity>
            <Text style={{
                color: "#53B175",
                marginTop: 5,
                fontFamily: "medGilroy",
                fontSize: 16
            }}>
                See all
            </Text>
        </TouchableOpacity> 
      </View>

      <ScrollView horizontal={true} style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}> 
        <View style={styles.box}>
            <Image source={require('../../Asset/pepper.png')} style={{}}/>
            <Text style={{fontFamily: "Gilroy", fontWeight: 'bold', fontSize: 16}}>
                Organic Banana
                {'\n'}
                <Text style={{color: "#7C7C7C", fontFamily: "medGilroy", fontSize: 14}}>1kg, Priceg {'\n'}</Text>
            </Text>
            <View style={{flexDirection: 'row', }}> 
                
                <Text style={{fontFamily: "Gilroy", fontSize: 18, marginTop: 10}}>
                    $4.99 {'\b'} {'\b'} {'\b'}
                </Text>

                <TouchableOpacity>
                    <Ionicons  
                        name='add-sharp'  
                        size={24} 
                        color={COLORS.white}
                        style={{backgroundColor: "#53B175", borderRadius: 15, padding: 10}} />
                </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <View style={styles.box}>
            <Image source={require('../../Asset/ginger.png')} style={{}}/>
            <Text style={{fontFamily: "Gilroy", fontWeight: 'bold', fontSize: 16}}>
                Organic Banana
                {'\n'}
                <Text style={{color: "#7C7C7C", fontFamily: "medGilroy", fontSize: 14}}>1kg, Priceg {'\n'}</Text>
            </Text>
            <View style={{flexDirection: 'row', }}> 
                
                <Text style={{fontFamily: "Gilroy", fontSize: 18, marginTop: 10}}>
                    $4.99 {'\b'} {'\b'} {'\b'}
                </Text>

                <TouchableOpacity>
                    <Ionicons  
                        name='add-sharp'  
                        size={24} 
                        color={COLORS.white}
                        style={{backgroundColor: "#53B175", borderRadius: 15, padding: 10}} />
                </TouchableOpacity>
            </View>
        </View>
      </TouchableOpacity>
      <View style={styles.box}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.box}>
        <Text>Item 4</Text>
      </View>
      </ScrollView>
    <View style={styles.footer}>
        
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    logo: {
        flex: 1,
        alignItems: "center",
        marginTop: 40,
    },
    searchContainer: {
        marginTop: 20,
        height: 55,
        backgroundColor: "#F2F3F2",
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
    },
    input: {
        fontSize: 18,
        fontFamily: "Gilroy",
        color: COLORS.dark,
        flex: 1,
    },
    bannerContainer: {
        marginTop: 0,
        width: '100%', 
        overflow: 'hidden', 
    },
    banner: {
        resizeMode: "contain",
        width: "100%",
        height: 150
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    box: {
        width: 150,
        height: 210,
        backgroundColor: '#FFFFFF',
        margin: 10,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E2E2E2"
    },
    footer:{
        marginBottom: 100
    }
})