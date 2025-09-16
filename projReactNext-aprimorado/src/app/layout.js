import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Meu App',
  description: 'Projeto melhorado'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <Header />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
