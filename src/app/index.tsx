import { Text, TextInput, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex flex-1 bg-[#131016] p-6">
      <Text className="text-[24px] text-white font-bold mt-12">Nome do Evento</Text>
      <Text className="text-[16px] text-[#6b6b6b]">Sexta, 4 de Novembro de 2022.</Text>
      <TextInput className="h-[56px] bg-[#1f1e25] text-[#fdfcfe] rounded-md" />
    </View>
  );
}
