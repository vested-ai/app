import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';


export function LegalDisclaimer() {
    return (
        <ThemedText 
            style={styles.legalText}
            accessibilityRole="text"
            accessibilityLabel="Legal disclaimer for account creation"
        >
            By signing up, you agree with the <Link style={styles.linkText} href="/(aux)/tos">Terms of Service</Link> and <Link style={styles.linkText} href="/(aux)/privacy">Privacy Policy</Link>
        </ThemedText>
    );
}

const styles = StyleSheet.create({
    legalText: {
        fontSize: 14,
        color: Colors.brandGray,
        marginTop: 20,
    },
    linkText: {
        color: Colors.brandPink,
        textDecorationLine: 'underline',
    }
}); 
