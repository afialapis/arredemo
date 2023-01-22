import React from 'react'
import Slider from 'react-touch-drag-slider'

const images= [
  {url: 'https://www.pngitem.com/pimgs/m/132-1329566_dc-comics-heroes-png-transparent-png.png', title: 'batman'},
  {url: 'https://www.pngitem.com/pimgs/m/505-5059412_marvel-heros-png-png-marvel-hero-transparent-png.png', title: 'DeadPool'},
  {url: 'https://static.wikia.nocookie.net/p__/images/e/e1/Mario_SSB4.png/revision/latest?cb=20201230192449&path-prefix=protagonist', title: 'Super Mario'},
  {url: 'https://www.freepnglogos.com/uploads/minions-png/minions-png-images-heroes-minions-transparent-21.png', title: 'Minion'},
  {url: 'https://www.pngitem.com/pimgs/m/122-1223582_gallery-image-heroes-of-the-storm-junkrat-png.png', title: 'Junkrat'},
  //{url: '', title: ''},

]

function App() {

  return (
    <div style={{height: "100vh", width: "100vw"}}>
        <Slider
          activeIndex={0}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
    </div>
  )
}

export default App