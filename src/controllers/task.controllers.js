import { pool } from "../db.js";

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

 export const login = async (req, res, next) => {
  try {
    const { nombre, contrasena } = req.body;

    // Verificar las credenciales en la base de datos
    const resultado = await pool.query(
      'SELECT * FROM usuario WHERE nombre = $1 AND contrasena = $2',
      [nombre, contrasena]
    );

    // Si las credenciales son válidas, el resultado debe tener al menos una fila
    if (resultado.rows.length > 0) {
      res.json({ mensaje: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    next(error);
  }
};


