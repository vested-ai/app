import { TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { commonStyles } from '@/styles/common';
import { router } from 'expo-router';
import { ThemedView } from './ThemedView';
 
export const LegalDisclaimer = () => {
    return (
        <ThemedView style={commonStyles.section}>
            <ThemedText style={commonStyles.cardContent}>
                By continuing, you agree to our{' '}
                <TouchableOpacity onPress={() => {
                    router.push('/terms');
                }}>
                    <ThemedText style={commonStyles.linkText}>Terms of Service</ThemedText>
                </TouchableOpacity>
                {' '}and{' '}
                <TouchableOpacity onPress={() => {
                    router.push('/privacy');
                }}>
                    <ThemedText style={commonStyles.linkText}>Privacy Policy</ThemedText>
                </TouchableOpacity>
                {'.'}
            </ThemedText>
        </ThemedView>
    );
}; 