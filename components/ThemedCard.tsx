import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { commonStyles } from '@/styles/common';

export type ThemedCardProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
    variant?: 'default' | 'outline';
};

export function ThemedCard({
    style,
    lightColor,
    darkColor,
    variant = 'default',
    ...rest
}: ThemedCardProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');

    const getCardStyle = () => {
        switch (variant) {
            case 'outline':
                return commonStyles.outlineCard;
            default:
                return commonStyles.defaultCard;
        }
    };

    return (
        <View
            style={[
                commonStyles.card,
                getCardStyle(),
                { backgroundColor, borderColor },
                style,
            ]}
            {...rest}
        />
    );
} 