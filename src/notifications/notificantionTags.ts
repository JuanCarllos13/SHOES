import OneSignal from "react-native-onesignal";

export function tagUserEmailCreate(email: string){
  OneSignal.sendTag('user_email', email)
}

export function tagUserEmailDelete(){
  OneSignal.deleteTag('user_email')
}

export function tagUserInfoCreate(){
  OneSignal.sendTags({
    "user_name": "Juan",
    "user_email": "carlos@gmail.com"
  })
}

export function tagCartUpdate(itemsCart: string){
  OneSignal.sendTag('cart_items_count', itemsCart)
}