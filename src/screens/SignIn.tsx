import { useState } from "react";
import { Platform } from "react-native";
import { Heading, Icon, VStack, useTheme, KeyboardAvoidingView } from "native-base";
import { Envelope, Key } from "phosphor-react-native";

import Logo from "../assets/logo_primary.svg"

import Input from "../components/Input";
import Button from "../components/Button";

export default function SignIn() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const { colors } = useTheme()

  function handleSignIn() {
    console.log(name, password)
  }

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg="gray.600"
    >
      <VStack flex={1} justifyContent="center" alignItems="center" bg="gray.600" px={8} /* pt={24} */>
        <Logo />
        <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
          Acesse sua conta
        </Heading>
        <Input
          mb={4}
          placeholder="E-mail"
          InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
          onChangeText={setName}
        />
        <Input
          mb={8}
          placeholder="Senha"
          InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Button title="Entrar" w="full" onPress={handleSignIn} />
      </VStack>
    </KeyboardAvoidingView>
  )
}
