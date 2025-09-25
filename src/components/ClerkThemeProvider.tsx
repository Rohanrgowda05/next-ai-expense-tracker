'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from '@/contexts/ThemeContext';

interface ClerkThemeProviderProps {
  children: React.ReactNode;
}

export default function ClerkThemeProvider({
  children,
}: ClerkThemeProviderProps) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
        variables: {
          colorPrimary: theme === 'dark' ? '#3b82f6' : '#2563eb', // blue-500 / blue-600
          colorBackground: theme === 'dark' ? '#1e293b' : '#ffffff', // slate-800 / white
          colorInputBackground: theme === 'dark' ? '#334155' : '#f9fafb', // slate-700 / gray-50
          colorInputText: theme === 'dark' ? '#f1f5f9' : '#1e293b', // slate-100 / slate-800
          borderRadius: '0.75rem',
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: theme === 'dark' ? '#3b82f6' : '#2563eb',
            '&:hover': {
              backgroundColor: theme === 'dark' ? '#2563eb' : '#1e40af',
            },
          },
          card: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(16px)',
            border:
              theme === 'dark'
                ? '1px solid rgba(51, 65, 85, 0.4)'
                : '1px solid rgba(226, 232, 240, 0.4)', // slate-700 / slate-200
          },
          headerTitle: {
            color: theme === 'dark' ? '#f8fafc' : '#1e293b', // slate-50 / slate-800
          },
          headerSubtitle: {
            color: theme === 'dark' ? '#cbd5e1' : '#64748b', // slate-300 / slate-500
          },
          socialButtonsBlockButton: {
            border:
              theme === 'dark'
                ? '1px solid rgba(51, 65, 85, 0.4)'
                : '1px solid rgba(226, 232, 240, 0.4)',
            backgroundColor:
              theme === 'dark'
                ? 'rgba(30, 41, 59, 0.6)' // slate-900/60
                : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(8px)',
          },
          dividerLine: {
            backgroundColor:
              theme === 'dark'
                ? 'rgba(51, 65, 85, 0.4)'
                : 'rgba(226, 232, 240, 0.4)',
          },
          formFieldInput: {
            backgroundColor:
              theme === 'dark'
                ? 'rgba(30, 41, 59, 0.6)' // slate-900/60
                : 'rgba(239, 246, 255, 0.8)', // blue-50/80
            backdropFilter: 'blur(8px)',
            border:
              theme === 'dark'
                ? '1px solid rgba(51, 65, 85, 0.4)'
                : '1px solid rgba(226, 232, 240, 0.4)',
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
