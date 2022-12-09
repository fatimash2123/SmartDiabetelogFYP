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
<<<<<<< HEAD
=======
          <TouchableOpacity style={styles.buttonADD} onPress={addMealOpen}>
            <Text style={styles.buttonTextADD}>Add Meal</Text>
          </TouchableOpacity>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
          <ScrollView>
            <MealCard
              image={require('../../../assets/Images/recipe.jpg')}
              title={'Spinach, sweet potato and chickpea soup'}
            />
            <MealCard
              image={require('../../../assets/Images/recipe2.jpg')}
              title={'Mackerel rundown'}
            />
<<<<<<< HEAD
            
=======
            <MealCard
              image={require('../../../assets/Images/recipe3.jpg')}
              title={'crostini'}
            />
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
<<<<<<< HEAD
      <TouchableOpacity style={styles.addButton} onPress={addMealOpen}>
            <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
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
<<<<<<< HEAD
    backgroundColor: '#DDBEA9',
=======
    backgroundColor: '#D8D887',
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
    borderRadius: 15,

    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 23,
<<<<<<< HEAD
    color: 'black',
    // fontWeight: 'bold',
=======
    color: 'white',
    fontWeight: 'bold',
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  },

  mealView: {
    flex: 1,
    flexDirection: 'column',
  },
<<<<<<< HEAD
  addButton:{
    position:"absolute",  
    bottom:"5%",
    right:"4%",
    borderRadius:100,
    backgroundColor: '#DDBEA9',
    width:"20%",
    height:"10%",
    justifyContent:"center",
    alignItems:"center",
},
addButtonText:{
    fontSize:40,
  
    color:"black"
},     
=======
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
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
});
