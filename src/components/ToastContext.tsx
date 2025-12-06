import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ 
    message: '', 
    visible: false 
  });

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, visible: false }));
      }, 2000); // Hide after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: `translateX(-50%) translateY(${toast.visible ? '0' : '150%'})`,
          backgroundColor: '#323232',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontSize: '14px',
          fontWeight: 500,
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 1000,
          pointerEvents: 'none',
          opacity: toast.visible ? 1 : 0,
        }}
      >
        {toast.message}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

