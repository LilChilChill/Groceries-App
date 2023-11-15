import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const LocationScreen = ({ navigation }) => {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.imgContainer}>
        <Image source={require('../Asset/map.png')} />
      </View>

      <View style={styles.textContainer}>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontSize: 26,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 10,
          }}
        >
          Select Your Location
        </Text>

        <Text
          style={{
            fontFamily: 'medGilroy',
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            color: '#7C7C7C',
            marginBottom: 80,
          }}
        >
          Switch on your location to stay in tune with what's happening in your area
        </Text>

        <View style={styles.pickerContainer}>
          <View style={styles.pickerLabelContainer}>
            <Text style={styles.pickerLabel}>Your Zone:</Text>
          </View>
          <Picker
            selectedValue={selectedZone}
            onValueChange={(itemValue) => setSelectedZone(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Zone 1" value="zone1" />
            <Picker.Item label="Zone 2" value="zone2" />
            <Picker.Item label="Zone 3" value="zone3" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <View style={styles.pickerLabelContainer}>
            <Text style={styles.pickerLabel}>Your Area:</Text>
          </View>
          <Picker
            selectedValue={selectedArea}
            onValueChange={(itemValue) => setSelectedArea(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Area A" value="areaA" />
            <Picker.Item label="Area B" value="areaB" />
            <Picker.Item label="Area C" value="areaC" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 80,
    marginBottom: 10,
  },
  textContainer: {
    marginVertical: 20,
    textAlign: 'center',
  },
  pickerContainer: {
    flexDirection: 'column',
  },
  picker: {
    height: 50,
    width: '100%', 
    fontFamily: 'medGilroy',
    borderBottomWidth: 1, 
    borderBottomColor: '#000', 
  },
  pickerLabelContainer: {
    marginBottom: 5,
  },
  pickerLabel: {
    fontFamily: 'Gilroy',
    fontSize: 16,
    marginRight: 10,
    color: "#7C7C7C",
    fontWeight: '600'
  },
  submitButton: {
    backgroundColor: '#53B175',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'medGilroy',
    fontSize: 16,
  },
});

export default LocationScreen;
