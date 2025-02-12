import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, TouchableOpacity, View } from 'react-native';

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export default function Participant({ name, onRemove }: Readonly<ParticipantProps>) {
  return (
    <View className="flex flex-row gap-4 bg-[#1f1e25] items-center mb-3">
      <Text className="flex-1 text-[#ffffff] ml-4">{name}</Text>
      <TouchableOpacity
        className="w-[56px] h-[56px] rounded-[5px] bg-[#e23c44] flex justify-center items-center"
        onPress={onRemove}>
        <FontAwesome
          name="trash-o"
          size={24}
          color="#ffffff"
        />
      </TouchableOpacity>
    </View>
  );
}
