import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 

const EditarVaga = ({ route, navigation }) => {
  const { vaga } = route.params;

  const local = `http://10.110.12.19:8080/vagas/editar/${vaga.id_vaga}`;
  const nuvem = `https://geosenai.azurewebsites.net/vagas/editar/${vaga.id_vaga}`;

  const [areaVagaEdt, setAreaVagaEdt] = useState("");
  const [nomeVagaEdt, setNomeVagaEdt] = useState("");
  const [descricaoVagaEdt, setDescricaoVagaEdt] = useState("");
  const [requisitosVagaEdt, setRequisitosVagaEdt] = useState("");
  const [cargaHorariaVagaEdt, setCargaHorariaVagaEdt] = useState("");
  const [salarioVagaEdt, setSalarioVagaEdt] = useState("");
  const [contatoVagaEdt, setContatoVagaEdt] = useState("");

  useEffect(() => {
    setAreaVagaEdt(vaga.area_vaga);
    setNomeVagaEdt(vaga.nome_vaga);
    setDescricaoVagaEdt(vaga.desc_vaga);
    setRequisitosVagaEdt(vaga.requisitos_vaga);
    setCargaHorariaVagaEdt(vaga.carga_vaga);
    setSalarioVagaEdt(vaga.salario_vaga);
    setContatoVagaEdt(vaga.contato_vaga);
  }, []);

  const salvarEdicao = () => {
    const vagaEditada = {
      area_vaga: areaVagaEdt,
      nome_vaga: nomeVagaEdt,
      desc_vaga: descricaoVagaEdt,
      requisitos_vaga: requisitosVagaEdt,
      carga_vaga: cargaHorariaVagaEdt,
      salario_vaga: salarioVagaEdt,
      contato_vaga: contatoVagaEdt,
    };

    fetch(local, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vagaEditada),
    })
      .then((response) => {
        if (response.ok) {
          Alert.alert("Sucesso", "Vaga editada com sucesso");
          navigation.navigate('TelaVagas');
        } else {
          throw new Error("Erro ao editar vaga");
        }
      })
      .catch((error) => {
        console.error("Erro ao editar vaga:", error);
        Alert.alert(
          "Erro",
          "Erro ao editar vaga. Por favor, tente novamente mais tarde."
        );
      });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.voltarSeta} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={30} color="black" />
      </Pressable>

      <View style={styles.containerForm}>
        <Text style={styles.headerText}>Editar vaga</Text>
        <TextInput
          style={styles.input}
          placeholder="Área da Vaga* Ex: TI, Mecânica"
          placeholderTextColor="gray"
          value={areaVagaEdt}
          onChangeText={(text) => setAreaVagaEdt(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome da Vaga*"
          placeholderTextColor="gray"
          value={nomeVagaEdt}
          onChangeText={(text) => setNomeVagaEdt(text)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição da Vaga*"
          placeholderTextColor="gray"
          value={descricaoVagaEdt}
          multiline
          numberOfLines={4}
          onChangeText={(text) => setDescricaoVagaEdt(text)}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Requisitos da Vaga*"
          placeholderTextColor="gray"
          value={requisitosVagaEdt}
          multiline
          numberOfLines={4}
          onChangeText={(text) => setRequisitosVagaEdt(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Carga Horária*"
          placeholderTextColor="gray"
          value={cargaHorariaVagaEdt}
          onChangeText={(text) => setCargaHorariaVagaEdt(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Salário"
          placeholderTextColor="gray"
          value={salarioVagaEdt}
          onChangeText={(text) => setSalarioVagaEdt(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contato da Vaga*"
          placeholderTextColor="gray"
          value={contatoVagaEdt}
          onChangeText={(text) => setContatoVagaEdt(text)}
        />
        <View style={styles.containerBtnForm}>
          <Pressable style={styles.btnEditar} onPress={salvarEdicao}>
            <Text style={styles.buttonText}>Salvar alterações</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    flex: 1,
    padding: 20,
  },
  containerForm: {
    verticalAlign: "middle",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  containerBtnForm: {
    alignItems: "flex-end",
  },
  voltarSeta: {
    marginTop: 40,
  },
  input: {
    height: 40,
    borderColor: "#E8E8E8",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
  },
  btnEditar: {
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  seta: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default EditarVaga;
