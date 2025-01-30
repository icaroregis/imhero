import { Slot } from 'expo-router';
import '../styles/global.css';

export default function Layout() {
  //renderizar as interfaces as rotas através do Slot
  //pega todas as rotas e interfaces e renderiza aqui no Slot
  return <Slot />;
}
