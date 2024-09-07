import React from 'react';
import { View, type ViewProps, TextInput } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type PriceTextInputProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export function PriceTextInput({ lightColor, darkColor }: PriceTextInputProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const [value, setValue] = React.useState('');


    return <View
        style={{
            backgroundColor: backgroundColor,
            borderColor: 'white',
            borderWidth: 1,
        }}>
        <TextInput
            editable
            multiline
            numberOfLines={1}
            maxLength={40}
            onChangeText={text => setValue(sanitizePrice(text))}
            keyboardType = 'numeric'
            value={value}
            style={{
                padding: 10,
                color: 'white',
                fontSize: 30
            }}
        />
    </View>;
}

function sanitizePrice(input: string) {
    // Remove all non-numeric characters except the decimal point
    let sanitized = input.replace(/[^0-9.]/g, '');

    // Ensure there's only one decimal point
    let parts = sanitized.split('.');
    if (parts.length > 2) {
        // More than one decimal point, keep only the first part and the first decimal part
        sanitized = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Ensure there's only one digit after the decimal point
    if (parts.length > 1 && parts[1].length > 2) {
        sanitized = parts[0] + '.' + (parts[1].slice(0, 2)); // Keep only the first digit after the decimal point
    }
    
    return sanitized;
}








