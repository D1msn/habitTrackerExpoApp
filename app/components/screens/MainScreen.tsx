import {Text} from "react-native";
import {Button} from "native-base";

export const MainScreen = ({navigation}) => {
    return (
        <>
            <Text>Main</Text>
            <Button onPress={() => navigation.navigate('auth')}>Go Auth</Button>
        </>
    )
}
