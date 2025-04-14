import { ThemedText } from "@/components/ThemedText";
import { commonStyles } from "@/styles/common";
import { ScrollView, View } from "react-native";

export default function PrivacyPolicy() {
    return (
        <ScrollView style={commonStyles.container}>
            <View style={{ padding: 20 }}>
                <ThemedText style={[commonStyles.title, { marginBottom: 20 }]}>
                    Privacy Policy
                </ThemedText>

                <ThemedText style={[commonStyles.text, { marginBottom: 15 }]}>
                    Last updated: April 2025
                </ThemedText>

                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    Welcome to Vested AI. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our application.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    1. Information We Collect
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    We collect information that you provide directly to us, including but not limited to:
                    {'\n\n'}- Account information (name, email, password)
                    {'\n'}- Profile information
                    {'\n'}- Usage data and preferences
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    2. How We Use Your Information
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    We use the collected information to:
                    {'\n\n'}- Provide and maintain our services
                    {'\n'}- Improve and personalize your experience
                    {'\n'}- Communicate with you about updates and changes
                    {'\n'}- Ensure the security of our platform
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    3. Data Security
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    4. Your Rights
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    You have the right to:
                    {'\n\n'}- Access your personal information
                    {'\n'}- Correct inaccurate data
                    {'\n'}- Request deletion of your data
                    {'\n'}- Opt-out of marketing communications
                </ThemedText>

                <ThemedText style={[commonStyles.title, { fontSize: 18, marginBottom: 10 }]}>
                    5. Contact Us
                </ThemedText>
                <ThemedText style={[commonStyles.text, { marginBottom: 20 }]}>
                    If you have any questions about this Privacy Policy, please contact us at:
                    {'\n\n'}Email: privacy@vestedai.com
                </ThemedText>
            </View>
        </ScrollView>
    );
}
  