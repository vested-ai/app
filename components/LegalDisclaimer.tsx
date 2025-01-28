import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';


export function LegalDisclaimer() {
  return (
    <ThemedText style={styles.legalText}>
        By signing up, you agree with the <Link style={styles.linkText} href="/(aux)/tos">Terms of Service</Link> and <Link style={styles.linkText} href="/(aux)/privacy">Privacy Policy</Link>
    </ThemedText>
  );
}

const styles = StyleSheet.create({
    legalText: {
      fontSize: 14,
      color: '#666666',
      marginTop: 20,
      alignItems: 'center',
    },
    linkText: {
      color: 'blue',
      textDecorationLine: 'underline',
    }
  }); 
