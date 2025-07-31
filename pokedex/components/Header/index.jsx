import { View, Text, Pressable } from 'react-native'
import {styles} from "./styles";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

const imageSource = require("@/assets/images/header.jpg");

export default function Header({title, back = false}) {
    const router = useRouter();

  return (
    <View styles={styles.container}>
        <View style={styles.ImageContainer}>
            <Image source={imageSource} style={styles.image}/>
        </View>
        <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row", alignItems: "center"}}>
                {
                    back &&
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="black"/>
                    </Pressable>
                }
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    </View>
  )
}