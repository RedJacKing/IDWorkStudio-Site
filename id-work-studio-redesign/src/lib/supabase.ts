import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qyawlxbprrxpileielnh.supabase.co';
const supabaseKey = 'sb_publishable_34JrmsiRBo-aqp7Ief5nnA_TGm8e6LU';

export const supabase = createClient(supabaseUrl, supabaseKey);
