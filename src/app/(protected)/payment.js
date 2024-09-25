import Ionicons from "@expo/vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([{
    "id": 1,
    "nome": "Humphrey Aggio"
  }, {
    "id": 2,
    "nome": "Trumaine Belshaw"
  }, {
    "id": 3,
    "nome": "Ardys Mor"
  }, {
    "id": 4,
    "nome": "Chickie Rowell"
  }, {
    "id": 5,
    "nome": "Bale Keune"
  }, {
    "id": 6,
    "nome": "Remy Pullin"
  }, {
    "id": 7,
    "nome": "Alice Chatters"
  }, {
    "id": 8,
    "nome": "Nita Sapwell"
  }, {
    "id": 9,
    "nome": "Palmer Chinnock"
  }, {
    "id": 10,
    "nome": "Darrelle Wharrier"
  }, {
    "id": 11,
    "nome": "Rollin Cushelly"
  }, {
    "id": 12,
    "nome": "Jandy Nelm"
  }, {
    "id": 13,
    "nome": "Haywood Lamar"
  }, {
    "id": 14,
    "nome": "Daron Shadfourth"
  }, {
    "id": 15,
    "nome": "Janith Denes"
  }, {
    "id": 16,
    "nome": "Guenevere Aldhous"
  }, {
    "id": 17,
    "nome": "Martyn Burdekin"
  }, {
    "id": 18,
    "nome": "Patric Grzeszczak"
  }, {
    "id": 19,
    "nome": "Grange Watting"
  }, {
    "id": 20,
    "nome": "Zora Cazin"
  }, {
    "id": 21,
    "nome": "Rinaldo Antoniazzi"
  }, {
    "id": 22,
    "nome": "Teddie Orthmann"
  }, {
    "id": 23,
    "nome": "Fan Rymell"
  }, {
    "id": 24,
    "nome": "Levi Salmen"
  }, {
    "id": 25,
    "nome": "Hastings Sigars"
  }, {
    "id": 26,
    "nome": "Saul Bartleet"
  }, {
    "id": 27,
    "nome": "Carley Honeyghan"
  }, {
    "id": 28,
    "nome": "Alfred Stanfield"
  }, {
    "id": 29,
    "nome": "Natalina Tysack"
  }, {
    "id": 30,
    "nome": "Rivy Clelle"
  }, {
    "id": 31,
    "nome": "Kaylil Chiplen"
  }, {
    "id": 32,
    "nome": "Rianon D'Adamo"
  }, {
    "id": 33,
    "nome": "Ab Giraudoux"
  }, {
    "id": 34,
    "nome": "Olly Darrach"
  }, {
    "id": 35,
    "nome": "Danila Feldmesser"
  }]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false)

  return (
    <View style={styles.content}>
      <View style={styles.inputView}>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <TextInput
          placeholder="Valor"
          keyboardType="decimal-pad"
          style={styles.inputValor}
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View style={styles.inputView}>
        <Picker
          selectedValue={id}
          onValueChange={(itemVlaue, index) => {
            setId(itemVlaue);
          }}
          style={{ width: "100%" }}
        >
          {sugestoes?.map((item) => {
            return (
              <Picker.Item
                key={item.id}
                label={item.nome}
                value={item.id}
              />
            );
          })}
        </Picker>
      </View>
      <View style={styles.inputView}>
        {
          viewCalendar && <DateTimePicker value={data} onChange={(event, selectedDate)=>setData(selectedDate)} />
        }
       
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="Observações" />
      </View>
      <View style={styles.contentButtons}>
        <Button title="Salvar" />
        <Button title="Continuar" />
        <Button title="Cancelar" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },

  contentButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
    padding: 10,
  },

  inputValor: {
    flex: 1,
    textAlign: "right",
    padding: 10,
  },
});
