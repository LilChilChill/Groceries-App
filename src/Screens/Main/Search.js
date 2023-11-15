import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const Search = () => {
  return (
    <ScrollView>

      <FlatList 
        numColumns={2} 
        style={styles.list}
      />

    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({
  list:{
    backgroundColor: "gray"
  }
})