'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTimes, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ project, index }) {
  const { title, image, summary, description } = project.metadata || {};
  const excerpt = summary || description || '';

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative rounded-xl overflow-hidden bg-midnight-steel border-2 border-slate-700/80 hover:border-neural-blue/60 cursor-pointer hover-card shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-neural-blue/20 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-neural-blue/10 to-synapse-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 img-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t" />
            </div>
          )}

          <div className="p-5 relative z-10">
            <h3 className="text-lg font-display font-semibold text-ghost-white mb-2 group-hover:text-neural-blue transition-colors line-clamp-1">
              {title}
            </h3>

            <p className="text-muted-steel text-sm mb-4 line-clamp-3">
              {excerpt}
            </p>

            <span className="inline-flex items-center gap-1 text-sm text-neural-blue group-hover:text-synapse-cyan transition-colors">
              View Project
              <FontAwesomeIcon icon={faChevronRight} className="text-xs transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsClient({ projects = [] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(proj => {
        const title = proj.metadata?.title?.toLowerCase() || '';
        const summary = proj.metadata?.summary?.toLowerCase() || '';
        const description = proj.metadata?.description?.toLowerCase() || '';
        const tags = proj.metadata?.tag?.toLowerCase() || '';
        return title.includes(query) || summary.includes(query) || description.includes(query) || tags.includes(query);
      });
    }

    return result;
  }, [projects, searchQuery]);

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      const dateA = a.metadata?.date ? new Date(a.metadata.date) : new Date(0);
      const dateB = b.metadata?.date ? new Date(b.metadata.date) : new Date(0);
      return dateB - dateA;
    });
  }, [filteredProjects]);

  const hasActiveFilters = searchQuery.trim();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-neural-blue/10 text-neural-blue text-sm font-mono mb-4 border border-neural-blue/20">
          {'// Portfolio'}
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-light-text dark:text-ghost-white mb-4">
          My <span className="text-gradient">Projects</span>
        </h1>
        <p className="max-w-2xl mx-auto text-light-text-secondary dark:text-muted-steel mb-8">
          Explore the projects I've been working on
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-light-text-secondary dark:text-muted-steel"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title, description, or technology..."
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-light-surface dark:bg-midnight-steel/50 border border-light-border dark:border-slate-700/50 text-light-text dark:text-ghost-white placeholder-light-text-secondary dark:placeholder-muted-steel focus:outline-none focus:ring-2 focus:ring-neural-blue focus:border-transparent transition-all"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-light-text-secondary dark:text-muted-steel hover:text-light-text dark:hover:text-ghost-white transition-colors"
                aria-label="Clear search"
              >
                <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        {hasActiveFilters && (
          <p className="text-center mt-4 text-sm text-light-text-secondary dark:text-muted-steel">
            Showing {sortedProjects.length} of {projects.length} projects
          </p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {sortedProjects.length === 0 ? (
          <motion.div
            className="text-center glass-card p-12 max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="w-16 h-16 rounded-full bg-neural-blue/10 flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faFolder} className="text-neural-blue text-2xl" />
            </div>
            <h3 className="text-xl font-display font-semibold text-light-text dark:text-ghost-white mb-2">
              No projects found
            </h3>
            <p className="text-light-text-secondary dark:text-muted-steel">
              {searchQuery ? 'Try a different search query.' : 'Check back soon for updates!'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {sortedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
