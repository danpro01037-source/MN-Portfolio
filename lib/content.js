/**
 * Content library - Backward compatibility layer
 * Re-exports from services/content.service.js for existing imports
 * 
 * @deprecated Import directly from '@/services/content.service' in new code
 */

export {
  getContentByType,
  getContentById,
  getAllContentIds,
  getContentBySubfolder,
} from '@/services/content.service';
