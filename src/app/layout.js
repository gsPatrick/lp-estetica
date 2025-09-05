import localFont from 'next/font/local';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'; // 1. Importe o componente Footer

const airelion = localFont({
  src: '../fonts/Ailerons-Typeface.otf',
  display: 'swap',
  variable: '--font-airelion',
});

// Removida a configuração para SloopScriptPro aqui, pois será tratada globalmente
// const sloopScriptPro = localFont({
//   src: '../fonts/SloopScriptPro-Regular.woff2',
//   display: 'swap',
//   variable: '--font-sloop-script-pro',
// });

export const metadata = {
  title: 'Dra. Giuliane Sodré',
  description: 'Estética avançada e tratamentos personalizados.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/* A variável --font-script será usada globalmente */}
      <body className={`${airelion.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer /> {/* 2. Adicione o componente Footer aqui, depois do main */}
      </body>
    </html>
  );
}