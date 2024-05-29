import RegisterContext from '../../context/RegisterContext'

import {
  RegBgContainer,
  Nav,
  Logo,
  RegisterContainer,
  RegisterImg,
  Form,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeInputName,
        changeTopicOption,
        showError,
        registerName,
        updateError,
        activeId,
      } = value
      console.log(topic)

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeInputName(event.target.value)
      }

      const onChangeTopic = event => {
        const updatedTopic = topicsList.filter(
          each => each.id === event.target.value,
        )
        changeTopicOption(updatedTopic[0].displayText)
        console.log(updatedTopic)
      }

      return (
        <RegBgContainer>
          <Nav>
            <Logo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Nav>
          <div>
            <RegisterContainer>
              <RegisterImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={submitRegistration}>
                <RegisterHeading>Let us join</RegisterHeading>
                <InputContainer>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="topic">Topics</Label>
                  <Select id="topic" value={activeId} onChange={onChangeTopic}>
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </Select>
                </InputContainer>
                <RegisterButton type="submit">Register Now</RegisterButton>
                {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
              </Form>
            </RegisterContainer>
          </div>
        </RegBgContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
