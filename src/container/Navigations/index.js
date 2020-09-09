import React from 'react';
import {isEmpty} from 'lodash';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SignupScreen from '../auth/signup';
import SMSVerificationScreen from '../auth/smsVerification';
import SignupTalentScreen from '../auth/signup_talent';
import OnboardingScreen from '../auth/onboarding';
import LandingScreen from '../auth/landing';

import HomeScreen from '../home/home';
import ProfileScreen from '../home/profile_company';
import SettingScreen from '../home/setting';
import EditPhotoScreen from '../home/edit_photo';
import EditVideoScreen from '../home/edit_video';
import EditOverviewScreen from '../home/edit_overview';
import EditSkillsScreen from '../home/edit_skills';
import EditExperienceScreen from '../home/edit_experience';
import EmailSettingScreen from '../home/setting_email';

const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SettingStack = createStackNavigator();

const ProfileNavigator = (props) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
      <ProfileStack.Screen name="EditPhoto" component={EditPhotoScreen} options={{headerTitle: "Edit Photo", headerBackTitleVisible: false}} />
      <ProfileStack.Screen name="EditVideo" component={EditVideoScreen} options={{headerTitle: "Edit Video", headerBackTitleVisible: false}} />
      <ProfileStack.Screen name="EditOverview" component={EditOverviewScreen} options={{headerTitle: "Edit Overview", headerBackTitleVisible: false}} />
      <ProfileStack.Screen name="EditSkills" component={EditSkillsScreen} options={{headerTitle: "Edit Profession & Skills", headerBackTitleVisible: false}} />
      <ProfileStack.Screen name="EditExperience" component={EditExperienceScreen} options={{headerTitle: "Edit Your Experience", headerBackTitleVisible: false}} />
    </ProfileStack.Navigator>

  )
};

const SettingNavigator = (props) => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingScreen} options={{headerShown: false}} />
      <SettingStack.Screen name="EmailSetting" component={EmailSettingScreen} options={{headerTitle: "Edit name, email, address", headerBackTitleVisible: false}} />
    </SettingStack.Navigator>
  )
}

const CompanyNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
        showLabel: false,
        style: {
          backgroundColor: '#ffffffcc',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="profile" component={ProfileNavigator} />
      <Tab.Screen name="setting" component={SettingNavigator} />
    </Tab.Navigator>
  );
}

const Navigation = (user) => {
  return (
    <Stack.Navigator
      initialRouteName={user ? 'home' : 'Landing'}
    >
      <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
      <Stack.Screen name="SignupTalent" component={SignupTalentScreen} options={{headerShown: false}} />
      <Stack.Screen name="SMSVerification" component={SMSVerificationScreen} options={{headerShown: false}} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home_Company" component={CompanyNavigator} options={{headerShown: false}} />
      <Stack.Screen name="Home_Talent" component={ProfileNavigator} options={{headerShown: false}} />
    </Stack.Navigator>

  );
};

export default Navigation;
