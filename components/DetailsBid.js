import React from 'react'
import { View, Text, Image,  } from 'react-native'
import { SHADOWS, SIZES, FONTS, COLORS, assets } from '../constants'
import { EthPrice, } from './SubInfo'

const DetailsBid = ({ bid }) => {
  return (
   <View style={{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.base,
    marginVertical: SIZES.base * 2,
   }}>
    <Image source={bid.image}
      resizeMode="contain"
      style={{width: 48, height: 28}}
    />
    <View>
    <Text style={{
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.small - 2,
      color: COLORS.primary,

    }}>
      Bid placed by {bid.name}
    </Text>

    <Text style={{
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.small - 2,
      color: COLORS.secondary,

    }}>
      {bid.date}
    </Text>
    </View>
    <EthPrice price={bid.price}/>
   </View>
  )
}

export default DetailsBid
