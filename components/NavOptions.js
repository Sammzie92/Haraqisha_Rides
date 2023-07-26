import {Image, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: require('../assets/kisspng-taxi-car.png'),
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image:require('../assets/food_order.png'),
        screen: "EatScreen",
    },
];
const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return(
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-4 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}            
            >
                <View style={tw`${!origin && 'opacity-20'}`} >
                    <Image
                    style={{ width:130, height:123, resizeMode:'contain'}}
                    source={item.image}
                    />
                    <Text style={tw `mt-2 text-lg font-semibold`} >{item.title}</Text>
                    <Icon
                    style={tw `bg-black p-2 rounded-full w-10 mt-4`}
                        name="arrowright" 
                        type='antdesign'
                        color="white"   
        />
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavOptions

