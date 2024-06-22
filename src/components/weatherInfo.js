import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = ({ weatherData }) => {
  const {
    name,
    weather,
    main: { temp },
    visibility,
    wind: { speed },
  } = weatherData

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{name}</Text>
      <Text style={styles.temperature}>{temp}°C</Text>
      <View style={styles.weatherContainer}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={styles.weatherMain}>{weather[0].main}</Text>
      </View>
      <Text style={styles.weatherDescription}>{weather[0].description}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Visibility:</Text>
        <Text style={styles.infoValue}>{visibility} km</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Wind Speed:</Text>
        <Text style={styles.infoValue}>{speed} m/s</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  city: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherMain: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  weatherDescription: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    marginLeft: 10,
  },
})

export default WeatherInfo
