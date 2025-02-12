import AntDesign from '@expo/vector-icons/AntDesign';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Participant from '../components/Participant';

export default function Home() {
  const participants = [
    'Ícaro Almeida',
    'João da Silva',
    'Maria Oliveira',
    'Pedro Henrique',
    'Ana Carolina',
    'José Alves',
    'Carlos Eduardo',
    'Fernanda Souza',
    'Ricardo Santos',
    'Mayanderson Gomes',
  ];

  function handleParticipantAdd() {
    if (participants.includes('Ícaro Almeida')) {
      return Alert.alert('Atenção', 'Participante já adicionado.');
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Atenção', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => Alert.alert('Sucesso', `Participante ${name} removido com sucesso.`),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
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

      <FlatList
        keyExtractor={(item) => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View className="flex items-center justify-center mt-12">
              <Text className="text-[16px] text-[#6b6b6b]">Nenhum participante adicionado.</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
