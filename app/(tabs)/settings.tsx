import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, {useState, useEffect} from 'react';
import { MaterialCommunityIcon } from '@/components/icons/MaterialCommunityIcon';
import ScrollView from '@/components/ScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-elements/dist/helpers';

export default function SettingsScreen() {

    let STORAGE_KEY = '@user_input';
    const [catInput, setCatInput] = React.useState('');
    const [storedCat, setStoredCat] = React.useState('');

    useEffect(() => {
        readCategory();
    }, []);

    const saveCategory = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, catInput)
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    };
    
    const readCategory = async () => {
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null) {
                setStoredCat(value);
            } else {
                setStoredCat('');
            }
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };
    
    const clearCategory = async () => {
        try {
            await AsyncStorage.clear();
            readCategory()
        } catch (e) {
            alert('Failed to clear the async storage.');
        }
    };

    return (
        <ScrollView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">{"Settings"}</ThemedText>
                <ThemedView style={styles.settingsView}>
                    <TextInput
                        editable
                        numberOfLines={1}
                        maxLength={40}
                        onChangeText={text => setCatInput(text)}
                        onSubmitEditing={() => {
                            if (!catInput) return;
                            saveCategory();
                            readCategory()
                            setCatInput('');
                        }}
                        placeholder='New category...'
                        placeholderTextColor={'white'}
                        value={catInput}
                        style={{
                            padding: 10,
                            color: 'white',
                            fontSize: 30
                        }}
                    />
                    <Text style={{color: 'white'}}>Your input is {storedCat}</Text>
                    <Pressable onPress={clearCategory}>
                        <Text style={{color: 'red'}}>Clear Category</Text>
                    </Pressable>
                </ThemedView>
            </ThemedView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        gap: 16,
    },
    settingsView: {
    },
});