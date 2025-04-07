import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { commonStyles } from '@/styles/common';

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    variant?: 'default' | 'success' | 'warning' | 'error';
};

export function ThemedView({
    style,
    lightColor,
    darkColor,
    variant = 'default',
    ...rest
}: ThemedViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    const getViewStyle = () => {
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
        <View
            style={[
                getViewStyle(),
                { backgroundColor },
                style,
            ]}
            {...rest}
        />
    );
} 