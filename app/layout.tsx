import type { Metadata } from "next";

import "./globals.css";
import {Nunito} from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import CleintOnly from "./components/CleintOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <CleintOnly>
          <ToasterProvider />
          <RentModal />
          <RegisterModal />
          <LoginModal />
           <Navbar currentUser = {currentUser} />
        </CleintOnly>
        <div className="pb-20 pt-28">
        {children} 
        </div>
        
      </body>
    </html>
  );
}
