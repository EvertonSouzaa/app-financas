import React, { useState } from "react";
import { Platform } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Background,
  Container,
  TituloApp,
  LogoApp,
  AreaInput,
  Input,
  BotaoEntrar,
  TextoBotao,
  LinkCadastrar,
  LinkTexto,
  LinkRecuperarSenha,
  BotaoGoogle,
  TextoBotaoGoogle,
  ScrollArea,
} from "../../styles/StylesLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <Background>
      <TituloApp>Controle de Gastos</TituloApp>
      <ScrollArea>
        <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
          <LogoApp source={require("../../img/faturamento.png")} />

          <AreaInput>
            <MaterialIcons name="email" size={25} color="#9438f5" />
            <Input
              autoCompleteType="email"
              keyboardType="email-address"
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </AreaInput>

          <AreaInput>
            <FontAwesome5 name="key" size={25} color="#9438f5" />
            <Input
              autoCompleteType="password"
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </AreaInput>

          <BotaoEntrar onPress={() => {}}>
            <TextoBotao>Entrar</TextoBotao>
          </BotaoEntrar>

          <LinkCadastrar onPress={() => navigation.navigate("Cadastrar")}>
            <LinkTexto>Cadastrar</LinkTexto>
          </LinkCadastrar>

          <LinkRecuperarSenha>
            <LinkTexto>Esqueceu a senha?</LinkTexto>
          </LinkRecuperarSenha>

          <BotaoGoogle onPress={() => {}}>
            <AntDesign name="google" size={30} color="#fff" />
            <TextoBotaoGoogle>Entrar com Google</TextoBotaoGoogle>
          </BotaoGoogle>
        </Container>
      </ScrollArea>
    </Background>
  );
}
