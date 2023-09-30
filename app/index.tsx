import { useRouter } from "expo-router";
import {
  Button,
  H1, Input, Label,
  Paragraph,
  SizableText, Theme,
  YStack
} from "tamagui";

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MyStack>
      <YStack
        space="$5"
      >
        <YStack space="$5">
        <Theme>
          <H1 textAlign="center">Theme name=null</H1>
          <Label>Label theme=null</Label>
          <Label theme="alt1">Label theme=alt1</Label>
          <Label theme="alt2">Label theme=alt2</Label>
          <Label theme="active">Label theme=active</Label>
          <Input />
          <Input theme="alt1" />
          <Input theme="alt2" />
          <Input theme="active" />
          <Button>Button theme=null</Button>
          <Button theme="alt1">Button theme=alt1</Button>
          <Button theme="alt2">Button theme=alt2</Button>
          <Button theme="active">Button theme=active</Button>
          <SizableText>SizableText theme=null</SizableText>
          <SizableText theme="alt1">SizableText theme=alt1</SizableText>
          <SizableText theme="alt2">SizableText theme=alt2</SizableText>
        </Theme>
      </YStack>
      <YStack space="$5">
          <Theme name="red">
            <H1 textAlign="center">Theme name=red</H1>
            <Label>Label theme=null</Label>
            <Label theme="alt1">Label theme=alt1</Label>
            <Label theme="alt2">Label theme=alt2</Label>
            <Label theme="active">Label theme=active</Label>
            <Input />
            <Input theme="alt1" />
            <Input theme="alt2" />
            <Input theme="active" />
            <Button>Button theme=null</Button>
            <Button theme="alt1">Button theme=alt1</Button>
            <Button theme="alt2">Button theme=alt2</Button>
            <Button theme="active">Button theme=active</Button>
            <SizableText>SizableText theme=null</SizableText>
            <SizableText theme="alt1">SizableText theme=alt1</SizableText>
            <SizableText theme="alt2">SizableText theme=alt2</SizableText>
          </Theme>
      </YStack>
      </YStack>
    </MyStack>
  );
}
