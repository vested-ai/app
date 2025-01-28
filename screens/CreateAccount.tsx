import { Text, StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { useState } from "react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { ThemedText } from "@/components/ThemedText";

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleAccountCreation = () => {
        // Implement account creation logic
    }

  return (
    <View style={styles.container}>
        <Text>Create an Account</Text>
        
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          autoComplete="given-name"
          autoCorrect={false}
          inputMode="text"
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          autoComplete="family-name"
          autoCorrect={false}
          inputMode="text"


        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
          autoCorrect={false}
          inputMode="email"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoComplete="new-password"
          autoCorrect={false}    
          inputMode="text"
          secureTextEntry={true}
        />

        <TouchableOpacity 
          style={[styles.button, styles.signupButton]}
          onPress={handleAccountCreation}
        >
          <ThemedText style={styles.buttonText}>Sign Up</ThemedText>
        </TouchableOpacity>

        <LegalDisclaimer />

    </View>    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      signupButton: {
        backgroundColor: '#DB4437',
      },
})