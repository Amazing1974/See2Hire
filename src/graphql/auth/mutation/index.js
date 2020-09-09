import gql from 'graphql-tag';

export const SIGNUP_DRIVER = gql`
mutation addDriverInfo(
  $accountName: String!
  $accountNumber: String!
  $bankName: String!
  $billingAddress: String!
  $bodyColor: String!
  $driverLicense: String!
  $driverLicenseUrl: String!
  $email: String!
  $firstname: String!
  $idNumber: String!
  $language: String!
  $lastname: String!
  $licenseExpiry: String!
  $location: String!
  $manufacturer: String!
  $mobileNumber: String!
  $pinCode: String!
  $plateNumber: String!
  $profilePhotoUrl: String!
  $taxiLicense: String!
  $vehicleInsuranceUrl: String!
  $vehicleLicenseUrl: String!
  $yearManufactured: String!
  ) {
    addDriverInfo(
  accountName: $accountName
  accountNumber: $accountNumber
  bankName: $bankName
  billingAddress: $billingAddress
  bodyColor: $bodyColor
  driverLicense: $driverLicense
  driverLicenseUrl: $driverLicenseUrl
  email: $email
  firstname: $firstname
  idNumber: $idNumber
  language: $language
  lastname: $lastname
  licenseExpiry: $licenseExpiry
  location: $location
  manufacturer: $manufacturer
  phoneNumber: $mobileNumber
  pinCode: $pinCode
  plateNumber: $plateNumber
  profilePhotoUrl: $profilePhotoUrl
  taxiLicense: $taxiLicense
  vehicleInsuranceUrl: $vehicleInsuranceUrl
  vehicleLicenseUrl: $vehicleLicenseUrl
  yearManufactured: $yearManufactured
    ){
      user{
        id
      }
    }
  }
`;

export const VERIFY_NUMBER = gql`
mutation driverVerifyNumber($mobileNumber: String!, $email: String!, $location: String!){
  driverVerifyNumber(mobileNumber:$mobileNumber,email:$email,location:$location){
    existNumber
  }
}
`;

export const VERIFY_PINCODE = gql`
mutation driverVerifySecretCode($mobileNumber: String!, $token: String!){
  driverVerifySecretCode(mobileNumber: $mobileNumber, token: $token){
    user{
      id
    }
  }
}
`;

export const MAKE_CALL = gql`
mutation makeCallToDriver($mobileNumber: String!){
  makeCallToDriver(mobileNumber: $mobileNumber)
}
`;

export const USER_LOGIN = gql`
mutation userLogin($password: String!, $mobileNumber: String!, $email: String!, $role: String!){
  userLogin(password: $password, mobileNumber: $mobileNumber, email: $email, role: $role){
    user{
      id
      email
      profile{
        fullName
      }
    }
    token
  }
}
`;
