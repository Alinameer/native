import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="Trips"
        options={{ title: "Trips", headerShown: false }}
      />
      <Tabs.Screen
        name="aboutUs"
        options={{ title: "About Us", headerShown: false }}
      />
    </Tabs>
  )
}

export default _layout