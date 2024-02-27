import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import Icons from './Icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
  ProfileDetails: undefined;
  EditProfile: undefined;
  // Add other screens as needed
};

type ProfileProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};


const ProfileCard: React.FC<ProfileProps> = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('1515151515');
  const [email, setEmail] = useState('xyz@gmail.com');
  const [isMobileModalVisible, setMobileModalVisible] = useState(false);
  const [isEmailModalVisible, setEmailModalVisible] = useState(false);
  const [newMobileNumber, setNewMobileNumber] = useState(mobileNumber);
  const [newEmail, setNewEmail] = useState(email);
  // const [newData, setNewData] = useState({mobileNumber: '', email: ''});

  const handleMobileChange = () => {
    // Validate if the newMobileNumber is a 10-digit number
    if (/^\d{10}$/.test(newMobileNumber)) {
      // Update the mobile number on save
      setMobileNumber(newMobileNumber);
      console.log('New Mobile Number:', newMobileNumber);
      setNewMobileNumber('');
    }
    setMobileModalVisible(false);
  };

  const handleCancelChange = () => {
    // Reset the newMobileNumber state on cancel
    setNewMobileNumber(mobileNumber);
    setMobileModalVisible(false);
    setNewMobileNumber('');
  };

  const handleEmailChange = () => {
    // You can add email validation logic here if needed
    setEmail(newEmail);
    console.log('New Email:', newEmail);
    setEmailModalVisible(false);
    setNewEmail(''); // Clear the input field after saving changes
  };

  const handleCancelEmailChange = () => {
    setNewEmail(email); // Clear the input field on cancel
    setEmailModalVisible(false);
    setNewEmail('');
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
            <Icons name="edit" color="#F46413" size={19} />
          </TouchableOpacity>
          <Text style={styles.editText}>Edit Profile</Text>
        </View>
        <View style={styles.imageSection}>
          <Image
            source={require('../assets/dummy-image.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Sunny Salve</Text>
        </View>
        <View style={styles.userDeatailSection}>
          <View style={styles.detailsField}>
            <Icons name="phone" color="black" size={16} style={{top: 4.5}} />
            <Text style={styles.detailsText}>Mobile No -</Text>
            <Text style={styles.detailsText}>{mobileNumber}</Text>
            <TouchableOpacity onPress={() => setMobileModalVisible(true)}>
              <Text style={styles.changeButton}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsField}>
            <Icons name="envelope" color="black" size={16} style={{top: 4.5}} />
            <Text style={[styles.detailsText]}>Email -</Text>
            <Text style={styles.detailsText}>{email}</Text>
            <TouchableOpacity>
              <Text
                style={styles.changeButton}
                onPress={() => setEmailModalVisible(true)}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsField}>
            <Icons
              name="map-marker"
              color="black"
              size={16}
              style={{top: 4.5}}
            />
            <Text style={styles.detailsText}>Location</Text>
            <Text style={styles.detailsText}>xyz, Abcd</Text>
          </View>
        </View>
      </View>
      {/* Mobile Number Change Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMobileModalVisible}
        onRequestClose={() => handleCancelChange()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Mobile Number</Text>
            <Text style={{fontFamily: 'Kanit', fontSize: 11, paddingBottom: 10}}>Please enter your mobile number</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter new mobile number"
              keyboardType="numeric"
              maxLength={10} // Set max length to 10 digits
              value={newMobileNumber}
              onChangeText={text => setNewMobileNumber(text)}
            />
            <View style={{width: 250, flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 32,
                  backgroundColor: '#F46413',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Button title="Save"  /> */}
                <Text style={{color: '#FFFFFF'}} onPress={handleMobileChange}>
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 32,
                  backgroundColor: '#F46413',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Button title="Save"  /> */}
                <Text style={{color: '#FFFFFF'}} onPress={handleCancelChange}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Email Change Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEmailModalVisible}
        onRequestClose={() => handleCancelEmailChange()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Email</Text>
            <Text style={{fontFamily: 'Kanit', fontSize: 11, paddingBottom: 10}}>Please enter your email</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter new email"
              keyboardType="email-address"
              value={newEmail}
              onChangeText={text => setNewEmail(text)}
            />
            <View style={{ width: 250, flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 32,
                  backgroundColor: '#F46413',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Button title="Save"  /> */}
                <Text style={{color: '#FFFFFF'}} onPress={handleEmailChange}>
                  Save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 32,
                  backgroundColor: '#F46413',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* <Button title="Save"  /> */}
                <Text style={{color: '#FFFFFF'}} onPress={handleCancelEmailChange}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flex: 0.3,
    backgroundColor: '#F46413',
  },
  editButton: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 55,
    left: 330,
    zIndex: 2,
  },
  editText: {
    position: 'absolute',
    top: 90,
    left: 325,
    fontSize: 10,
    color: '#FFFFFF',
  },
  imageSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileImage: {
    width: 163,
    height: 163,
    position: 'absolute',
    top: -75,
    borderRadius: 100,
    zIndex: 100,
  },
  profileName: {
    color: '#F46413',
    top: 50,
    fontFamily: 'Kanit',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 29.9,
  },
  userDeatailSection: {
    flex: 0.55,
    alignItems: 'center',
    marginTop: 15,
  },
  detailsField: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  detailsText: {
    fontFamily: 'Kanit',
    fontWeight: '700',
    fontSize: 16,
    color: '#1E1E1E',
  },
  changeButton: {
    color: '#F46413',
    fontFamily: 'Kanit',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    // width: 250,
    // height: 195,
    justifyContent: 'center',
    alignItems: 'center',
    top: 105,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  modalTitle: {
    textTransform: 'uppercase',
    fontFamily: 'Kanit',
    color: '#1E1E1E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ProfileCard;
