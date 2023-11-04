import { pool } from "../db.js";

export const getAlldistritos = async (req, res, next) => {
    try {
      const allTasks = await pool.query("SELECT * FROM Distrito ");
      res.json(allTasks.rows);
    } catch (error) {
      next(error);
    }
  };

  export const getAllregion = async (req, res, next) => {
    try {
      const allTasks = await pool.query("SELECT * FROM Region");
      res.json(allTasks.rows);
    } catch (error) {
      next(error);
    }
  };
  export const getAllestado = async (req, res, next) => {
    try {
      const allTasks = await pool.query("SELECT * FROM estado_civil ");
      res.json(allTasks.rows);
    } catch (error) {
      next(error);
    }
  };
  export const getAlleducativo = async (req, res, next) => {
    try {
      const allTasks = await pool.query("SELECT * FROM nivel_educativo ");
      res.json(allTasks.rows);
    } catch (error) {
      next(error);
    }
  };
  export const getAllmotivo= async (req, res, next) => {
    try {
      const allTasks = await pool.query("SELECT * FROM motivo_prestamo ");
      res.json(allTasks.rows);
    } catch (error) {
      next(error);
    }
  };