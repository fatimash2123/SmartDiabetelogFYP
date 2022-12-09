import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../files/Colors';

export default PageHeading = function (props) {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Image
          style={styles.headImage}
          resizeMode="contain"
          source={props.image}
        />
<<<<<<< HEAD
        <Text style={styles.text}>{props.title}</Text>
=======
      </View>
      <View>
      <Text style={styles.text}>{props.title}</Text>
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
<<<<<<< HEAD
    height: 200,
    width: '100%',

=======
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: colors.darkGreyBlue,
    paddingVertical: 7,
  },
  headImage: {
<<<<<<< HEAD
    width:"100%",
    alignSelf:"center"
  },
  headingTextContainer: {
    flex:1
=======
    // width: '100%',
    height: 200,
  },
  headingTextContainer: {
    width: '100%',
    height: '70%',
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  },
  text:{
    // top:-10,
    // backgroundColor: 'blue',
<<<<<<< HEAD
    // fontSize: 40,
    // textAlign: 'center',
    // color: 'black',
    // paddingTop: 20,
    // fontWeight: 'bold'
    fontSize: 30,
        fontStyle: "italic",
        textAlign: "center",
        fontWeight: "bold",
        color: 'black',
        marginBottom: 15
=======
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    paddingTop: 20,
    fontWeight: 'bold'
>>>>>>> 687ab0208c4b4918ea417e53315afa48a79e3f00
  }
});
