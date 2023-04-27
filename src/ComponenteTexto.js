import arrayText from './dataText';
import './ComponenteTexto.css';

function ComponenteTexto({ name }) {
    return (
        <div className='contenedor'>
            {
            arrayText.map((element, index) => {
                if (element.id == name) {
                    return(
                        <div key={index}>
                            <div className='medidas'>
                                <div className='medidas icono'>📐</div>
                                Medidas: {element.medidas}
                            </div>
                            <div className='colores'>
                                <div className='colores icono'>👩‍🎨</div>
                                Colores disponibles: {element.colores}
                            </div>
                            <div className='precio'>
                                <div className='precio icono'>💵</div>
                                Precio: Q{element.precio}
                            </div>
                        </div>
                    );
                }
            })
            }
        </div>
    );
}

export default ComponenteTexto;