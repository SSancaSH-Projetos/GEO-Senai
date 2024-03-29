// Tela para exibir todas as informações de uma turma em específico, previamente cadastrada
// em CadastroTurma, na versão para administrador do GEO SENAI

import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InformacoesTurma = ({ route, navigation }) => {
  const TelaFoto = () => {
    navigation.navigate("TelaFoto");
  };

  const botaoMapa = () => {
    navigation.navigate("TelaMapa");
  };
  
  const { turma } = route.params;

  const local = `http://10.110.12.19:8080/turmas/deletar/${turma.id_turma}`;
  const nuvem = `https://geosenai.azurewebsites.net/turmas/deletar/${turma.id_turma}`;

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      <View style={styles.redBack}>
        <View
          style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}
        >
          <Text style={styles.titulo}>{turma.codigo_turma}</Text>
          <Text style={styles.txtInfoCurso}>Sala: {turma.sala_turma}</Text>
          <Text style={styles.txtInfoCurso}>
            Duração do curso: {turma.duracao_curso}
          </Text>

          <Pressable
            style={[styles.botãoVerMapa, { borderWidth: 1 }]}
            onPress={() => console.log("Turmas pressionados")}
          >
            <Text style={styles.texto}>Ver no mapa</Text>
          </Pressable>
        </View>

        <View
          style={[styles.quadro, styles.roundedCorners, styles.quadroPadding]}
        >
          <Pressable
            style={[styles.botaoFoto, { borderWidth: 1 }]}
            onPress={TelaFoto}
          >
            <Text style={styles.texto}>Foto</Text>
          </Pressable>

          <Pressable
            style={[styles.botaoHorario, { borderWidth: 1 }]}
            onPress={() =>
              navigation.navigate("TelaHorarios", { turma: turma })
            }
          >
            <Text style={styles.texto}>Horários</Text>
          </Pressable>

          <Pressable
            style={[styles.botaoLocalizarse, { borderWidth: 1 }]}
            onPress={botaoMapa}
          >
            <Text style={styles.texto}>Localize-se</Text>
          </Pressable>
        </View>

        <View
          style={[styles.quadro3, styles.roundedCorners, styles.quadroPadding]}
        >
          <Text style={styles.titulo}>{turma.nome_curso}</Text>
          <View style={styles.textoDoMeio}>
            <Text style={styles.descTexto}>{turma.desc_curso}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 120,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  redBack: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  quadro: {
    width: "49%",
    height: "46%",
    backgroundColor: "red",
    marginBottom: 5,
    alignItems: "center",
  },
  quadro3: {
    width: "100%",
    height: "50%",
    backgroundColor: "red",
    marginTop: "1%",
  },
  botãoVerMapa: {
    marginTop: "8%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 25,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  botaoFoto: {
    marginTop: "5%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 30,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  botaoHorario: {
    marginTop: "5%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 30,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  botaoLocalizarse: {
    marginTop: "5%",
    borderRadius: 100,
    backgroundColor: "white",
    height: 30,
    width: 90,
    alignItems: "center",
    borderColor: "black",
  },
  titulo: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  txtInfoCurso: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  textoDoMeio: {
    backgroundColor: "white",
    marginLeft: "3%",
    marginRight: "3%",
    borderRadius: 10,
    height: "60%",
    alignItems: "center",
    alignContent: "center",
  },
  descTexto: {
    fontSize: 16,
    padding: 10,
  },
  roundedCorners: {
    borderRadius: 20,
  },
  quadroPadding: {
    paddingHorizontal: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default InformacoesTurma;
