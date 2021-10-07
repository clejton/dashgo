import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Cleiton de Freitas</Text>
          <Text color="gray.300" fontSize="small">
            cleiton.freitas1@gmail.com
          </Text>
        </Box>
      )}
      <Avatar name="Cleiton Freitas" />
    </Flex>
  );
}
