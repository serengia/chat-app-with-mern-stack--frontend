"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";
import HomePage from "@/components/pages/HomePage";

export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on("message", (data) => {
      console.log("Received message:", data.name);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <main>
      <HomePage />
    </main>
  );
}
