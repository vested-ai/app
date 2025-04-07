import { type ViewProps, View } from 'react-native';
import { commonStyles } from '@/styles/common';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';

export type BadgeProps = ViewProps & {
    count: number;
    type?: 'numeric' | 'percentage';
    description?: string;
};

export function Badge({
    style,
    count,
    type = 'numeric',
    description,
    ...rest
}: BadgeProps) {
    return (
        <View style={commonStyles.badgeContainer}>
            <View
                style={[
                    commonStyles.badge,
                    { backgroundColor: Colors.brandPink },
                    style,
                ]}
                {...rest}
            >
                <ThemedText style={commonStyles.badgeText}>
                    {type === 'numeric' ? count : `${count}%`} 
                </ThemedText>
            </View>
            {description && (
                <ThemedText style={commonStyles.badgeDescription}>
                    {description}
                </ThemedText>
            )}
        </View>
    );
} 