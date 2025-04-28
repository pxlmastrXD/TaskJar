// import supabase
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASEURL as string, process.env.SUPABASEKEY as string);

export default {
    supabase
}