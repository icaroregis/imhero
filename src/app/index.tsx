import { styles } from '@/src/styles/home.styles';
import { Link, router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  function goToRouterTest() {
    router.push('/test');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <Text style={styles.subtitle}>Sexta, 4 de Novembro de 2022.</Text>
      <Link
        style={styles.link}
        href="./test">
        ir para rota test
      </Link>
      <Button
        title="Ir para rota test"
        onPress={goToRouterTest}
      />
    </View>
  );
}
