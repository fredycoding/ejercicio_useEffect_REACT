import React, { useState, useRef, useEffect } from "react";
import "./ProyectoDos.css";
import Button from '@mui/material/Button'

export const ProyectoDos = () => {
  const ref = useRef(null);

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
    console.log(ref.current.value)  
    setValores([...valores, ref.current.value])
  }

  return (
    <>
      <h1>BIENVENIDO A NUESTRO PRIMER USEEFFECT</h1>
      <textarea        
        value={texto}
        onChange={obtenerTexto}
        cols="50"
        rows="5"
        ref={ref}
      />

      <div>
        <Button variant="contained" onClick={guardarTexto} disabled={activar}>
          ENVIAR MENSAJE
        </Button>
        <h2>Contador de caracteres: {texto.length}</h2>     
        {valores.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </div>
    </>
  );
};
