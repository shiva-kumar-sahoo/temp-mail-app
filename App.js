import "react-native-gesture-handler";
import Navigation from "./Navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
