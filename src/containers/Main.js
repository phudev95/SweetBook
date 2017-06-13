import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient';


export const Main = (props) => (
    <LinearGradient
        colors={['#52EDC7', '#5AC8FB']}
        style={styles.container}>
        <Text style={styles.text} onPress={() => props.changeTab('home')}>Go to Welcome screen</Text>
        <TabView
            tabBarTextStyle={{ fontSize: 30 }}
            tabBarPosition="overlayBottom"
        >
            <Text tabLabel="hello">hello</Text>
            <Text tabLabel="yo">yo</Text>
        </TabView>
    </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
