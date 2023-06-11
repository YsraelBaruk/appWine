import {View, ScrollView, FlatList} from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import BoxContato from './BoxContato';

export default function TelaContato() {

  const conex = [
    {
        id: "1",
        titulo: "Entre em contato conosco para comprar nossos produtos",
    },
    {
        id: "2",
        icone: <FontAwesome name="phone" size={50} color="#400303" />,
        texto: "Telefone:",
        descricao: "+55 21 000000000",
    },
    {
        id: "3",
        icone: <Entypo name="location-pin" size={50} color="#400303" />,
        texto: "Endereço:",
        descricao: "Av. 123, 222 - Rio de Janeiro RJ ",
    },
    {
        id: "4",
        icone: <MaterialIcons name="email" size={50} color="#400303" />,
        texto: "Email:",
        descricao: "preferida@adega.com.br",
    },
    {
        id: "5",
        icone: <FontAwesome name="instagram" size={50} color="#400303" />,
        texto: "Instagram:",
        descricao: "@adegapreferida",
    }
  ];
 
  return (
    <ScrollView>
        <View style={estilo.container2}>
          <FlatList
            data={conex}
            renderItem={({item})=>
              <BoxContato
                  titulo={item.titulo}
                  icone={item.icone}
                  texto={item.texto}
                  descricao={item.descricao}
              />
            }
            keyExtractor={item => item.id}
          />     
        </View>
      </ScrollView>
  );
}