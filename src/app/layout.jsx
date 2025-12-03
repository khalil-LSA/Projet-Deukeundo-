import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Deukeundo - L'application mobile de votre ville",
  description: "Deukeundo est l'application mobile qui permet aux citoyens de signaler en temps réel les actes malsains, les problèmes de voirie, les accidents et les embouteillages dans leur localité. Rejoignez-nous pour contribuer à l'amélioration de votre ville !",
  keywords: "signalement, ville, transport, sécurité, citoyens, Sénégal, Dakar, application mobile",
  authors: [{ name: "Deukeundo Team" }],
  creator: "Deukeundo",
  publisher: "Deukeundo",
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  openGraph: {
    title: "Deukeundo - L'application mobile de votre ville",
    description: "Signalez en temps réel les actes malsains, les problèmes de voirie, les accidents et les embouteillages dans votre localité",
    url: 'https://deukeundo.com',
    siteName: 'Deukeundo',
    images: [
      {
        url: '/assets/Deukeundo.png',
        width: 800,
        height: 600,
        alt: 'Deukeundo - Application mobile citoyenne',
      },
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Deukeundo Logo',
      }
    ],
    locale: 'fr_SN',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Deukeundo - L'application mobile de votre ville",
    description: "Signalez en temps réel les problèmes de votre ville",
    creator: '@deukeundo',
    images: ['/assets/Deukeundo.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    // google: 'votre-code-verification-google',
    // bing: 'votre-code-verification-bing',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
