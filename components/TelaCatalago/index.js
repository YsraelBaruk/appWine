import { Image, Text, View } from "react-native";
import estilos from "./estilo";

const TelaCatalago = ({props, vinho})=>{
    return (
        <ScrollView>
            <View style={estilos.view}>
                <Text style={estilos.Ttitulo}>Nossos vinhos</Text>
                <Text style={estilos.Ttexto}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
            </View>
            <View
                onTouchEnd={() => {props.navigation.navigate('Detalhes', vinho)}}
            >
                <Text>{vinho.titulo}</Text>
                <Text>{vinho.texto}</Text>
                <Image source={vinho.imagem}/>
            </View>
        </ScrollView>
    );
}

export default TelaCatalago;