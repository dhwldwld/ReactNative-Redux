import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView
            className="justify-center items-center flex-1"
            behavior="padding"
        >
            <View className="w-4/5">
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    className=" bg-white px-4 py-2 rounded-lg mt-2"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    className=" bg-white px-4 py-2 rounded-lg mt-2"
                />
            </View>
            <View className=" w-3/5 justify-center items-center mt-8">
                <TouchableOpacity
                    onPress={() => {}}
                    className=" bg-sky-500 w-full p-3 rounded-lg"
                >
                    <Text className=" text-white font-bold text-base text-center">
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    className=" bg-white w-full p-3 mt-2 border border-solid border-sky-500 rounded-lg"
                >
                    <Text className=" text-sky-500 font-bold text-base text-center">
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
