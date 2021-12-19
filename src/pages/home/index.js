import ContactInfo from './ContactInfo';
import Info from './Info';
import Price from './Price';
import SampleStep from './SampleStep';
import Social from './Social';

export default function HomePage() { // 建立一個component
  return (
    <>
      <Info />

      <SampleStep />

      <Price />

      <Social />

      <ContactInfo />
    </>
  )
}
