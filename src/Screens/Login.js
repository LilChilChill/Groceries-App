import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false); 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <View style={styles.imgContainer}>
        <Image source={require('../Asset/logo.png')} />
      </View>

      <View style={styles.text}>
        <Text style={{
          fontFamily: "Gilroy",
          fontSize: 26,
        }}>
          Login
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
        Email
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onSubmitEditing={() => { 
          nextInput.focus(); 
        }}
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
          ref={(input) => { nextInput = input; }}
          returnKeyType="done"
        />
        <TouchableOpacity
          onPress={toggleShowPassword} 
        >
          <Ionicons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} style={{marginLeft:-20}} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={{ 
          textAlign: "right",
          color: "#181725",
          fontFamily: "medGilroy",
          fontSize: 14,
        }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

        <Text style={{ 
          marginTop: 10,
          textAlign: "center",
          fontFamily: "medGilroy",
          fontSize: 14,
          letterSpacing: 0.7
        }}>
          Don't have an account? 
          {" "}
          <Text style={{
            color: "#53B175"
          }} onPress={() => navigation.navigate("Sign Up")}>
            Singup
          </Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
      marginTop: 20,
      marginHorizontal: 10,
      flex: 1,
      alignItems: "center",
  },
  backButton: {
      position: 'absolute',
      top: 20,
  },
  imgContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 80,
    marginBottom: 80
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
  loginButton: {
    backgroundColor: '#53B175',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'medGilroy',
    fontSize: 16,
  }
})