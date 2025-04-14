import { Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { commonStyles } from '@/styles/common';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    const getStyle = () => {
        switch (type) {
            case 'title':
                return commonStyles.title;
            case 'subtitle':
                return commonStyles.subtitle;
            case 'link':
                return commonStyles.linkText;
            default:
                return commonStyles.text;
        }
    };

    return (
        <Text
            style={[
                { color },
                getStyle(),
                style,
            ]}
            {...rest}
        />
    );
}
