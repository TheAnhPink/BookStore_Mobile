import BookCard from '@/components/BookCard'
import Header from '@/components/Header'
import { ScrollView, StyleSheet, View } from 'react-native'
const index = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      
      <Header></Header>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
  
      </View>
    </ScrollView>
  )
}

 const styles= StyleSheet.create({
    container:{
      gap: 15
    }
 })

export default index