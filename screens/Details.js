import React from 'react'
import { View, Text, Image, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { SHADOWS, SIZES, FONTS, COLORS, assets } from '../constants'
import { SubInfo, CircleButton, RectButton, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components'


const DetailsHeader = ({data, navigation}) => (
  <View style={{width: '100%', height: 373}}>
    <Image source={data.image} 
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={()=> navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
     <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
)

const Details = ({route, navigation}) => {
  console.log(route);
  const { data } = route.params;

  return (
   <SafeAreaView style={{flex: 1}}>
    <FocusedStatusBar
      barStyle = "dark-content"
      backgroundColor = "transparent"
      translucent={true}
    />

    <View style={{
      position: 'absolute',
      bottom: 0,
      marginLeft: '20%',
      paddingVertical: SIZES.font,
      // opacity: 50,
      zIndex: 1,
      backgroundColor: 'rgba(255,255,255,0.5',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <RectButton 
      minWidth = {170}

       fontSize={SIZES.large}
        {...SHADOWS.dark}
      />
    
    </View>
      <FlatList 
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item}/>}
        keyExtractor={(item)=> item.id}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={ ()=> (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo/>
            <View style={{padding: SIZES.font}}>
                <DetailsDesc data={data}/>

                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                    fontFamily: FONTS.semiBold
                  }}>
                      current bid
                  </Text>
                )}
            </View>
          </React.Fragment>
        )}
      />
   </SafeAreaView>
  )
}

export default Details
