# Tricore HR - Test Users Setup Guide

## Quick Start - Test Credentials

Use these credentials to login and test different roles:

| Role | Email | Password | Description |
|------|-------|----------|-------------|
| **Super Admin** | `superadmin@tricore.com` | `Super@123` | Full system access |
| **Admin** | `admin@tricore.com` | `Admin@123` | Administrative access |
| **HR Manager** | `hrmanager@tricore.com` | `HRManager@123` | HR management access |
| **Manager** | `manager@tricore.com` | `Manager@123` | Team management access |
| **Employee** | `employee@tricore.com` | `Employee@123` | Basic employee access |

## Database Setup Instructions

### Step 1: Create the Profiles Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text,
  full_name text NOT NULL,
  avatar_url text,
  role text NOT NULL CHECK (role IN ('super_admin', 'admin', 'hr_manager', 'manager', 'employee')),
  is_active boolean DEFAULT true NOT NULL,
  company_id uuid,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS profiles_role_idx ON profiles(role);
CREATE INDEX IF NOT EXISTS profiles_company_id_idx ON profiles(company_id);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT TO authenticated
  USING (auth.uid() = id);

-- Users can update their own profile (limited)
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id AND
    role = (SELECT role FROM profiles WHERE id = auth.uid()) AND
    is_active = (SELECT is_active FROM profiles WHERE id = auth.uid())
  );

-- Admins can read all profiles
CREATE POLICY "Admins can read all profiles"
  ON profiles FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
    )
  );

-- Admins can manage all profiles
CREATE POLICY "Admins can update all profiles"
  ON profiles FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
    )
  );

CREATE POLICY "Admins can insert profiles"
  ON profiles FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
    )
  );

CREATE POLICY "Admins can delete profiles"
  ON profiles FOR DELETE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('super_admin', 'admin')
    )
  );
```

### Step 2: Create Test Users in Supabase Dashboard

1. Go to Supabase Dashboard → Authentication → Users
2. Click "Add User" and create each user with email/password from the table above
3. Note down each user's UUID

### Step 3: Create Profile Records

After creating users, run this SQL (replace UUIDs with actual user IDs):

```sql
-- Insert profile for Super Admin
INSERT INTO profiles (id, full_name, role, username)
VALUES
  ('REPLACE_WITH_SUPERADMIN_UUID', 'Super Admin', 'super_admin', 'superadmin');

-- Insert profile for Admin
INSERT INTO profiles (id, full_name, role, username)
VALUES
  ('REPLACE_WITH_ADMIN_UUID', 'Admin User', 'admin', 'admin');

-- Insert profile for HR Manager
INSERT INTO profiles (id, full_name, role, username)
VALUES
  ('REPLACE_WITH_HRMANAGER_UUID', 'HR Manager', 'hr_manager', 'hrmanager');

-- Insert profile for Manager
INSERT INTO profiles (id, full_name, role, username)
VALUES
  ('REPLACE_WITH_MANAGER_UUID', 'Team Manager', 'manager', 'manager');

-- Insert profile for Employee
INSERT INTO profiles (id, full_name, role, username)
VALUES
  ('REPLACE_WITH_EMPLOYEE_UUID', 'Test Employee', 'employee', 'employee');
```

### Alternative: Automatic Profile Creation

Add this trigger to automatically create profiles when users sign up:

```sql
-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role, username)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'New User'),
    COALESCE(NEW.raw_user_meta_data->>'role', 'employee'),
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to run on new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

## Testing the Application

1. Navigate to `http://localhost:3000/login`
2. Use any of the test credentials above
3. Test different role permissions:
   - **Super Admin**: Full access to all features
   - **Admin**: Administrative capabilities
   - **HR Manager**: HR-specific features
   - **Manager**: Team management
   - **Employee**: Basic access

## Troubleshooting

### "Email not confirmed" error
- In Supabase Dashboard → Authentication → Settings
- Disable "Enable email confirmations" for testing

### "Invalid credentials" error
- Verify the user exists in Authentication → Users
- Check that the password matches exactly
- Ensure the profile record exists in the profiles table

### RLS Policy Issues
- Make sure all policies are created correctly
- Check that the user has a profile record
- Verify RLS is enabled on the profiles table

## Security Notes

⚠️ **These are test credentials only!**
- Change all passwords before deploying to production
- Use strong, unique passwords for each role
- Enable email confirmation in production
- Review and test all RLS policies thoroughly
