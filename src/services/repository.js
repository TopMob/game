import { getRuntimeConfig } from '../config/runtime.js';
import { normalizeCollection, normalizeMediaItem, normalizeTags } from './normalizer.js';
import { createLocalProvider } from './providers/LocalProvider.js';
import { createSupabaseProvider } from './providers/SupabaseProvider.js';

function resolveProvider(config) {
  const configured = Boolean(config.functionsBase && config.supabaseAnonKey);
  if (configured) {
    return createSupabaseProvider({
      functionsBase: config.functionsBase,
      anonKey: config.supabaseAnonKey
    });
  }
  return createLocalProvider();
}

export function createRepository() {
  const config = getRuntimeConfig();
  const provider = resolveProvider(config);

  async function searchMedia({ query = '', tags = [], mediaType = 'all', limit = 48, page = 0 }) {
    const raw = await provider.searchPosts({ query, tags, mediaType, limit, page });
    return normalizeCollection(raw);
  }

  async function getMediaById(id) {
    const raw = await provider.getPostById(id);
    return raw ? normalizeMediaItem(raw) : null;
  }

  async function searchTags(term, limit = 12) {
    const raw = await provider.searchTags(term, limit);
    return normalizeTags(raw);
  }

  return { searchMedia, getMediaById, searchTags };
}
