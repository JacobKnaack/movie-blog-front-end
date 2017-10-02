import Logo from './sfnp.svg'
import IvanAvatar from './ivan-avatar.svg'
import MeganAvatar from './megan-avatar.svg'
import JacobAvatar from './jacob-avatar.svg'
import ValerianImage from './ValerianImage.jpg'
import WelcomeGraphic from './welcome-graphic.svg'
import AtomicBlondeImage from './atomic-blonde.jpg'
import DunkirkImage from './dunkirk.jpg'
import NakedImage from './naked.jpg'
import ItImage from './it.jpg'
import MotherImage from './mother.png'
import Kingsman2Image from './kingsman2.jpg'

export const siteGraphics = {
  HeaderGraphic: WelcomeGraphic,
  Logo: Logo
}

const Images = {
  reviewImages: [
    ValerianImage,
    AtomicBlondeImage,
    DunkirkImage,
    NakedImage,
    ItImage,
    MotherImage,
    Kingsman2Image
  ],
  avatars: [
    {author: 'Jacob', image: JacobAvatar},
    {author: 'e-vaughn', image: IvanAvatar},
    {author: 'Megan', image: MeganAvatar}
  ]
}

export default Images
