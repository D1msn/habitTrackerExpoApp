import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native';
import { onlineManager } from '@tanstack/react-query';

export function useOnlineManager() {
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null && state.isConnected && Boolean(state.isInternetReachable)
        );
      });
    }
  }, []);
}
