import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

export const commonStyles = StyleSheet.create({
    // ===== Layout Styles =====
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.brandWhite,
        marginBottom: 20,
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginVertical: 5,
    },
    section: {
        marginTop: 24,
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    // ===== Text Styles =====
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.brandGrayDark,
    },
    textSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        color: Colors.brandGrayDark,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        color: Colors.brandGrayDarker,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.brandGrayDark,
    },
    linkText: {
        lineHeight: 30,
        fontSize: 16,
        color: Colors.brandPink,
        textDecorationLine: 'underline',
    },

    // ===== Card Styles =====
    card: {
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        backgroundColor: Colors.brandWhite,
        borderWidth: 1,
        borderColor: Colors.brandGrayLight,
        shadowColor: Colors.brandBlack,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardContentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    defaultCard: {
        backgroundColor: Colors.brandWhite,
        shadowColor: Colors.brandBlack,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    outlineCard: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.brandGrayLightest,
    },

    // ===== Dater Card Styles =====
    daterCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        gap: 16,
        backgroundColor: Colors.brandWhite,
    },

    // ===== Button Styles =====
    button: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.brandWhite,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    actionButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 0,
    },
    primaryButton: {
        backgroundColor: Colors.brandPink,
    },
    secondaryButton: {
        backgroundColor: Colors.brandGray,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.brandWhite,
    },
    
    // ===== Form Styles =====
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
        borderColor: Colors.brandGray,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: Colors.brandWhite,
    },
    
    // ===== Slider Styles =====
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal:10,
    },
    sliderText: {
        fontSize: 18,
        color: Colors.brandGrayDarker,
    },
    slider: {
        flex: 1,
        marginHorizontal: 10,
    },

    // ===== Component Base Styles =====
    checkboxContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    checkboxItem: {
        marginBottom: 10,
        paddingVertical: 4,
        paddingHorizontal: 0,
    },
    switch: {
        width: 48,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        padding: 2,
        backgroundColor: Colors.brandGrayLightest,
    },
    badgeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    badge: {
        backgroundColor: Colors.brandPink,
        paddingHorizontal: 12,
        borderRadius: 24,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 42,
    },
    badgeText: {
        color: Colors.brandWhite,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    badgeDescription: {
        color: Colors.brandGrayDark,
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: Colors.brandGrayLightest,
    },
    leadingIcon: {
        marginRight: 8,
    },

    // ===== Status Variant Styles =====
    success: {
        backgroundColor: Colors.success,
    },
    warning: {
        backgroundColor: Colors.warning,
    },
    error: {
        backgroundColor: Colors.error,
    },
    default: {
        backgroundColor: Colors.brandPink,
    },

    // ===== Status Text Styles =====
    successText: {
        color: Colors.success,
        fontSize: 16,
    },
    warningText: {
        color: Colors.warning,
        fontSize: 16,
    },
    errorText: {
        color: Colors.error,
        fontSize: 16,
    },
    defaultText: {
        color: Colors.brandGrayDarker,
        fontSize: 16,
    },

    // ===== App Bar & Navigation =====
    appBar: {
        backgroundColor: Colors.brandWhite,
        marginVertical: 24,
        paddingVertical: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: Colors.brandGrayLight,
    },
    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.brandGrayDarker,
    },

    // ===== Profile & Dashboard =====
    userHeader: {
        padding: 20,
        alignItems: 'center',
    },
    userVestedScore: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.brandPink,
        marginTop: 18,
        marginBottom: 6,
    },
    userHeaderText: {
        fontSize: 16,
        color: Colors.brandBlack,
    },
    userModeText: {
        fontSize: 16,
        color: Colors.brandGrayDark,
        fontStyle: 'italic',
        marginTop: -20,
    },
    userInfoContainer: {
        padding: 20,
        alignItems: 'center',
    },

    // ===== Image Styles =====
    userImageLarge: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
        resizeMode: 'cover',
    },
    userImageMedium: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 12,
        resizeMode: 'cover',
    },
    userImageSmall: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 12,
        resizeMode: 'cover',
    },

    // ===== Section Headers =====
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: Colors.brandGrayDarker,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: Colors.brandGrayDarker,
        marginBottom: 16,
        lineHeight: 20,
    },

    // ===== Card Components =====
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.brandGrayDarker,
    },
    cardContent: {
        fontSize: 16,
        color: Colors.brandGrayDark,
        marginTop: 8,
        paddingHorizontal: 16,
        paddingBottom: 16,
        lineHeight: 20,
        flex: 1,
    },

    // ===== Match & Link Components =====
    matchName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    matchScore: {
        fontSize: 16,
        color: Colors.brandGrayDarker,
        marginBottom: 16,
    },
    expirationText: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: Colors.brandPink,
        marginBottom: 16,
    },
    linkContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 15,
    },

    // ===== Select List Styles =====
    selectListBox: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.brandWhite,
        borderColor: Colors.brandGrayLight,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    selectListDropdown: {
        backgroundColor: Colors.brandWhite,
        borderColor: Colors.brandGrayLight,
        borderWidth: 1,
        marginTop: 0,
    },
    selectListDropdownText: {
        color: Colors.brandPink,
        fontSize: 16,
    },
    selectListInput: {
        backgroundColor: Colors.brandWhite,
        fontSize: 16,
    },

    // ===== Shadow Styles =====
    shadow: {
        // Shadow property for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
    }
    
});