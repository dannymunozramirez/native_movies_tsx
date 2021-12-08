import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {Movie} from '../interfaces/movieInterface';

const {width: windowWidth} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Principal Carousel */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        <HorizontalSlider title="On demand" movies={nowPlaying}/>
        <HorizontalSlider title="Popular" movies={popular}/>
        <HorizontalSlider title="Top Rated" movies={topRated}/>
        <HorizontalSlider title="Upcoming" movies={upcoming}/>
        
      </View>
    </ScrollView>
  );
};
