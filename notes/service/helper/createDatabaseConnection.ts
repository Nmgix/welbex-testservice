import { Sequelize } from "sequelize";
import { noteFactory } from "../models/Note";
import { userNoteFactory } from "../models/UserNote";

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE!.toString(),
  process.env.SQL_USER!.toString(),
  process.env.SQL_PASSWORD!.toString(),
  {
    host: process.env.SQL_HOST!.toString(),
    port: Number(process.env.MYSQL_PORT_LOCAL),
    dialect: "mysql",
  }
);

sequelize.sync();

export const Note = noteFactory(sequelize);
export const UserNote = userNoteFactory(sequelize);

UserNote.hasMany(Note);
Note.belongsTo(UserNote);