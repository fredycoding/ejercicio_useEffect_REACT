import React, { useState, useEffect } from "react";
import "./ProyectoDos.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from '@mui/material/Alert';

export const ProyectoDos = () => {
  const [valores, setValores] = useState([]);
  const [texto, setTexto] = useState([]);
  const [activar, setActivar] = useState(false);

  useEffect(() => {
    if (texto.length <= 0) {
      setActivar(true);
    } else {
      setActivar(false);
    }
  }, [texto]);

  function obtenerTexto(event) {
    setTexto(event.target.value);
  }

  function guardarTexto(event) {
    setValores([...valores, texto]);
    setTexto("");
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
        className="textarea"
      />

      <div>
        <Button
          variant="contained"
          onClick={guardarTexto}
          disabled={activar}
          sx={{ mt: 2 }}
        >
          ENVIAR MENSAJE
        </Button>
        <Button
          variant="outlined"
          onClick={() => setValores([])}
          color="error"
          sx={{ ml: 2, mt: 2 }}
        >
          {/*Limpio el array*/}
          LIMPIAR DATOS
        </Button>
        <h2>Contador de caracteres: {texto.length}</h2>
        <div className="contenedor">
        <Stack sx={{ width: '28%'}} spacing={2}>        
          {valores.map((item) => (
            <Alert severity="success" key={valores.indexOf(item)}>{item}</Alert>
             //valores.indexOf(item) obtiene la posición del array
          ))}
        </Stack>
        </div>
      </div>
    </>
  );
};
