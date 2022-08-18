import React, { useState, useEffect } from "react";
import "./ProyectoDos.css";
import Button from '@mui/material/Button'

export const ProyectoDos = () => {
 

  const [valores, setValores] = useState([])
  const [texto, setTexto] = useState([]);
  const [activar, setActivar] = useState(false);

  useEffect(() => {
    if (texto.length <= 0) {
        setActivar(true);
      } else {
        setActivar(false);
      }
  },[texto]);

  function obtenerTexto(event) { 
    setTexto(event.target.value)    
  }

  function guardarTexto(event) {

    setValores([...valores, texto])
    setTexto("")
  }

  return (
    <>
      <h1>OBTENER DATOS DE LA CAJA DE TEXTO😎</h1>
      <textarea        
        value={texto}
        onChange={obtenerTexto}
        cols="50"
        rows="5"
        placeholder="ESCRIBA ALGO..." 
      />

      <div>
        <Button variant="contained" onClick={guardarTexto} disabled={activar}>
          ENVIAR MENSAJE
        </Button>
        <h2>Contador de caracteres: {texto.length}</h2>     
        {valores.map((item) => (         
          <h3 key={valores.indexOf(item)}>{item}</h3>   //valores.indexOf(item) obtiene la posición del array      
        ))}
      </div>
    </>
  );
};
