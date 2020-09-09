export const setFirstName = firstname => (
    {
      type: 'SET_FIRSTNAME',
      payload: firstname,
    }
);

export const setMiddleName = middlename => (
  {
    type: 'SET_MIDDLENAME',
    payload: middlename,
  }
);

export const setLastName = lastname => (
    {
      type: 'SET_LASTNAME',
      payload: lastname,
    }
);

export const setAvatar = path => (
    {
      type: 'SET_AVATAR',
      payload: path,
    }
);

export const setEmail = email => (
    {
      type: 'SET_EMAIL',
      payload: email,
    }
);

export const setPhone = phone => (
    {
      type: 'SET_PHONE',
      payload: phone,
    }
);

export const setAddressStreet = street => (
    {
      type: 'SET_ADDRESS_STREET',
      payload: street,
    }
);

export const setAddressCity = city => (
    {
      type: 'SET_ADDRESS_CITY',
      payload: city,
    }
);

export const setAddressState = state => (
    {
      type: 'SET_ADDRESS_STATE',
      payload: state,
    }
);

export const setAddressZip = zip => (
    {
      type: 'SET_ADDRESS_ZIP',
      payload: zip,
    }
);

export const setVideo = path => (
    {
      type: 'SET_VIDEO',
      payload: path,
    }
);

export const setVideoCover = path => (
    {
        type: 'SET_VIDEO_COVER',
        payload: path,
    }
)

export const setOverview = data => (
    {
      type: 'SET_OVERVIEW',
      payload: data,
    }
);

export const setProfileSkill = data => (
    {
      type: 'SET_PROFILE_SKILL',
      payload: data,
    }
);

export const setProfileProfession = data => (
    {
      type: 'SET_PROFILE_PROFESSION',
      payload: data,
    }
);

export const setProfileExperience = data => (
    {
      type: 'SET_PROFILE_EXPERIENCE',
      payload: data,
    }
);

export const setIsTalent = isTalent => (
    {
        type: 'SET_IS_TALENT',
        payload: isTalent,
    }
)

export const setOtp = otp => ({
  type: 'SET_OTP',
  payload: otp
})

export const setToken = token => ({
  type: 'SET_TOKEN',
  payload: token
})

export const setCompanyProfile = data => ({
  type: 'SET_COMPANY_PROFILE',
  payload: data
})