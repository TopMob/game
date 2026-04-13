import { mockContent } from '../../data/mockContent.js';

export function createLocalProvider() {
  return {
    async searchPosts({ query, tags, mediaType }) {
      const allTags = [...tags, ...query.split(/\s+/).filter(Boolean)].map((tag) => tag.toLowerCase());
      return mockContent.filter((item) => {
        const itemTags = item.tags.map((tag) => tag.toLowerCase());
        const typeMatch = mediaType === 'all' || item.mediaType === mediaType;
        const tagsMatch = allTags.every((tag) => itemTags.includes(tag) || item.title.toLowerCase().includes(tag));
        return typeMatch && tagsMatch;
      });
    },
    async getPostById(id) {
      return mockContent.find((item) => item.id === id) || null;
    },
    async searchTags(term) {
      const tags = [...new Set(mockContent.flatMap((item) => item.tags))];
      return tags
        .filter((tag) => tag.toLowerCase().includes(term.toLowerCase()))
        .slice(0, 12)
        .map((tag) => ({ id: tag, name: tag, count: 1, source: 'local' }));
    }
  };
}
