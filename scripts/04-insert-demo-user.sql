-- Insert demo user directly into auth.users table
-- Password hash for 'admin123' using bcrypt
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'admin@italytravel.com',
  '$2a$10$8K1p/a0dhrxiVXRJk4qi2OeEAhEBcvxhOMwrqzQxsKWqKtqzm5Eia', -- bcrypt hash for 'admin123'
  NOW(),
  NOW(),
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{"role": "admin"}',
  false,
  'authenticated'
) ON CONFLICT (email) DO NOTHING;

-- Insert corresponding profile
INSERT INTO profiles (id, email, role)
SELECT id, email, 'admin'
FROM auth.users 
WHERE email = 'admin@italytravel.com'
ON CONFLICT (id) DO NOTHING;
