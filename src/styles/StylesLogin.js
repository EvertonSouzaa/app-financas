import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #282a2d;
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  margin-top: 30px;
`;
export const ScrollArea = styled.ScrollView``;
export const TituloApp = styled.Text`
  font-size: 35px;
  color: #9438f5;
  text-align: center;
  font-weight: bold;
  margin-top: 50px;
`;
export const LogoApp = styled.Image`
  margin-bottom: 40px;
  height: 150px;
  width: 150px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#e8f0fe",
})`
  background: #aa88ff;
  width: 70%;
  font-size: 17px;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  margin-left: 10px;
  margin-top: 5px;
`;
export const BotaoEntrar = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #9438f5;
  width: 80%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;
export const TextoBotao = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;
export const LinkCadastrar = styled.TouchableOpacity`
  margin-top: 15px;
  margin-bottom: 9px;
`;
export const LinkTexto = styled.Text`
  color: #aa88ff;
  font-size: 16px;
`;

export const LinkRecuperarSenha = styled.TouchableOpacity`
  margin-top: 15px;
  margin-bottom: 9px;
`;

export const BotaoGoogle = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #9438f5;
  width: 80%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;
export const TextoBotaoGoogle = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;
