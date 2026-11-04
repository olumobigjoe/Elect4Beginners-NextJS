import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Elect4Beginners | Electronics Made Simple",
  description: "Interactive electronics learning for beginners and undergraduates.",
  applicationName: "Elect4Beginners",
  themeColor: "#07111f"
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header className="topbar"><Link href="/" className="brand"><span className="brandmark">E</span><span>Elect<span className="cyan">4</span>Beginners</span></Link><nav><Link href="/">Home</Link><a href="/#courses">Learning modules</a><a href="/#tools">Calculators</a></nav></header>{children}<footer className="footer">© {new Date().getFullYear()} Elect4Beginners · Learn electronics by understanding, experimenting and applying.</footer></body></html>;
}
