import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const Registration = () => {
    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '1',
            label: 'Hotel Owner',
            value: 'member'
        },
        {
            id: '2',
            label: 'member',
            value: 'member'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState<string | undefined>();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLoginPress = () => {
        // Navigate to login screen
    };

    return (
        <View style={style.OuterView}>
            <View style={style.View1}>
                <Text style={style.RegiText}>Registration</Text>
                <Text style={style.KindlyRegiText}>kindly fill this form to register</Text>
            </View>
            <View style={style.View3}>
                <Text style={style.RegitAs}>Register as</Text>
                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    containerStyle={style.RadioGroupContainer}
                    labelStyle={style.RadioButtonText}
                />
                <Text style={style.NameOfInput}>Full Name</Text>
                <TextInput
                    style={style.input}
                    onChangeText={setFullName}
                    value={fullName}
                    placeholder="Full Name"
                    placeholderTextColor="#A9A9A9"
                />
                <Text style={style.NameOfInput}>Contact No</Text>
                <TextInput
                    style={style.input}
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    placeholder="Contact No"
                    keyboardType="numeric"
                    placeholderTextColor="#A9A9A9"
                />
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
                <Text style={style.NameOfInput}>Confirm Password</Text>
                <TextInput
                    style={style.input}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="#A9A9A9"
                />
            </View>
            <View style={style.ButtonContainer}>
              <View style={{ width: 300, height: 34,top: 40,borderRadius:3}}>
               <Button 
                title='Register'
                color='#F46413'
                />
               </View>
               <TouchableOpacity onPress={handleLoginPress}>
                   <Text style={{color:'black', top:52}}>Already have an account? Login</Text>
               </TouchableOpacity>
             </View>
       </View>
    );
};

const style = StyleSheet.create({
  RegiText: {
      width: 145,
      height: 36,
      fontFamily: 'Kanit',
      left: 45,
      fontWeight: '600',
      fontSize: 24,
  },
  KindlyRegiText: {
      width: 180,
      height: 18,
      fontFamily: 'Kanit',
      left: 45,
      fontWeight: '300',
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
  },
  RadioGroupContainer: {
    flexDirection: 'row',
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
      fontFamily: 'Kanit',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 20.93,
      color: 'black',
      marginVertical: 2,

  },
  input: {
    width:300,
      height: 38,
     // marginVertical: 2,
      borderWidth: 1,
      borderColor: '#E1E1E1',
      borderRadius: 3,
      paddingHorizontal: 10,
  },
  OuterView: {
      width: 359,
      height: 617,
      top: 113,
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
      height: 375,
      top: 30,
      left: 29,
      borderRadius: 3,
      borderWidth: 1,
      borderBlockColor: '#E1E1E1',
      borderLeftColor: '#E1E1E1',
      borderRightColor: '#E1E1E1',
  },
  ButtonContainer: {
      marginTop: 20,
      alignItems: 'center',
  }
});

export default Registration;
