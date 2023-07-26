import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Image, SafeAreaView, Text, View } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import { Icon } from 'react-native-elements'


const HomeScreen = () => {
    const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full pt-7`}>
      <View style={tw`p-5`} >
        <Image 
        source={require('../assets/text-only.png')}
        style={{
            width:150, height: 100, resizeMode: 'contain'
        }}
        />

        <GooglePlacesAutocomplete
            placeholder='Where From?'
            styles={{
                container: {
                  flex: 0,
                },
                textInput: {
                  fontSize: 18,
                },
              }}
              onPress={(data, details = null) => {
                dispatch(setOrigin ({
                    location:details.geometry.location,
                    description: data.description
                }))
                dispatch(setDestination(null))

              }}
              
              fetchDetails={true}
              returnKeyType={"search"}
              minLength={2}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language:'en'
              }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
        />

        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

