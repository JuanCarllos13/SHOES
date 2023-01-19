import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import OneSignal, {
  NotificationReceivedEvent,
  OSNotification,
} from "react-native-onesignal";

import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";
import { Notification } from "./src/components/Notification";

import { CartContextProvider } from "./src/contexts/CartContext";
import { tagUserInfoCreate } from "./src/notifications/notificantionTags";

OneSignal.setAppId("a46a5685-a797-4f4b-b2dc-ab9510cc2ad1");

// OneSignal.setEmail("juan@gmail.com");

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // tagUserInfoCreate("juan@gmail.com")
  tagUserInfoCreate();

  useEffect(() => {
    const unuSubscribe = OneSignal.setNotificationOpenedHandler((response) => {
      if(response.action){
        // console.log(response.action.actionId === '1' ? "")

      }
  
    })
    return () => unuSubscribe
  },[])


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>

      
    </NativeBaseProvider>
  );
}
