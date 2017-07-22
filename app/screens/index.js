import {Navigation} from 'react-native-navigation';

//import tabs screen
import Contacts from './tabs/Contacts';
import Chats from './tabs/Chats';
import Settings from './tabs/Settings';

//import push screen
import SignIn from './push/SignIn';
import PinVerification from './push/PinVerification';
import NewContact from './push/NewContact';
import Messages from './push/Messages';
import NewChat from './push/NewChat';
import NewGroup from './push/NewGroup';
import NewGroupForm from './push/NewGroupForm';

export function registerScreens(){
  //tabs
  Navigation.registerComponent('tabs.Contacts', ()=> Contacts);
  Navigation.registerComponent('tabs.Chats', ()=> Chats);
  Navigation.registerComponent('tabs.Settings', ()=> Settings);

  //push
  Navigation.registerComponent('push.SignIn', ()=> SignIn);
  Navigation.registerComponent('push.PinVerification', ()=> PinVerification);
  Navigation.registerComponent('push.NewContact', ()=> NewContact);
  Navigation.registerComponent('push.Messages', ()=> Messages);
  Navigation.registerComponent('push.NewChat', ()=> NewChat);
  Navigation.registerComponent('push.NewGroup', ()=> NewGroup);
  Navigation.registerComponent('push.NewGroupForm', ()=> NewGroupForm);
}

export function startSingleScreenApp(){
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'push.SignIn', // unique ID registered with Navigation.registerScreen
      title: 'Your Phone', // title of the screen as appears in the nav bar (optional)
    },
  });
}

export function startTabBasedApp(){
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Contacts',
        screen: 'tabs.Contacts', // this is a registered name for a screen
        title: 'Contacts',
        navigatorStyle: {
          navBarHidden: true
        }
      },
      {
        label: 'Chats',
        screen: 'tabs.Chats',
        title: 'Chats',
        navigatorStyle: {
          navBarHidden: true
        }
      },
      {
        label: 'Settings',
        screen: 'tabs.Settings',
        title: 'Settings',
        navigatorStyle: {
          navBarHidden: true
        }
      }
    ],
  });
}
