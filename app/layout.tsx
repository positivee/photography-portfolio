import { useRouter } from "next/router";

import "./globals.css";
import Provider from "./components/Provider";
import { Lato } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const roboto = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Stefan Inva photography Warsaw - Portfolio.",
  description: "Photography portfolio app",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} font-roboto`}>
      <Provider>
        <body>
          {children}
          {modal}
        </body>
      </Provider>
    </html>
  );
}
