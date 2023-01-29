import "../styles/globals.css";
import { Poppins, Playfair_Display } from "@next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout(props: { children: any }) {
  const { children } = props;
  return (
    <div className={`${poppins.variable} ${playfair.variable} font-sans`}>
      {children}
    </div>
  );
}
