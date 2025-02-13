import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Participant from '../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Atenção', 'Participante já adicionado.');
    }

    if (participantName === '' || !participantName) {
      return Alert.alert('Atenção', 'Informe o nome do participante.');
    }

    setParticipants((prevState) => {
      return [...prevState, participantName];
    });
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Atenção', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => {
          Alert.alert('Sucesso', `Participante ${name} removido com sucesso.`);
          setParticipants((prevState) => {
            return prevState.filter((participant) => participant !== name);
          });
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View className="flex flex-1 bg-[#131016] p-6">
      <Text className="text-[24px] text-white font-bold mt-12">Baile das Máscaras</Text>
      <Text className="text-[16px] text-[#6b6b6b]">Sábado, 15 de Novembro de 2025.</Text>
      <View className="flex flex-row gap-4 mt-9 mb-11">
        <TextInput
          keyboardType="default"
          placeholder="Nome do Participante"
          placeholderTextColor={'#6b6b6b'}
          className="flex-1 h-[56px] bg-[#1f1e25] text-[#fff] p-4 rounded-md"
          onChangeText={(text) => setParticipantName(text)}
          value={participantName}
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
