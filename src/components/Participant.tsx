import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, TouchableOpacity, View } from 'react-native';
export default function Participant() {
  return (
    <View className="flex flex-row gap-4 bg-[#1f1e25] items-center mb-3">
      <Text className="flex-1 text-[#ffffff] ml-4">Icaro</Text>
      <TouchableOpacity className="w-[56px] h-[56px] rounded-[5px] bg-[#e23c44] flex justify-center items-center">
        <FontAwesome
          name="trash-o"
          size={24}
          color="#ffffff"
        />
      </TouchableOpacity>
    </View>
  );
}
