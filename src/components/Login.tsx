import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import CheckBox from 'react-native-check-box';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const Login = () => {
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1',
        label: 'Hotel Owner',
        value: 'member',
      },
      {
        id: '2',
        label: 'member',
        value: 'member',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const handleLoginWithGoogle = async () => {
    try {
      // Configure GoogleSignIn
      await GoogleSignin.configure({
        // Add your Google Web Client ID here
        webClientId: 'YOUR_GOOGLE_WEB_CLIENT_ID',
      });

      // Get user info from Google
      const userInfo = await GoogleSignin.signIn();

      // Now you have the user's info, you can proceed with your app's authentication flow
      console.log(userInfo);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  }; // <-- Add this closing curly brace

  const handleLoginPress = () => {
    // Navigate to login screen
  };
  const handleForgotPasswordPress = () => {
    // Navigate to login screen
  };

  return (
    <View style={style.OuterView}>
      <View style={style.View1}>
        <Text style={style.RegiText}>Log in to account</Text>
        <Text style={style.KindlyRegiText}>
          Please enter your Email & Password to continue
        </Text>
      </View>

      <Text style={style.RegitAs}>Login as</Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        containerStyle={style.RadioGroupContainer}
        labelStyle={style.RadioButtonText}
      />
      <View style={style.View3}>
        <Text style={style.NameOfInput}>Email</Text>
        <TextInput
          style={style.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#A9A9A9"
        />
        <Text style={style.NameOfInput}>Password</Text>
        <TextInput
          style={style.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#A9A9A9"
        />
      </View>
      <View style={style.ButtonContainer}>
        <View style={{flexDirection: 'row', left: -50}}>
          <CheckBox
            isChecked={isSelected}
            onClick={() => setSelection(!isSelected)}
            disabled={false}
            checkBoxColor={'green'}
          />
          <View style={style.checkboxTextContainer}>
            <Text style={style.label}>Remember Password</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={{color: '#F46413',left:-90,}}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <View style={{width: 300, height: 34, borderRadius: 3}}>
          <Button title="Login" color="#F46413" />
        </View>
        <View><Text style={{ color: 'black', height: 18, fontFamily: 'Kanit', fontWeight: '300', fontSize: 12, lineHeight: 17.94 }}>OR</Text></View>
        <TouchableOpacity onPress={handleLoginWithGoogle} style={style.googleButton}>
          <Text style={style.googleButtonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={{color: 'black', top: 52}}>
            Don't have an account? Create account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  googleButton: {
    width: 299,
    height: 40,
    backgroundColor: '#E7E7E7', // Google red color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 16,
  },
  RegiText: {
    width: 300,
    height: 36,
    fontFamily: 'Kanit',
    left: 45,
    fontWeight: 'bold',
    fontSize: 24,
  },
  KindlyRegiText: {
    width: 300,
    height: 18,
    fontFamily: 'Kanit',
    left: 45,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 17.94,
  },
  RegitAs: {
    width: 90,
    height: 24,
    fontFamily: 'Kanit',
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    lineHeight: 23.92,
    left: 29,
  },
  RadioGroupContainer: {
    flexDirection: 'row',
    left: 22,
  },
  RadioButtonText: {
    height: 18,
    fontFamily: 'Kanit',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    color: 'black',
  },
  NameOfInput: {
    height: 21,
    // width:36,
    fontFamily: 'Kanit',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20.93,
    color: 'black',
    // marginVertical: 2,
  },
  input: {
    width: 300,
    height: 38,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 3,
    paddingHorizontal: 10,
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
  OuterView: {
    width: 359,
    height: 617,
    top: 50,
    left: 16,
    borderRadius: 8,
    display: 'flex',
    backgroundColor: 'white',
  },
  View1: {
    width: 359,
    height: 73,
    backgroundColor: '#F46413',
    top: -1,
  },
  View3: {
    width: 300,
    height: 130,

    left: 29,
    borderRadius: 3,
    borderWidth: 1,
    borderBlockColor: '#E1E1E1',
    borderLeftColor: '#E1E1E1',
    borderRightColor: '#E1E1E1',
  },
  ButtonContainer: {
    width: 300,
    height: 239,
    left: 29,
    borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    // backgroundColor:'red',
  },
});

export default Login;
