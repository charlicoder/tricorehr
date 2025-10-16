'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Eye, EyeOff, Building2 } from 'lucide-react';
import { useAuth } from '@/lib/hooks/useAuth';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();
  const useMockAuth = process.env.NEXT_PUBLIC_USE_MOCK_AUTH === 'true';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { data, error } = await signIn(email, password);

    if (error) {
      toast.error('Login failed', {
        description: error.message,
      });
    } else if (data) {
      toast.success('Welcome back!');
      router.push('/dashboard');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {useMockAuth && (
        <div className="absolute top-0 left-0 right-0 bg-amber-500 text-white px-4 py-2 text-center text-sm font-medium z-50">
          🧪 DEMO MODE - Use test credentials from SETUP_USERS.md
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white rounded-tl-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-center px-6 py-12" style={{ marginTop: useMockAuth ? '40px' : '0' }}>
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <Building2 className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Tricore HR</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Sign in to your account
            </h1>
            {useMockAuth && (
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs font-semibold text-amber-900 mb-2">Test Credentials:</p>
                <div className="text-xs text-amber-800 space-y-1">
                  <div>• superadmin@tricore.com / Super@123</div>
                  <div>• admin@tricore.com / Admin@123</div>
                  <div>• hrmanager@tricore.com / HRManager@123</div>
                  <div>• manager@tricore.com / Manager@123</div>
                  <div>• employee@tricore.com / Employee@123</div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                User
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="admin2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border-gray-200 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <button
                  type="button"
                  className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Forgot your password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border-gray-200 h-12 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember me on this device
              </label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-gray-200 hover:bg-gray-50"
            >
              <Mail className="h-5 w-5 mr-2 text-gray-600" />
              Sign in with Email
            </Button>

            <div className="text-center text-sm text-gray-600">
              New to Tricore HR?{' '}
              <button
                type="button"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Create account
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-white/90">
          <p className="mb-2">
            Tricore HR · <a href="#" className="hover:underline">Privacy & terms</a>
          </p>
          <p className="text-xs">
            Never share your Tricore HR credentials. If multiple people need access to your account, invite them as team members in settings.
          </p>
        </div>
      </div>
    </div>
  );
}
