import React, { useState, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Image,
} from "react-native";

const TelaSalas = ({ navigation, route }) => {
  const [salas, setSalas] = useState([]);
  const [atualizarLista, setAtualizarLista] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(0);
  const salasPorPagina = 5;
  const [existeProximo, setExisteProximo] = useState(true);
  const [existeAnterior, setExisteAnterior] = useState(false);

  const { link, andar } = route.params;

  const nuvem = "https://appbackend1.azurewebsites.net/salas";

  useEffect(() => {
    if (atualizarLista) {
      fetch(link, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setSalas(data))
        .catch((error) => Alert.alert("Erro ao obter salas:", error))
        .finally(() => setAtualizarLista(false));
    }
  }, [atualizarLista, link]);

  useEffect(() => {
    setPaginaAtual(0);
  }, [searchText]);

  useEffect(() => {
    setExisteProximo((paginaAtual + 1) * salasPorPagina < salas.length);
    setExisteAnterior(paginaAtual > 0);
  }, [paginaAtual, salas.length]);

  const renderizarSalasPaginaAtual = () => {
    const inicio = paginaAtual * salasPorPagina;
    const fim = inicio + salasPorPagina;
    return salas
      .filter((sala) =>
        sala.nomeSala.toLowerCase().includes(searchText.toLowerCase())
      )
      .slice(inicio, fim)
      .map((sala) => (
        <Pressable
          key={sala.id}
          style={styles.ButtonTurmas}
          onPress={() => navigation.navigate("TelaFoto", { sala: sala })}
        >
          <Text style={styles.buttonText}>{sala.nomeSala}</Text>
        </Pressable>
      ));
  };

  const avancarPagina = () => {
    if (existeProximo) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const retrocederPagina = () => {
    if (existeAnterior) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const atualizarListaSalas = () => {
    setAtualizarLista(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("./../assets/icons/arrow-left-solid.svg")}
            style={{ height: 50, width: 50 }}
          />
        </Pressable>

        <Image
          source={require("./../assets/icons/building-solid.svg")}
          style={{ ...styles.icon, height: 50, width: 50 }}
        />
      </View>

      <Text style={styles.headerTitle}>Salas - {andar}</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.Buttons}>{renderizarSalasPaginaAtual()}</View>
      </ScrollView>

      <View style={styles.paginacao}>
        {existeAnterior && (
          <Pressable style={styles.botaoPaginacao} onPress={retrocederPagina}>
            <Image
              source={require("./../assets/icons/chevron-left-solid.svg")}
              style={{ height: 25, width: 25 }}
            />
          </Pressable>
        )}

        <Text style={styles.paginaAtual}>{paginaAtual + 1}</Text>

        {existeProximo && (
          <Pressable style={styles.botaoPaginacao} onPress={avancarPagina}>
            <Image
              source={require("./../assets/icons/chevron-right-solid.svg")}
              style={{ height: 25, width: 25 }}
            />
          </Pressable>
        )}
      </View>

      <Pressable style={styles.atualizarButton} onPress={atualizarListaSalas}>
        <Image
          source={require("./../assets/icons/arrows-rotate-solid.svg")}
          style={{...styles.iconPlus, height: 25, width: 25 }}
        />
        <Text style={styles.buttonAttText}>Atualizar Lista</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    padding: 20,
  },
  headerTitle: {
    textAlign: "center",
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  Buttons: {
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  ButtonTurmas: {
    backgroundColor: "#ff0000",
    padding: 30,
    marginBottom: 20,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  atualizarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#02234D",
    padding: 13,
    borderRadius: 30,
    width: 300,
    height: 75,
    marginTop: 20,
  },
  buttonAttText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  iconPlus: {
    paddingRight: 14,
  },
  backButton: {
    marginTop: 40,
    marginRight: 10,
  },
  icon: {
    alignSelf: "flex-end",
    marginLeft: 20,
  },
  searchBar: {
    width: "80%",
    fontSize: 25,
    backgroundColor: "#E8E8E8",
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    borderBottomColor: "black",
    borderTopColor: "#E8E8E8",
    borderLeftColor: "#E8E8E8",
    borderRightColor: "#E8E8E8",
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
  },
  paginacao: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  botaoPaginacao: {
    paddingHorizontal: 10,
  },
  paginaAtual: {
    fontSize: 25,
    marginHorizontal: 10,
  },
});

export default TelaSalas;
