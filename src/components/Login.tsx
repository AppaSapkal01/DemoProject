import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'react-native-check-box';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const App = () => {
  const onPressLogin = () => {
    // Do something about login operation
  };

  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };

  const onPressSignUp = () => {
    // Do something about signup operation
  };

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [isSelected, setSelection] = useState(false);

  const onPressGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Handle the signed-in user information
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <View style={styles.outcontainer}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Log in to your account</Text>
          <Text style={styles.paragraph}>Please enter your email and password to continue</Text>
        </View>

        {/* Existing Input Fields and Buttons */}
        <Text style={styles.title}> Login Screen</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({ ...state, email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => setState({ ...state, password: text })}
          />
        </View>

        {/* CheckBox Section */}
        <View style={styles.checkboxContainer}>
  <CheckBox
    isChecked={isSelected}
    onClick={() => setSelection(!isSelected)}
    disabled={false}
    checkBoxColor={'green'}
  />
  <View style={styles.checkboxTextContainer}>
    <Text style={styles.label}>Remember me</Text>
  </View>
</View>


        {/* Forgot Password Link */}
        <TouchableOpacity onPress={onPressForgotPassword}>
          <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* New Buttons */}
        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN </Text>
        </TouchableOpacity>

        <Text>OR</Text>

        {/* Google Sign-In Button */}
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onPressGoogleSignIn}
        />
        <TouchableOpacity onPress={onPressSignUp}>
          <Text style={styles.forgotAndSignUpText}>Signup</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  outcontainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  headingContainer: {
    width: '100%',
    backgroundColor: 'orange',
    paddingTop: 20, // Add paddingTop for spacing
    paddingBottom: 20, // Add paddingBottom for spacing
    alignItems: 'center', // Center horizontally
    justifyContent: 'flex-start', // Align to the top vertically
    
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fb5b5a',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff', // Change background color
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgotAndSignUpText: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  footer: {
    width: '100%',
    height: 95,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
    marginBottom: 20,
  },
  checkboxTextContainer: {
    marginLeft: 8, // Add some space between the checkbox and the text
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;
