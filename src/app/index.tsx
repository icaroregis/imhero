import { Link, router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  function goToRouterTest() {
    router.push('/test');
  }

  return (
    <View className="flex flex-1 bg-[#131016] p-6">
      <Text className="text-[24px] text-[#fdfcfe] font-bold mt-12">Nome do Evento</Text>
      <Text className="text-[16px] text-[#6b6b6b]">Sexta, 4 de Novembro de 2022.</Text>
      <Link
        className="text-[#fdfcfe] text-[16px] mt-24"
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
