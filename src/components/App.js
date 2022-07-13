import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import CounterList from './CounterList';

const App = ({
    counter,
    handleAddCounter,
    handleRemoveCounter,
    handleIncrement,
    handleDecrement,
}) => {
    return (
        <SafeAreaView className="flex-1 bg-black">
            <ScrollView className="flex-1 w-full bg-black py-4">
                <View className="flex-row w-full">
                    <TouchableOpacity
                        className=" m-2 p-2 flex-1 rounded-md bg-gray-400"
                        onPress={handleAddCounter}
                    >
                        <Text className="text-white text-center">
                            AddCounter
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className=" m-2 p-2 flex-1 rounded-md bg-gray-400"
                        onPress={handleRemoveCounter}
                    >
                        <Text className="text-white text-center">
                            Remove Counter
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <CounterList
                        counter={counter}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
