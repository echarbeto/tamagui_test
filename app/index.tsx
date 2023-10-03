import { useRouter } from "expo-router";
import {
  YStack
} from "tamagui";
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  type ItemProps = {
    item: {
      text: string;
    };
  };

  const data = Array.from({length: 50}, (_, i) => ({id: i, text: `Item ${i}`}));

  const Item = ({ item }: ItemProps) => {
  return (
    <Swipeable
      renderRightActions={() => (
        <View style={{ width: 100, backgroundColor: 'red', justifyContent: 'center' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text>
        </View>
      )}
    >
      <View style={{ height: 50, backgroundColor: 'white', justifyContent: 'center' }}>
        <Text>{item.text}</Text>
      </View>
    </Swipeable>
  );
};

  return (
    <MyStack>
      <YStack
        space="$5"
      >
        <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Item item={item} />}
      style={{ maxHeight: 400 }}
    />
      </YStack>
    </MyStack>
  );
}
