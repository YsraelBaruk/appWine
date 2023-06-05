import {View, ScrollView, FlatList} from 'react-native';
import TelaCatalago from './index';
import estilos from './estilo';

export default function vinho(props){
    const vinho = [
        {
            id:"1",
            titulo:"Chatigny Chardonnay",
            texto:"Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.",
            valor: "R$ 218,49",
            imagem:requite("../../assets/vinho-branco.jpg"),
        },
    ];
    return(
        <ScrollView>
        <View style={estilos.container}>
            <FlatList
                data={vinho}
                renderItem={({item})=>
                <TelaCatalago 
                    props={props}
                    vinho={item}
                />
                }
                keyExtractor={item => item.id}
            />
        </View>
        </ScrollView>
    )
}

//"R$ 179,99",
//"R$ 208,99",
//"R$ 379,99",
//"R$329,05",