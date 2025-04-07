import { TextInput, type TextInputProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { commonStyles } from '@/styles/common';

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
    variant?: 'default' | 'success' | 'warning' | 'error';
};

export function ThemedTextInput({
    style,
    lightColor,
    darkColor,
    variant = 'default',
    ...rest
}: ThemedTextInputProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');

    const getInputStyle = () => {
        switch (variant) {
            case 'success':
                return commonStyles.success;
            case 'warning':
                return commonStyles.warning;
            case 'error':
                return commonStyles.error;
            default:
                return commonStyles.default;
        }
    };

    return (
        <TextInput
            style={[
                commonStyles.input,
                getInputStyle(),
                { backgroundColor, color, borderColor },
                style,
            ]}
            placeholderTextColor={Colors.brandGray}
            {...rest}
        />
    );
} 