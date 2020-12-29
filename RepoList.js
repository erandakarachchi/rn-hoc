import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RepoList = (props) => {
  const {repos} = props;

  if (!repos) {
    return null;
  }

  if (!repos.length) {
    return (
      <View>
        <Text>No Items To Show</Text>
      </View>
    );
  }

  return (
    <View>
      {repos.map((repo) => {
        return (
          <View key={repo.node_id} style={styles.cardContainer}>
            <Text style={styles.title}>{repo.name}</Text>
            <Text>{repo.owner?.login}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    marginTop: 8,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RepoList;
