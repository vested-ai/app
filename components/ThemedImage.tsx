import { Image, type ImageProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { commonStyles } from '@/styles/common';

export type ThemedImageProps = ImageProps & {
    lightColor?: string;
    darkColor?: string;
    variant?: 'default' | 'success' | 'warning' | 'error';
};

export function ThemedImage({
    style,
    lightColor,
    darkColor,
    variant = 'default',
    ...rest
}: ThemedImageProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    const getImageStyle = () => {
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
        <Image
            style={[
                commonStyles.image,
                getImageStyle(),
                { backgroundColor },
                style,
            ]}
            {...rest}
        />
    );
} 