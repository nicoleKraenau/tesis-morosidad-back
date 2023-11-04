import { pool } from "../db.js";

let usuario = [];

export const setDatosUsuario = async (req,res,next) => {
  usuario = req.body;
  res.json(usuario);
}

export const createusuario = async (req, res,next) => {
     // Extraer valores del cuerpo de la solicitud
     try {
        const { nombre, email, contrasena } = req.body; 
        const nuevousuario = await pool.query("INSERT INTO usuario(nombre,email,contrasena) VALUES($1,$2,$3) RETURNING *", [
            nombre,
        email,
            contrasena
            ]);
            res.json(nuevousuario.rows[0]);
     }catch(error){
        next(error);
     }

  };

export const updateusuario = async (req, res,next) => {
    // Extraer valores del cuerpo de la solicitud
    try {
       const { correo, contrasena } = req.body; 
       const usuario = await pool.query("UPDATE usuario SET contrasena = $1 WHERE email = $2 RETURNING *", [
          contrasena,
          correo
          ]);
           res.json(usuario.rows[0]);
    }catch(error){
       next(error);
    }

 };

export const login = async (req, res, next) => {
  try {
    const { correo, contrasena } = req.body;

    // Verificar las credenciales en la base de datos
    const resultado = await pool.query(
      'SELECT * FROM usuario WHERE email = $1 AND contrasena = $2',
      [correo, contrasena]
    );

    // Si las credenciales son válidas, el resultado debe tener al menos una fila
    if (resultado.rows.length > 0) {
      res.json(resultado.rows[0]);
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    next(error);
  }
};

export const dataCorreos = async (req, res, next) => {
  try {
    const { correo } = req.body;

    // Verificar las credenciales en la base de datos
    const resultado = await pool.query('SELECT * FROM usuario WHERE email = $1',[correo]);

    // Si las credenciales son válidas, el resultado debe tener al menos una fila
    if (resultado.rows.length > 0) {
      res.json(resultado.rows);
    } else {
      res.status(401).json({ error: 'El correo no está registrado' });
    }
  } catch (error) {
    next(error);
  }
};
