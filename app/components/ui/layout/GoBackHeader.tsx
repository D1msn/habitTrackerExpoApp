import { ArrowBackIcon, Flex, Heading, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export const GoBackHeader = ({ title }: { title?: string }) => {
  const navigation = useNavigation();

  return (
    <Flex height={70} direction={'row'} alignItems={'center'}>
      <IconButton
        zIndex={1}
        position={'absolute'}
        size={'lg'}
        onPress={() => navigation.goBack()}
        icon={<ArrowBackIcon />}
        _icon={{
          color: 'white',
        }}
      />
      {!!title && (
        <Heading flexShrink={0} size={'md'} flex={1} my={5} textAlign={'center'}>
          {title}
        </Heading>
      )}
    </Flex>
  );
};
