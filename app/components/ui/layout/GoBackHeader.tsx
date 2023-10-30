import { ArrowBackIcon, Flex, Heading, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { IterfaceHeadingProps } from 'native-base/lib/typescript/components/primitives/Heading/types';

export const GoBackHeader = ({
  title,
  headingProps,
}: {
  title?: string;
  headingProps?: IterfaceHeadingProps;
}) => {
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
        <Heading flexShrink={0} size={'md'} flex={1} my={5} textAlign={'center'} {...headingProps}>
          {title}
        </Heading>
      )}
    </Flex>
  );
};
