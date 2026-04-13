import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { getPostById, searchPosts, searchTags } from '../_shared/gelbooru.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const action = body.action;

    if (action === 'searchPosts') {
      const items = await searchPosts({
        query: body.query || '',
        tags: Array.isArray(body.tags) ? body.tags : [],
        mediaType: body.mediaType || 'all',
        limit: Number(body.limit || 48),
        page: Number(body.page || 0)
      });
      return new Response(JSON.stringify({ items }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (action === 'getPostById') {
      const item = await getPostById(String(body.id || ''));
      return new Response(JSON.stringify({ item }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (action === 'searchTags') {
      const tags = await searchTags(String(body.term || ''), Number(body.limit || 12));
      return new Response(JSON.stringify({ tags }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error.message || error) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
