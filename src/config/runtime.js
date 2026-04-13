const defaults = {
  supabaseUrl: '',
  supabaseAnonKey: '',
  functionsBase: ''
};

export function getRuntimeConfig() {
  const runtime = window.__APP_CONFIG__ || {};
  return {
    supabaseUrl: runtime.supabaseUrl || defaults.supabaseUrl,
    supabaseAnonKey: runtime.supabaseAnonKey || defaults.supabaseAnonKey,
    functionsBase: runtime.functionsBase || defaults.functionsBase
  };
}
