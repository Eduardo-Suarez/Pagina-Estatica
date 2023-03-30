import "../styles/testimonio.css"


//Esta es un tipo de exportacion nombrada.
export const Testimonio = ({imagen, nombre, pais, cargo, empresa, testimonio}) => {
  return (
    <>  
        <div className="contenedor-testimonio">
            <img
                className="imagen-testimonio" 
                src={`../images/testimonio-${imagen}.png`} 
                alt={`imagen de ${nombre}`} 
            />

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> <b>{nombre}</b>  en {pais}</p>
                <p className="cargo-testimonio">{cargo} en <b>{empresa}</b></p>
                <p className="texto-testimonio">{testimonio}</p>
            </div>
        </div>

       
    </>
            
            
  )
}
