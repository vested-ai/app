// React core
import React from 'react';

// React Native components
import { TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native';

// Third-party libraries
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome6';

// Local components
import { AppBar } from '@/components/AppBar';
import { LegalDisclaimer } from '@/components/LegalDisclaimer';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Local styles and constants
import { commonStyles } from '@/styles/common';
import { Colors } from '@/constants/Colors';

export const LoginScreen = () => {
    const handleFacebookLogin = () => {
        console.log('Facebook login');
    };

    const handleGoogleLogin = () => {
        console.log('Google login');
    };

    const handleEmailSignUp = () => {
        router.push('/(account)/create');
    };

    return (
        <ScrollView 
            style={commonStyles.container} 
            contentContainerStyle={[commonStyles.contentContainer, { alignItems: 'center' }]}
        >
            <AppBar />
            
            <ThemedView style={[commonStyles.section, { alignItems: 'center' }]}>
                <TouchableOpacity 
                    style={[styles.button, commonStyles.shadow]}
                    onPress={handleFacebookLogin}
                >
                    <View style={styles.buttonContent}>
                        <Icon 
                            name='square-facebook' 
                            size={24} 
                            color={Colors.facebook} 
                            style={commonStyles.leadingIcon}
                        />
                        <ThemedText style={[commonStyles.buttonText, { color: Colors.facebook }]}>
                            Continue with Facebook
                        </ThemedText>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, commonStyles.shadow]}
                    onPress={handleGoogleLogin}
                >
                    <View style={styles.buttonContent}>
                        <Icon 
                            name='google' 
                            size={24} 
                            color={Colors.google} 
                            style={commonStyles.leadingIcon}
                        />
                        <ThemedText style={[commonStyles.buttonText, { color: Colors.google }]}>
                            Continue with Google
                        </ThemedText>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.button, commonStyles.shadow]}
                    onPress={handleEmailSignUp}
                >
                    <View style={styles.buttonContent}>
                        <Icon 
                            name='envelope' 
                            size={24} 
                            color={Colors.brandPink} 
                            style={commonStyles.leadingIcon}
                        />
                        <ThemedText style={[commonStyles.buttonText, { color: Colors.brandPink }]}>
                            Sign up with Email
                        </ThemedText>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={commonStyles.linkContainer} 
                    onPress={() => router.push('/(login)/login')}
                >
                    <ThemedText style={commonStyles.linkText}>
                        Already have an account?
                    </ThemedText>
                </TouchableOpacity>
            </ThemedView>
            
            <LegalDisclaimer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        maxWidth: 300,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: Colors.brandGray,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
}); 