import { View, ScrollView, FlatList } from "react-native";
import BoxCatalago from "./BoxCatalago";

export default function TelaCatalago () {
    const vinho = [
        {
            id: "1",
            titulo:"Nossos vinhos",
            texto: "Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.",
        },
        {
            id:"2",
            nome:"Chatigny Chardonnay",
            detalhes:"Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.",
            img: require("../../assets/vinho-branco.jpg"),
        },
    ];
    return(
        <ScrollView>
            <View>
                <FlatList
                data={vinho}
                renderItem={({item})=>
                <BoxCatalago
                    titulo={item.titulo}
                    texto={item.texto}
                    nome={item.nome}
                    detalhes={item.detalhes}
                    img={item.img}
                />
            }
                keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    )
}