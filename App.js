// import React from 'react';
// import { TailwindProvider } from 'tailwindcss-react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = () => {
//     return (
//         <NavigationContainer>
//             <TailwindProvider>
//                 <Stack.Navigator>
//                 </Stack.Navigator>
//             </TailwindProvider>
//         </NavigationContainer>
//     );
// };

// export default App;

import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import CounterListContainer from './src/containers/CounterListContainer';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <TailwindProvider>
                <CounterListContainer />
            </TailwindProvider>
        </Provider>
    );
};

export default App;
