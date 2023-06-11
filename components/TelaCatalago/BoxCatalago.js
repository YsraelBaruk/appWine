import {StyleSheet} from 'react-native';
import {Image, Text, View, ScrollView, ImageBackground} from 'react-native';

const BoxCatalago = ({titulo, texto, nome, detalhes, img})=>{
    return(
        <ScrollView>
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.texto}>{texto}</Text>
            <ImageBackground
                style={estilo.card}
            >
                <Image
                    source={img}
                    style={estilo.img}
                />
                <Text style={estilo.nome}>{nome}</Text>
                <Text style={estilo.detalhes}>{detalhes}</Text>
            </ImageBackground>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 15,
    },
    card:{
        display: 'flex',
        backgroundColor: '#AB887C',
        padding: 10,
        
        justifyContent: 'center',
        flexWrap: 'wrap',
        // direction
        //flexDirection
    },
    img:{
        //margin
        marginLeft: 4,
        marginBottom: 2,
        marginTop: 2,
        marginRight: 2,
    },
    nome: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 10,
        margin: 5,
    },
    detalhes: {
        fontSize: 5,
        //margin
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
    },
});
export default BoxCatalago;