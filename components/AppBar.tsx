import { Colors } from "@/constants/Colors";

import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import Icon from "react-native-vector-icons/FontAwesome6";
import { commonStyles } from "@/styles/common";

export function AppBar() {
    return (
        <View style={commonStyles.appBar}>
            <ThemedText style={commonStyles.appTitle}>
                <Icon name="heart" solid size={24} color={Colors.brandPink} style={commonStyles.leadingIcon} />
                Vested
            </ThemedText>
        </View>
    );
}