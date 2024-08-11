import ImgUsers from '../../assets/users.png'
import { ImageBackground, ImgBanner } from './styles'

function TopBackground() {
  return (
    <ImageBackground>
      <ImgBanner src={ImgUsers} alt="banner-users" />
    </ImageBackground>
  )
}

export default TopBackground