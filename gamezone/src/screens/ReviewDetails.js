import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/Global';

const ReviewDetails = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default ReviewDetails;
