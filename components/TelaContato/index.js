import React from "react";
import { View, Text, ScrollView } from "react-native-web";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'

export default function TelaContato () {
    return (
        <View>
            <View>
                <FontAwesome name='phone' size={50} color={'#400303'} />
                <Text>Telefone:</Text>
                <Text>+55 21 000000000</Text>
            </View>
            <View>
                <Entypo name='location-pin' size={50} color={'#400303'} />
                <Text>Endereço:</Text>
                <Text>Av. 123, 222 - Rio de Janeiro RJ </Text>
            </View>
            <View>
                <MaterialIcons name='email' size={50} color={'#400303'} />
                <Text>Email:</Text>
                <Text>preferida@adega.com.br</Text>
            </View>
            <View>
                <FontAwesome name='instagram' size={50} color={'#400303'} />
                <Text>Instagram:</Text>
                <Text>@adegapreferida</Text>
            </View>
        </View>
    )
}