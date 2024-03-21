import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TelaHorarios = ({ navigation, route }) => {
  const CaminhoQr = () => {
    navigation.navigate("TelaQR");
  };

  const { turma } = route.params;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </Pressable>

      {/* Título */}
      <Text style={styles.txt_horarios}>Horários</Text>

      {/* Fundo Cinza */}
      <View style={styles.Fundo_Cinza}>
        {/* Quadros Cinzas Pequenos */}
        <View style={styles.quadroCinzaPequenoTitulo}>
          <Text style={styles.quadroTexto}>{turma.codigo_turma}</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Segunda</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Terça</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Quarta</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Quinta</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}>Sexta</Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
        <View style={styles.quadroCinzaPequeno}>
          <Text style={styles.quadroTexto}></Text>
        </View>
      </View>

      {/* Botão "Baixar QR" */}
      <Pressable
        style={[
          styles.BaixarQRButton,
          { borderWidth: 1, borderColor: "black" },
        ]}
        onPress={CaminhoQr}
      >
        <Text style={styles.buttonText}>Baixar QR</Text>
      </Pressable>
<<<<<<< HEAD

    
=======
>>>>>>> c423d7cb1ed10a1ca1e3f598a0af63540fdf87e8
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "#ff0000",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "flex-end",
  },
  logo: {
    width: 70,
    height: 53,
<<<<<<< HEAD
    position: 'absolute', // Mantenha apenas isso
=======
    top: 0,
    left: 0,
    position: "absolute",
>>>>>>> c423d7cb1ed10a1ca1e3f598a0af63540fdf87e8
  },
  Fundo_Cinza: {
    backgroundColor: "gray",
    width: "80%",
    height: 300,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  quadroCinzaPequenoTitulo: {
    backgroundColor: "#d3d3d3",
    width: "100%",
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  quadroCinzaPequeno: {
    backgroundColor: "#d3d3d3",
    width: "19%",
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  quadroTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
<<<<<<< HEAD

=======
  ADMButton: {
    backgroundColor: "#ff0000",
    padding: 13,
    borderRadius: "60%",
    alignItems: "center",
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
>>>>>>> c423d7cb1ed10a1ca1e3f598a0af63540fdf87e8
  BaixarQRButton: {
    backgroundColor: "#ff0000",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
  },
  buttonTextADM: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
  },
  txt_horarios: {
    fontSize: 25,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 40,
    marginLeft: 20,
  },
});

export default TelaHorarios;
