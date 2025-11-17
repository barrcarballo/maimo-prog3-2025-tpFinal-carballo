"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL; // terminar de conectar con vercel 
  console.log("API_URL:", process.env.NEXT_PUBLIC_API_URL);

  const [characters, setCharacters] = useState([]);
  const [parts, setParts] = useState([]);

  const getCharacters = useCallback(async () => {
    const res = await axios.get(`${API_URL}/characters`);
    setCharacters(res.data);
  }, []);

  const getParts = useCallback(async () => {
    const res = await axios.get(`${API_URL}/parts`);
    setParts(res.data);
  }, []);

  const addCharacter = useCallback(async (data) => {
    const res = await axios.post(`${API_URL}/characters`, data);
    setCharacters((prev) => [...prev, res.data]);
  }, []);

  useEffect(() => {
    getParts();
    getCharacters();
  }, [getParts, getCharacters]);

  return (
    <AppContext.Provider value={{ characters, parts, addCharacter }}>
      {children}
    </AppContext.Provider>
  );
}
