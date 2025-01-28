import { Text, StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { useRef, useState } from "react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";


export default function LoginEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const handleCreateAccountRedirect = () => {
        router.replace('/(account)/create');
    }

    const handleResetPasswordRedirect = () => {
        router.push('/(account)/reset-password');
    }

    const handleEmailLogin = () => {
        console.log('test');
        setError(null);

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            setIsLoading(true);
            // TODO: call account creatiion API
            // await createAccount({ firstname, lastName, email, password });
            router.replace('/(account)/profile');
        
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create account');
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <View style={styles.container}>
        <Text>Sign In With Email</Text>
        
        { error && (<Text style={styles.errorText}>{error}</Text>) }

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoComplete="email"
          autoCorrect={false}
          inputMode="email"
          keyboardType="email-address"
          accessibilityLabel="Email"
          accessibilityHint="Enter your email"
          returnKeyType="next"
          onSubmitEditing={() => {
            // Focus the next input (Last Name)
            passwordRef.current?.focus();
          }}
          ref={emailRef}

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
          accessibilityLabel="Password"
          accessibilityHint="Enter your password"
          returnKeyType="done"
          onSubmitEditing={() => { handleEmailLogin }}
          ref={passwordRef}
        />

        <TouchableOpacity 
          style={[styles.button, styles.signupButton]}
          onPress={handleEmailLogin}
        >
          <ThemedText style={styles.buttonText}>
            { isLoading ? 'Working...' : 'Sign In' }
        </ThemedText>
        </TouchableOpacity>


        <TouchableOpacity 
          style={styles.loginText}
          onPress={handleCreateAccountRedirect}
        >
          <ThemedText style={styles.linkText}>
            <Link style={styles.linkText} href="/(account)/create">Need an account?</Link>
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkText}
          onPress={handleResetPasswordRedirect}
        >
          <ThemedText style={styles.linkText}>
            <Link style={styles.linkText} href="/(account)/reset-password">Forgot Password?</Link>
          </ThemedText>
        </TouchableOpacity>
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
      errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
      },
      linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
      },
      loginText: {
        fontSize: 14,
        color: '#666666',
      },
})