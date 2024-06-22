import axios from 'axios'
import React, { useState } from 'react'
import { View, StyleSheet, ActivityIndicator, Text, SafeAreaView, StatusBar } from 'react-native'
import WeatherSearch from './src/components/weatherSearch'
import WeatherInfo from './src/components/weatherInfo'
import { API_KEY, BASE_URL } from './src/constant'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const searchWeather = (location) => {
    setIsLoading(true)
    setErrorMessage('')

    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data
        data.visibility /= 1000
        data.visibility = data.visibility.toFixed(2)
        data.main.temp -= 273.15
        data.main.temp = data.main.temp.toFixed(2)
        setWeatherData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setErrorMessage('Something went wrong. Please try again with a correct city name.')
        setIsLoading(false)
      })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
     <StatusBar />
     <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      {weatherData && !isLoading && <WeatherInfo weatherData={weatherData} />}
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
})

export default App
