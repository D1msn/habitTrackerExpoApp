import {Text} from "react-native";
import {Button} from "native-base";

export const AuthScreen = ({navigation}) => {
    return (
        <>
            <Text>Auth</Text>
            <Button onPress={() => navigation.navigate('main')}>Go main</Button>
        </>
    )
}
