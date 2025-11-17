import "./globals.css";
import AppProvider from "./contexts/AppContext";

export const metadata = {
  title: "Burton Maker",
  description: "Creador de personajes inspirado en el universo de Tim Burton",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
