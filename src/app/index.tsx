import BookCard from '@/components/BookCard'
import Header from '@/components/Header'
import { StyleSheet, View } from 'react-native'
const index = () => {
  return (
    <View style={styles.container}>
      
    <Header></Header>
    <BookCard/>
    </View>
  )
}

 const styles= StyleSheet.create({
    container:{
      gap: 15
    }
 })

export default index