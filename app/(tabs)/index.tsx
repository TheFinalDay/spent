import { StyleSheet, Image, Platform } from 'react-native';

import { PriceTextInput } from '@/components/PriceTextInput';
import { MaterialCommunityIcon } from '@/components/icons/MaterialCommunityIcon';
import ScrollView from '@/components/ScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function InputScreen() {
  return (
    <ScrollView>
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">{"Input"}</ThemedText>
            <ThemedText style={styles.title} type="defaultSemiBold">{"Select category  -  Set price  -  Press Spent"}</ThemedText>
            <ThemedView style={styles.categoryArray}>
                <MaterialCommunityIcon style={styles.categoryIcon} size={32} name="gamepad-square" color="magenta"/>
                <MaterialCommunityIcon style={styles.categoryIcon} size={32} name="food-apple" color="green"/>
                <MaterialCommunityIcon style={styles.categoryIcon} size={32} name="food" color="yellow"/>
                <MaterialCommunityIcon style={styles.categoryIcon} size={32} name="home" color="white"/>
                <MaterialCommunityIcon style={styles.categoryIcon} size={32} name="train" color="red"/>
                <MaterialCommunityIcon style={styles.categoryIcon} size={32} name="dumbbell" color="gray"/>
                <MaterialCommunityIcon style={styles.categoryIcon} size={32} name="glass-mug-variant" color="orange"/>
            </ThemedView>
            <PriceTextInput></PriceTextInput>
        </ThemedView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        gap: 16,
    },
    title: {
    },
    categoryArray: {
        flexDirection: 'row',
    },
    categoryIcon: {
        paddingRight: 16
    }
});