"use client";
import toast, { Toast } from "react-hot-toast";
import React from "react";

interface CustomToastProps {
  t: Toast;
  message: string;
}

const SuccessToast: React.FC<CustomToastProps> = ({ t, message }) => (
  <div
    className={`px-4 py-3 rounded-lg shadow-md ${t.visible ? "animate-enter" : "animate-leave"}`}
    style={{
      background: "var(--botoes)",
      color: "var(--background)",
      border: "2px solid var(--bordas)",
      boxShadow: "var(--shadow)",
      fontFamily: "'Libre Baskerville', serif",
    }}
  >
    {message}
  </div>
);

const ErrorToast: React.FC<CustomToastProps> = ({ t, message }) => (
  <div
    className={`px-4 py-3 rounded-lg shadow-md ${t.visible ? "animate-enter" : "animate-leave"}`}
    style={{
      background: "var(--links)",
      color: "var(--background)",
      border: "2px solid var(--bordas)",
      boxShadow: "var(--shadow)",
      fontFamily: "'Libre Baskerville', serif",
    }}
  >
    {message}
  </div>
);

// Funções de chamada
export function toastSuccess(message: string) {
  toast.custom((t) => <SuccessToast t={t} message={message} />);
}

export function toastError(message: string) {
  toast.custom((t) => <ErrorToast t={t} message={message} />);
}
