import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MealCard from '../components/MealDishCard';

export default LunchPage = function ({navigation}) {
  const addMealOpen = () => {
    navigation.navigate('AddMeal');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstCon}>
        <Image
          style={styles.mainImage}
          resizeMode="contain"
          source={require('../../../assets/Images/luchF.jpg.png')}
        />
      </View>
      <View style={styles.secondCon}>
        <Text style={styles.mainHeading}>Lunch</Text>

        <View style={styles.mealView}>
          <TouchableOpacity style={styles.buttonADD} onPress={addMealOpen}>
            <Text style={styles.buttonTextADD}>Add Meal</Text>
          </TouchableOpacity>
          <ScrollView>
            <MealCard
              image={require('../../../assets/Images/recipe.jpg')}
              title={'Spinach, sweet potato and chickpea soup'}
            />
            <MealCard
              image={require('../../../assets/Images/recipe2.jpg')}
              title={'Mackerel rundown'}
            />
            <MealCard
              image={require('../../../assets/Images/recipe3.jpg')}
              title={'crostini'}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstCon: {
    flex: 0.4,
  },
  mainHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  mainImage: {
    height: 180,
    width: 390,
  },
  secondCon: {
    flex: 1,
  },
  button: {
    width: 370,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#D8D887',
    borderRadius: 15,

    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },

  mealView: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonADD: {
    width: 80,
    backgroundColor: '#cb997e',
    height: 35,
    borderRadius: 5,
    marginRight: 15,
    alignSelf: 'flex-end',
    margin: 10,
  },
  buttonTextADD: {
    color: 'white',
    textAlign: 'center',
    padding: 4,
  },
});
