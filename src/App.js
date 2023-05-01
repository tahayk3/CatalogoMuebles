import { useEffect, useState } from 'react';
import './App.css';
import images from './dataImage';
import TagButton from './TagButton';
import ComponenteTexto from './ComponenteTexto';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  const [tag, setTag] = useState('mueble 1');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'TODOS' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
  }, [tag])

  return (
    <div className="App">
      <div className='tags'>
        <TagButton
          name="mueble 1"
          handleSetTag={setTag}
          tagActive={tag === 'mueble 1' ? true : false}
        />
        <TagButton
          name="mueble 2"
          handleSetTag={setTag}
          tagActive={tag === 'mueble 2' ? true : false}
        />
        <TagButton
          name="mueble 3"
          handleSetTag={setTag}
          tagActive={tag === 'mueble 3' ? true : false}
        />
        <TagButton
          name="mueble 4"
          handleSetTag={setTag}
          tagActive={tag === 'mueble 4' ? true : false}
        />
        <TagButton
          name="mueble 5"
          handleSetTag={setTag}
          tagActive={tag === 'mueble 5' ? true : false}
        />
        <TagButton
          name="mueble 6"
          handleSetTag={setTag}
          tagActive={tag === 'mueble 6' ? true : false}
        />

      </div>

      <ComponenteTexto
        name={tag}
      />

      <div className='container'>
        {
          filteredImages.map((image) => {
            return (
              <div key={image.id} className='image-card'>
                <a href={`https://tahayk3.github.io/CatalogoMuebles/images/${image.imagenName}`}>
                  <img src={`https://tahayk3.github.io/CatalogoMuebles/images/${image.imagenName}`} alt="" className='image'></img>
                </a>
              </div>
            );
          })
        }
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
