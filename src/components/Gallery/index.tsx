import Section from '../Section'

import { Items, Item } from './styles'

import zelda from '../../assets/images/zelda.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="imagem do Link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do Link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do Link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do Link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
