import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    appBar: {
        backgroundColor: Colors.brandWhite,
        padding: 15,
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.brandGrayLightest,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.brandGrayDark,
    },
    dashboardTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.brandGrayDark,
    },
    dashboardSubtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.brandGray,
    },
    dashboardSubtitleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        marginBottom: 20,
    },
    card: {
        backgroundColor: Colors.brandWhite,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: Colors.brandGrayDark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.brandGrayDark,
    },
    cardContent: {
        fontSize: 16,
        color: Colors.brandGray,
    },
    cardDescription: {
        fontSize: 16,
        color: Colors.brandGray,
        marginTop: 8,
    },
    expirationText: {
        fontSize: 14,
        color: Colors.brandGray,
        marginBottom: 16,
    },
    matchName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    matchScore: {
        fontSize: 16,
        color: Colors.brandGray,
        marginBottom: 16,
    },
    linkContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 15,
    },
    linkButton: {
        padding: 10,
    },
    linkText: {
        color: Colors.brandPink,
        fontSize: 16,
    },
    // Authentication styles
    authContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.brandWhite,
    },
    authTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Colors.brandGrayDark,
    },
    authDescription: {
        fontSize: 16,
        color: Colors.brandGray,
        marginBottom: 30,
        textAlign: 'center',
    },
    authInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.brandGrayLightest,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: Colors.brandWhite,
    },
    authButton: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.brandPink,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    authButtonText: {
        color: Colors.brandWhite,
        fontSize: 16,
        fontWeight: 'bold',
    },
    authErrorText: {
        color: Colors.brandPink,
        fontSize: 14,
        marginBottom: 15,
        textAlign: 'center',
    },
    authLinkText: {
        color: Colors.brandPink,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    // Form styles
    formSection: {
        marginBottom: 20,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.brandGrayDark,
    },
    formDescription: {
        fontSize: 14,
        color: Colors.brandGray,
        marginBottom: 15,
    },
    formInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.brandGrayLightest,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: Colors.brandWhite,
    },
    formRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    formDropdown: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.brandGrayLightest,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: Colors.brandWhite,
    },
    formButton: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.brandPink,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    formButtonText: {
        color: Colors.brandWhite,
        fontSize: 16,
        fontWeight: 'bold',
    },
    formSliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    formSlider: {
        flex: 1,
        marginHorizontal: 10,
    },
    cardContentContainer: {
        padding: 10,
        marginTop: 10,
    },
    cardContentText: {
        fontSize: 16,
        color: Colors.brandGray,
    },
    checkboxContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    checkboxItem: {
        marginVertical: 5,
    },
    iconLeft: {
        marginRight: 5,
    },
});