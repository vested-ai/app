import { TouchableOpacity, type TouchableOpacityProps, type TextStyle } from 'react-native';
import { commonStyles } from '@/styles/common';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';

export type ButtonProps = TouchableOpacityProps & {
    text: string;
    textStyle?: TextStyle;
};

export function Button({
    style,
    text,
    textStyle,
    ...rest
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                commonStyles.button,
                { backgroundColor: Colors.brandPink },
                style,
            ]}
            {...rest}
        >
            <ThemedText style={[commonStyles.buttonText, textStyle]}>
                {text}
            </ThemedText>
        </TouchableOpacity>
    );
} 