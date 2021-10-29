import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TextInput,
    Platform
} from 'react-native';
interface skillData {
    id: string;
    name: string;
}
export function Home() {
    const [newSkill, setNewSkill] = useState("");
    const [myNewSkill, setMyNewSkill] = useState<skillData[]>([]);
    const [greeting, setGreeting] = useState('');
    function handleAddSkill() {
        const data = {
            id: new String(new Date().getTime()),
            name: newSkill

        }

        setMyNewSkill(oldState => [...oldState, data]);
    }
    function handleRemoveSkill(id: string) {
        setMyNewSkill(oldState => oldState.filter(
            skill => skill.id !== id

        ));

    }
    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting('Good Morning');

        }
        else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon');
        }
        else {
            setGreeting("Good Night");
        }
    }, [])
    return (<>
        <View style={styles.container}>
            <Text style={styles.title}> Tatiane, Welcome </Text>
            <Text style={styles.greetings}>{greeting}</Text>
            <TextInput placeholder=" New Skills"
                placeholderTextColor="#555"
                style={styles.TextInput} onChangeText={setNewSkill} />

            <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>
            <Button onPress={handleAddSkill}
                title="Add"
                activeOpacity={.7}

            />
            <FlatList data={myNewSkill} keyExtractor={item => item.id}
                renderItem={({ item }) => <SkillCard skill={item.name}
                    onPress={() => handleRemoveSkill(item.id)}

                />} />

        </View>



    </>);


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,

    },
    TextInput: {
        borderColor: "white",
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        fontSize: 18,
        marginTop: 10,
        padding: Platform.OS === "ios" ? 15 : 10,
        color: "#FFFF",
    },
    greetings: {
        color: "#FFFF",
    }


})