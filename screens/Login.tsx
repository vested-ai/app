import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Link, router } from 'expo-router';
import { LegalDisclaimer } from '@/components/LegalDisclaimer';

// You'll need to add your app logo image to your assets
const APP_LOGO = require('@/assets/images/react-logo.png');

export const LoginScreen = () => {
  const [email, setEmail] = useState('');

  const handleFacebookLogin = () => {
    // Implement Facebook login logic
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic
  };

  const handleEmailSignUp = () => {
    // Navigate to email sign up screen
    router.push('/(account)/create');
  };

  const handleSignIn = () => {
    // Navigate to sign in screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={APP_LOGO} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.facebookButton]}
          onPress={handleFacebookLogin}
        >
          <ThemedText style={styles.buttonText}>Continue with Facebook</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.googleButton]}
          onPress={handleGoogleLogin}
        >
          <ThemedText style={styles.buttonText}>Continue with Google</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.emailButton]}
          onPress={handleEmailSignUp}
        >
          <ThemedText style={styles.buttonText}>Sign up with Email</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signInLink}
          onPress={handleSignIn}
        >
          <ThemedText style={styles.signInText}>
            <Link style={styles.linkText} href="/(login)/login">Already have an account?</Link>
          </ThemedText>
        </TouchableOpacity>

        <LegalDisclaimer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  emailButton: {
    backgroundColor: '#34A853',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
    color: '#666666',
  },
  legalText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
}); 