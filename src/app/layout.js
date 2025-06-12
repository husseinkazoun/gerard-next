import "./globals.css";
export const metadata = {
  title: "Gérard El Bitar – Filmmaker & Musician",
  description:
    "Award-winning filmmaker & electronic musician from Beirut, Lebanon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}
