import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

const MealCard = props => {
  return (
    <View style={styles.mainView}>
      <View style={{flex: 0.5}}>
        <Image style={styles.image} resizeMode="cover" source={props.image} />
      </View>
      <View style={styles.rightCon}>
        <Text style={styles.dishname}>{props.title}</Text>
        <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Favorite</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 0.35,
    flexDirection: 'column',
<<<<<<< HEAD
    backgroundColor: 'white',
=======
    backgroundColor: '#E6E6B0',
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    margin: 10,
    flexDirection: 'row',
<<<<<<< HEAD
    borderWidth: 1,
    borderColor: '#ffe8d6'
=======
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  },
  image: {
    width: 110,
    height: 80,
    margin: 10,
    borderRadius: 15,
  },
  rightCon: {
    flex: 1,
    margin: 10,
    marginLeft: 20,
  },
  dishname: {
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    width: 80,
<<<<<<< HEAD
    backgroundColor: '#DDBEA9',
=======
    backgroundColor: '#cb997e',
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
    height: 35,
    borderRadius: 5,
    marginRight: 15,
  },
  buttonText: {
<<<<<<< HEAD
    color: 'black',
=======
    color: 'white',
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
    textAlign: 'center',
    padding: 4,
  },
});

export default MealCard;
