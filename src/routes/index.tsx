import { useTheme } from "native-base";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import OneSignal, {
  NotificationReceivedEvent,
  OSNotification,
} from "react-native-onesignal";

import { AppRoutes } from "./app.routes";
import { Notification } from "../components/Notification";

export function Routes() {
  const { colors } = useTheme();
  const [noti, setNoti] = useState<OSNotification>();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
    const unuSubscribe = OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent: NotificationReceivedEvent) => {
        const response = notificationReceivedEvent.getNotification();
        setNoti(response);
      }
    );

    return () => unuSubscribe;
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />

      {noti?.title && (
        <Notification data={noti} onClose={() => setNoti(undefined)} />
      )}
    </NavigationContainer>
  );
}
