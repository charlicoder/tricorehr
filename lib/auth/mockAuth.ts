export const MOCK_USERS = {
  'superadmin@tricore.com': {
    id: '00000000-0000-0000-0000-000000000001',
    email: 'superadmin@tricore.com',
    password: 'Super@123',
    profile: {
      id: '00000000-0000-0000-0000-000000000001',
      username: 'superadmin',
      full_name: 'Super Admin',
      avatar_url: null,
      role: 'super_admin' as const,
      is_active: true,
      company_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  },
  'admin@tricore.com': {
    id: '00000000-0000-0000-0000-000000000002',
    email: 'admin@tricore.com',
    password: 'Admin@123',
    profile: {
      id: '00000000-0000-0000-0000-000000000002',
      username: 'admin',
      full_name: 'Admin User',
      avatar_url: null,
      role: 'admin' as const,
      is_active: true,
      company_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  },
  'hrmanager@tricore.com': {
    id: '00000000-0000-0000-0000-000000000003',
    email: 'hrmanager@tricore.com',
    password: 'HRManager@123',
    profile: {
      id: '00000000-0000-0000-0000-000000000003',
      username: 'hrmanager',
      full_name: 'HR Manager',
      avatar_url: null,
      role: 'hr_manager' as const,
      is_active: true,
      company_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  },
  'manager@tricore.com': {
    id: '00000000-0000-0000-0000-000000000004',
    email: 'manager@tricore.com',
    password: 'Manager@123',
    profile: {
      id: '00000000-0000-0000-0000-000000000004',
      username: 'manager',
      full_name: 'Team Manager',
      avatar_url: null,
      role: 'manager' as const,
      is_active: true,
      company_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  },
  'employee@tricore.com': {
    id: '00000000-0000-0000-0000-000000000005',
    email: 'employee@tricore.com',
    password: 'Employee@123',
    profile: {
      id: '00000000-0000-0000-0000-000000000005',
      username: 'employee',
      full_name: 'Test Employee',
      avatar_url: null,
      role: 'employee' as const,
      is_active: true,
      company_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  }
};

export const mockSignIn = (email: string, password: string) => {
  const user = MOCK_USERS[email as keyof typeof MOCK_USERS];

  if (!user) {
    return {
      data: null,
      error: { message: 'Invalid email or password' }
    };
  }

  if (user.password !== password) {
    return {
      data: null,
      error: { message: 'Invalid email or password' }
    };
  }

  return {
    data: {
      user: {
        id: user.id,
        email: user.email,
        app_metadata: {},
        user_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString()
      },
      session: {
        access_token: 'mock-token',
        refresh_token: 'mock-refresh-token',
        user: {
          id: user.id,
          email: user.email,
        }
      }
    },
    error: null
  };
};

export const getMockProfile = (userId: string) => {
  const user = Object.values(MOCK_USERS).find(u => u.id === userId);
  return user?.profile || null;
};
