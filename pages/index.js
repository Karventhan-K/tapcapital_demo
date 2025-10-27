import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden`}
    >
      
        <Image
          className="min-w-screen max-w-screen  w-screen h-auto"
          src="/tapcapital.png"
          alt="Next.js logo"
          width={100}
          height={20}
          unoptimized
          priority
        />
       
    </div>
  );
}
