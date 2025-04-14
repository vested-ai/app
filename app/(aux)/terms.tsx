import { ThemedText } from "@/components/ThemedText";
import { commonStyles } from "@/styles/common";
import { ScrollView, View } from "react-native";

export default function TermsAndConditions() {
    return (
        <ScrollView style={commonStyles.container}>
            <View style={{ padding: 20 }}>
                <ThemedText style={[commonStyles.title, { marginBottom: 20 }]}>
                    Terms and Conditions
                </ThemedText>

                <ThemedText style={[commonStyles.text, { marginBottom: 15 }]}>
                    Last updated: April 2025
                </ThemedText>

                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    Welcome to Vested AI. By accessing or using our application, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    1. Acceptance of Terms
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    By accessing or using Vested AI, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our application.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    2. User Accounts
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    To use certain features of our application, you must register for an account. You agree to:
                    {'\n\n'}- Provide accurate and complete information
                    {'\n'}- Maintain the security of your account
                    {'\n'}- Accept responsibility for all activities under your account
                    {'\n'}- Notify us immediately of any security breaches
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    3. Intellectual Property
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    All content, features, and functionality of Vested AI, including but not limited to text, graphics, logos, and software, are the exclusive property of Vested AI and are protected by U.S. and international copyright, trademark, and other intellectual property laws.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    4. User Conduct
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    You agree not to:
                    {'\n\n'}- Violate any applicable laws or regulations
                    {'\n'}- Impersonate any person or entity
                    {'\n'}- Interfere with the proper functioning of the application
                    {'\n'}- Attempt to gain unauthorized access to any part of the application
                    {'\n'}- Use the application for any illegal or unauthorized purpose
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    5. Disclaimer of Warranties
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    Vested AI is provided "as is" without any warranties, either express or implied. We do not warrant that the application will be error-free, uninterrupted, or free of viruses or other harmful components.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    6. Limitation of Liability
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    In no event shall Vested AI be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the application.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    7. Changes to Terms
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    We reserve the right to modify these terms at any time. We will notify users of any material changes via the application or email. Your continued use of the application after such changes constitutes acceptance of the new terms.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    8. Contact Information
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    If you have any questions about these Terms and Conditions, please contact us at:
                    {'\n\n'}Email: legal@vestedai.com
                </ThemedText>
            </View>
        </ScrollView>
    );
}
  