/**
 * Content Service
 * Handles all content-related operations (moved from lib/content.js)
 * This is a server-side service for reading markdown files
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const CONTENT_DIRECTORY = path.join(process.cwd(), 'content');

/**
 * Get all content items of a specific type
 * @param {string} type - Content type (e.g., 'projects', 'blog')
 * @returns {Promise<Array>} Array of content items sorted by date (newest first)
 */
export async function getContentByType(type) {
  const typeDir = path.join(CONTENT_DIRECTORY, type);

  if (!fs.existsSync(typeDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDir).filter((f) => f.endsWith('.md'));

  const allContent = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(typeDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: metadata, content } = matter(fileContents);

      const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(content);
      const contentHtml = processedContent.toString();

      return {
        id,
        metadata,
        content: contentHtml,
        rawContent: content,
      };
    })
  );

  return allContent.sort((a, b) => {
    if (a.metadata.date && b.metadata.date) {
      return new Date(b.metadata.date) - new Date(a.metadata.date);
    }
    return 0;
  });
}

/**
 * Get a single content item by type and id
 * @param {string} type - Content type
 * @param {string} id - Content id
 * @returns {Promise<Object|null>} Content item or null if not found
 */
export async function getContentById(type, id) {
  const fullPath = path.join(CONTENT_DIRECTORY, type, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: metadata, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    metadata,
    content: contentHtml,
    rawContent: content,
  };
}

/**
 * Get all content IDs for a type (for static generation)
 * @param {string} type - Content type
 * @returns {Array} Array of { id: string } objects
 */
export function getAllContentIds(type) {
  const typeDir = path.join(CONTENT_DIRECTORY, type);

  if (!fs.existsSync(typeDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDir).filter((f) => f.endsWith('.md'));

  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }));
}

/**
 * Get content from a subfolder within a type
 * @param {string} type - Content type (e.g., 'publications')
 * @param {string} subfolder - Subfolder name (e.g., 'main-author')
 * @returns {Promise<Array>} Array of content items sorted by date
 */
export async function getContentBySubfolder(type, subfolder) {
  const subDir = path.join(CONTENT_DIRECTORY, type, subfolder);

  if (!fs.existsSync(subDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(subDir).filter((f) => f.endsWith('.md'));

  const allContent = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(subDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: metadata, content } = matter(fileContents);

      const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .process(content);
      const contentHtml = processedContent.toString();

      return {
        id,
        metadata,
        content: contentHtml,
        rawContent: content,
      };
    })
  );

  return allContent.sort((a, b) => {
    if (a.metadata.date && b.metadata.date) {
      return new Date(b.metadata.date) - new Date(a.metadata.date);
    }
    return 0;
  });
}

