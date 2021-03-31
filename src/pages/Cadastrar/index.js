import React, { useState } from "react";

import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Background,
  Container,
  Avatar,
  AreaInput,
  Input,
  BotaoEntrar,
  TextoBotao,
  ScrollArea,
  AreaAvatar,
  AlterarAvatar,
  AreaBotaoAvatar,
} from "../../styles/StylesCadastrar";

import Header from "../../components/HeaderCadastrar";

export default function Cadastrar() {
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState("");

  return (
    <Background>
      <Header />
      <ScrollArea>
        <Container>
          <AreaAvatar>
            <Avatar source={require("../../img/avatar.png")} />
            <AreaBotaoAvatar>
              <AlterarAvatar onPress={() => {}}>
                <MaterialCommunityIcons
                  name="image-search"
                  size={30}
                  color="#e8f0fe"
                />
              </AlterarAvatar>
            </AreaBotaoAvatar>
          </AreaAvatar>

          <AreaInput>
            <Entypo name="user" size={25} color="#9438f5" />
            <Input
              placeholder="Nome "
              autoCorrect={false}
              autoCapitalize="none"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
          </AreaInput>

          <AreaInput>
            <MaterialIcons name="email" size={25} color="#9438f5" />
            <Input
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
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </AreaInput>
          <AreaInput>
            <FontAwesome5 name="key" size={25} color="#9438f5" />
            <Input
              placeholder="Confirme a Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={passwordCorrect}
              onChangeText={(text) => setPasswordCorrect(text)}
              secureTextEntry
            />
          </AreaInput>

          <BotaoEntrar onPress={() => {}}>
            <TextoBotao>Cadastrar</TextoBotao>
          </BotaoEntrar>
        </Container>
      </ScrollArea>
    </Background>
  );
}
