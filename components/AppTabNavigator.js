import { createBottomTabNavigator } from "react-navigation-tabs";
import BookDonateScreen from "../Screens/BookDonateScreen";
import BookRequestScreen from "../Screens/BookRequestScreen";

export const TabNavigator = createBottomTabNavigator({
    BookDonateScreen: BookDonateScreen,
    BookRequestScreen: BookRequestScreen,
  });
