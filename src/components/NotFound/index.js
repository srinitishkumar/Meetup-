import {NotFoundContainer, Heading, Des, NotFoundImg} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page not Found</Heading>
    <Des>We are sorry, the page you requested could not be found.</Des>
  </NotFoundContainer>
)

export default NotFound
