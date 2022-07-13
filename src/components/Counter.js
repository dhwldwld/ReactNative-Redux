import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Counter = ({ index, value, handleIncrement, handleDecrement }) => {
    return (
        <View className="w-full h-24 p-4 bg-gray-300 shadow-md rounded mb-2">
            <Text className="flex-1 justify-center items-center text-center text-lg text-white">
                Count : {value.counterNum}
            </Text>
            <View className="flex-1 flex-row w-full">
                <TouchableOpacity
                    className="bg-gray-400 ml-1 flex-1 justify-center items-center rounded"
                    onPress={() => handleIncrement(index)}
                >
                    <Text className="text-white">INCREMENT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-gray-400 ml-1 flex-1 justify-center items-center rounded"
                    onPress={() => handleDecrement(index)}
                >
                    <Text className="text-white">DECREMENT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Counter;
