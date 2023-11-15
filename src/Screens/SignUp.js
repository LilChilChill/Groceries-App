import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false); 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.imgContainer}>
        <Image source={require('../Asset/logo.png')} />
      </View>

      <View style={styles.text}>
        <Text style={{
          fontFamily: "Gilroy",
          fontSize: 26,
        }}>
          SignUp
          {"\n"}
          {"\n"}
          <Text style={{
          fontFamily: "medGilroy",
          fontSize: 16,
          color: "#7C7C7C",
        }}>
            Enter your emails and password
          </Text>
        </Text>
      </View>    

      <Text style={styles.headText}>
        Username
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
        />
      </View>

      <Text style={styles.headText}>
        Email
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
        />
      </View>

      <Text style={styles.headText}>
        password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={!showPassword} 
        />
        <TouchableOpacity
          onPress={toggleShowPassword} 
        >
          <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} style={{marginLeft:-20}} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ 
          textAlign: "left",      
          color: "#181725",
          fontFamily: "Gilroy",
          fontWeight: "400",
          fontSize: 14,
        }}>
          By continuing you agree to our <Text style={{color: "#53B175"}}>Terms of Service</Text>
          {"\n"}
          and <Text style={{color: "#53B175"}}>Privacy Policy.</Text>
        </Text>
        </View>

      <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.SignUpButtonText}>SignUp</Text>
      </TouchableOpacity>

        <Text style={{ 
          marginTop: 10,
          textAlign: "center",
          fontFamily: "medGilroy",
          fontSize: 14,
          letterSpacing: 0.7
        }}>
          Already have an account? 
          {" "}
          <Text style={{
            color: "#53B175"
          }} onPress={() => navigation.navigate("Login")}>
            Login
          </Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
      marginTop: 20,
      marginHorizontal: 10,
      flex: 1,
      alignItems: "center",
  },
  imgContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 80,
    marginBottom: 40
  },
  text: {
    marginVertical: 30,
    left: 0
  },
  headText: {
    flex: 1,
    fontFamily: "Gilroy",
    fontSize: 16,
    marginTop: 0,
    color: "#7C7C7C",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontFamily: "medGilroy"
  },
  input: {
    height: 30,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    fontFamily: "medGilroy",
    marginTop: 10,
  },
  SignUpButton: {
    backgroundColor: '#53B175',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  SignUpButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'medGilroy',
    fontSize: 16,
  }
})