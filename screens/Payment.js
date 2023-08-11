

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {RAZORPAY_API_KEY} from "@env"
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RazorpayCheckout from "react-native-razorpay"

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Payment = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            title={'Pay with Razorpay'}
            onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.png',
                currency: 'INR',
                key:RAZORPAY_API_KEY , // Your api key
                amount: '200',
                name: 'foo',
                // order_id: 'order_DslnoIgkIDL8Zt',
                prefill: {
                  email: 'amitsamui257@gmail.com.com',
                  contact: '7045234921',
                  name: 'Amit Samui',
                },
                theme: {color: '#F37254'},
                
              };
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  alert(`Success: ${data.razorpay_payment_id}`);
                })
                .catch(error => {
                  console.log(error);
                  
                  alert(`Error: ${error.code} | ${error.description}`);
                });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Payment;