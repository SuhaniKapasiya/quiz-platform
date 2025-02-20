import { openDB } from "idb";

export const initDB = async () => {

  return openDB("quizDB", 1, {
    upgrade(db) {
      db.createObjectStore("attempts", { keyPath: "id", autoIncrement: true });
    },
  });

};

export const saveAttempt = async (attempt) => {

  console.log("attempts", attempt);
  
  const db = await initDB();
  await db.add("attempts", attempt);

};

export const getAttempts = async () => {

  const db = await initDB();
  return await db.getAll("attempts");
  
};
