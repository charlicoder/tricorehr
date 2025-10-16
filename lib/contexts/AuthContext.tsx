'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../supabase/client';
import { useRouter } from 'next/navigation';
import { mockSignIn, getMockProfile } from '../auth/mockAuth';

interface Profile {
  id: string;
  username: string | null;
  full_name: string;
  avatar_url: string | null;
  role: 'super_admin' | 'admin' | 'hr_manager' | 'manager' | 'employee';
  is_active: boolean;
  company_id: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useMockAuth = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_USE_MOCK_AUTH === 'true';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (useMockAuth) {
          const mockUser = localStorage.getItem('mockUser');
          if (mockUser) {
            const userData = JSON.parse(mockUser);
            setUser(userData as User);
            const mockProfile = getMockProfile(userData.id);
            setProfile(mockProfile);
          }
        } else {
          const { data: { session } } = await supabase.auth.getSession();
          setUser(session?.user ?? null);

          if (session?.user) {
            const { data: profileData } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .maybeSingle();

            setProfile(profileData);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();

    if (!useMockAuth) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          (async () => {
            setUser(session?.user ?? null);

            if (session?.user) {
              const { data: profileData } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .maybeSingle();

              setProfile(profileData);
            } else {
              setProfile(null);
            }
          })();
        }
      );

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [useMockAuth]);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    if (useMockAuth) {
      const result = mockSignIn(email, password);

      if (result.data) {
        localStorage.setItem('mockUser', JSON.stringify(result.data.user));
        setUser(result.data.user as User);
        const mockProfile = getMockProfile(result.data.user.id);
        setProfile(mockProfile);
      }

      setIsLoading(false);
      return result;
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setIsLoading(false);
      return { data, error };
    }
  };

  const signOut = async () => {
    if (useMockAuth) {
      localStorage.removeItem('mockUser');
      setUser(null);
      setProfile(null);
      router.push('/login');
    } else {
      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      router.push('/login');
    }
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
