import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WithLoading = (Component) => {
  return function WithLoadingComponent({isLoading, ...props}) {
    if (!isLoading) {
      return <Component {...props} />;
    }
    return (
      <View>
        <Text>Loading .....</Text>
      </View>
    );
  };
};

export default WithLoading;
