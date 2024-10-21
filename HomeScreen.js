import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber);
        } else {
          setPhoneNumber('Không có số điện thoại');
        }
      } catch (e) {
        console.log('Failed to load phone number from AsyncStorage');
      }
    };

    fetchPhoneNumber();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng bạn đến với trang chính!</Text>
      <Text style={styles.subtitle}>Số điện thoại của bạn:</Text>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', 
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00796b', 
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#004d40', 
    textAlign: 'center',
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 22,
    fontWeight: '600',
    color: '#d32f2f', 
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d32f2f',
    paddingBottom: 5,
  },
});

export default HomeScreen;
