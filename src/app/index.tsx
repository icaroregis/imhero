import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Home() {
  function handleParticipantAdd() {
    console.log('Adicionar participante');
  }

  return (
    <View className="flex flex-1 bg-[#131016] p-6">
      <Text className="text-[24px] text-white font-bold mt-12">Nome do Evento</Text>
      <Text className="text-[16px] text-[#6b6b6b]">Sexta, 4 de Novembro de 2022.</Text>
      <View className="flex flex-row gap-4 mt-9 mb-11">
        <TextInput
          keyboardType="default"
          placeholder="Nome do Participante"
          placeholderTextColor={'#6b6b6b'}
          className="flex-1 h-[56px] bg-[#1f1e25] text-[#fff] p-4 rounded-md"
        />
        <TouchableOpacity
          className="w-[56px] h-[56px] rounded-[5px] bg-[#31cf67] flex justify-center items-center"
          onPress={handleParticipantAdd}>
          <AntDesign
            name="plus"
            size={24}
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
