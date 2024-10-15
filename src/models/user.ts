import pool from "../db";
import { RowDataPacket } from "mysql2";

export interface Student {
  id?: number;
  nombre: string;
  fecha_nacimiento: string;
}

export const findAllUsers = async (): Promise<Student[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM alumnos");
  return rows as Student[];
};
