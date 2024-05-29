import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  //   topic: 'Arts and Culture',
  topic: '',
  activeId: 'ARTS_AND_CULTURE',

  isRegistered: false,
  showError: false,
  changeInputName: () => {},
  changeTopicOption: () => {},
  registerName: () => {},
  updateError: () => {},
})

export default RegisterContext
