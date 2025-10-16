# 🎯 Tricore HR - Quick Start Login Credentials

## 🚀 Instant Testing (Mock Mode - Currently Active)

The app is currently running in **DEMO MODE** with mock authentication enabled.
You can login immediately without any database setup!

### Test Users - Copy & Paste Ready

| Role | Email | Password |
|------|-------|----------|
| **Super Admin** | `superadmin@tricore.com` | `Super@123` |
| **Admin** | `admin@tricore.com` | `Admin@123` |
| **HR Manager** | `hrmanager@tricore.com` | `HRManager@123` |
| **Manager** | `manager@tricore.com` | `Manager@123` |
| **Employee** | `employee@tricore.com` | `Employee@123` |

## 🎮 How to Login

1. Go to `http://localhost:3000/login`
2. You'll see a yellow banner saying "🧪 DEMO MODE"
3. The test credentials are displayed right on the login page
4. Copy any email/password pair and paste them in
5. Click "Sign In"
6. You'll be redirected to the dashboard with that role's permissions

## 👥 Role Descriptions

### 🔴 Super Admin
- **Full system access**
- Can manage all companies, users, and settings
- Access to system-wide reports and configurations
- Can create/delete other admins

### 🟠 Admin
- **Administrative capabilities**
- Can manage users within their scope
- Access to most features except system settings
- Can view and manage company data

### 🟡 HR Manager
- **HR-specific features**
- Manage employees, departments, and positions
- Handle leave requests and approvals
- Access to payroll and benefits administration

### 🟢 Manager
- **Team management**
- View and manage team members
- Approve leave requests
- Access to team reports and performance data

### 🔵 Employee
- **Basic access**
- View personal information
- Submit leave requests
- View company announcements
- Access self-service features

## 🔄 Switching Between Users

To test different roles:
1. Click your profile in the top right
2. Click "Logout"
3. Login with a different email from the list above
4. See how the interface changes for each role!

## ⚙️ Switching to Real Supabase (Optional)

If you want to use real Supabase authentication instead of mock mode:

1. Open `.env` file
2. Change `NEXT_PUBLIC_USE_MOCK_AUTH=true` to `NEXT_PUBLIC_USE_MOCK_AUTH=false`
3. Follow the instructions in `SETUP_USERS.md` to create real users in Supabase
4. Restart the dev server

## 🛠️ Technical Notes

### Mock Mode Features:
- ✅ No database required
- ✅ Instant testing
- ✅ Data persists in localStorage during session
- ✅ All authentication flows work
- ✅ Profile data is automatically loaded

### Mock Mode Limitations:
- ❌ Data doesn't persist across browser refreshes (after logout)
- ❌ Can't create new users (only predefined test users)
- ❌ No real database operations
- ❌ No email verification flows

## 🐛 Troubleshooting

### Can't see the login page?
- Make sure dev server is running: `npm run dev`
- Navigate to `http://localhost:3000/login`

### Login not working?
- Check that you're copying the email and password exactly as shown
- Make sure the yellow "DEMO MODE" banner is visible
- Try refreshing the page

### Want to reset everything?
- Open browser DevTools (F12)
- Go to Application > Local Storage
- Clear `mockUser` item
- Refresh the page

## 📚 Next Steps

1. **Try all roles** - Login with each credential to see different permissions
2. **Explore features** - Navigate through the dashboard and available features
3. **Test workflows** - Try common HR workflows like leave requests
4. **Check responsiveness** - Test on different screen sizes
5. **Set up real database** - Follow `SETUP_USERS.md` when ready for production setup

---

**Questions?** Check `SETUP_USERS.md` for detailed database setup instructions.

**Enjoying the demo?** Remember to change these passwords before deploying to production! 🔒
