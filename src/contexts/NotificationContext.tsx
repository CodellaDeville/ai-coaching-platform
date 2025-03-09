import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timestamp: Date;
}

interface NotificationContextType {
  notifications: Notification[];
  showNotification: (type: Notification['type'], message: string) => void;
  clearNotification: (id: string) => void;
  requestPushPermission: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  const showNotification = (type: Notification['type'], message: string) => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      type,
      message,
      timestamp: new Date(),
    };

    setNotifications((prev) => [...prev, newNotification]);
    setCurrentNotification(newNotification);
  };

  const clearNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    if (currentNotification?.id === id) {
      setCurrentNotification(null);
    }
  };

  const requestPushPermission = async () => {
    try {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          showNotification('success', 'Push notifications enabled');
        } else {
          showNotification('warning', 'Push notifications not enabled');
        }
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      showNotification('error', 'Failed to enable push notifications');
    }
  };

  const handleClose = (id: string) => {
    clearNotification(id);
  };

  const value = {
    notifications,
    showNotification,
    clearNotification,
    requestPushPermission,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {currentNotification && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={() => handleClose(currentNotification.id)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={() => handleClose(currentNotification.id)}
            severity={currentNotification.type}
            variant="filled"
          >
            {currentNotification.message}
          </Alert>
        </Snackbar>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
