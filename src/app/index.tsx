import BookCard from '@/components/BookCard'
import BookGrid from '@/components/BookGrid'
import CategoryChips from '@/components/CategoryChips'
import Header from '@/components/Header'
import { ScrollView, StyleSheet, View } from 'react-native'
const index = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      
      <Header></Header>
      <BookCard/>
      <CategoryChips></CategoryChips>
      <BookGrid></BookGrid>
  
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