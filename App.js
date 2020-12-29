/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import WithLoading from './WithLoading';
import RepoList from './RepoList';

const ListWithLoading = WithLoading(RepoList);

const App: () => React$Node = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.github.com/users/erandakarachchi/repos')
      .then((json) => json.json())
      .then((rps) => {
        setRepos(rps);
      });
    setTimeout(function () {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading, setRepos]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <ListWithLoading isLoading={isLoading} repos={repos} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
