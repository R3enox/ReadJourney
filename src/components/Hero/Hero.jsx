import { Section } from './Hero.styled'
import * as img from '../../assets/img/hero/index'
export const Hero = () => {
  return (
      <Section>
       <picture>
            <source
            type="image/webp"
            media='(min-width: 1280px)'
            srcSet={`${img.heroWebDesc} 1x, ${img.heroWebDesc2} 2x`}
            />
            <source
            type="image/png"
            media='(min-width: 1280px)'
            srcSet={`${img.heroPngDesc} 1x, ${img.heroPngDesc2} 2x`}
            />
            <source
            type="image/webp"
            media='(max-width: 767px)'
            srcSet={`${img.heroWebMob} 1x, ${img.heroWebMob2} 2x`}
            />
            <source
            type="image/png"
            media='(max-width: 767px)'
            srcSet={`${img.heroPngMob} 1x, ${img.heroPngMob2} 2x`}
            />
            <img
            className="hero-img"
            srcSet={img.heroPngDesc}
            alt="Iphone"
            />
        </picture>
      </Section>
  )
}
