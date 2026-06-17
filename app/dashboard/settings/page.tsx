'use client';

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email || '');
        setName(user.user_metadata?.full_name || '');
      }
    }
    loadUser();
  }, []);

  async function handleProfileUpdate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const { error } = await supabase.auth.updateUser({
      data: { full_name: name },
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Profile updated successfully.' });
    }
    setSaving(false);
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    if (newPassword !== confirmNewPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match.' });
      setSaving(false);
      return;
    }

    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'New password must be at least 6 characters.' });
      setSaving(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Password changed successfully.' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }
    setSaving(false);
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Profile */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-6 font-[family-name:var(--font-heading)]">
          Profile Settings
        </h3>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#4A4258] mb-1.5 font-[family-name:var(--font-body)]">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4A4258] mb-1.5 font-[family-name:var(--font-body)]">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              className="input-field bg-[#F5F0EB] cursor-not-allowed"
              disabled
              readOnly
            />
            <p className="text-xs text-[#A89F94] mt-1 font-[family-name:var(--font-body)]">
              Email address cannot be changed.
            </p>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>

      {/* Password */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-6 font-[family-name:var(--font-heading)]">
          Change Password
        </h3>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#4A4258] mb-1.5 font-[family-name:var(--font-body)]">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="input-field"
              placeholder="At least 6 characters"
              required
              minLength={6}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4A4258] mb-1.5 font-[family-name:var(--font-body)]">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="input-field"
              placeholder="Re-enter new password"
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Changing...' : 'Change Password'}
          </button>
        </form>
      </div>

      {/* Message */}
      {message && (
        <div
          className={`p-4 rounded-xl text-sm font-[family-name:var(--font-body)] ${
            message.type === 'success'
              ? 'bg-[#ECFDF5] text-[#059669] border border-[#059669]/20'
              : 'bg-[#FFF1F0] text-[#FF6B6B] border border-[#FF6B6B]/20'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}