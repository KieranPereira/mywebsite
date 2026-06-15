import {FC, memo, useMemo} from 'react';

import {Project, ProjectMedia} from '../../data/dataDef';
import DocumentFrame from './visuals/DocumentFrame';
import PhotoMosaic from './visuals/PhotoMosaic';
import VideoTheater from './visuals/VideoTheater';

interface ProjectVisualBlockProps {
  project: Project;
  isActive: boolean;
}

const partitionMedia = (project: Project) => {
  const all: ProjectMedia[] = [project.media, ...(project.gallery ?? [])];
  return {
    videos: all.filter(m => m.type === 'video'),
    images: all.filter(m => m.type === 'image'),
    documents: all.filter(m => m.type === 'document'),
  };
};

/**
 * Picks a layout based on what media the project actually has:
 * - Video → cinematic theater
 * - Document → presentation/PDF frame
 * - Images → aspect-aware mosaic (no cropping)
 * - Mixed → stacked or side-by-side combos
 */
const ProjectVisualBlock: FC<ProjectVisualBlockProps> = memo(({project, isActive}) => {
  const {videos, images, documents} = useMemo(() => partitionMedia(project), [project]);
  const primaryVideo = videos[0];
  const hasVideo = videos.length > 0;
  const hasDocs = documents.length > 0;
  const hasPhotos = images.length > 0;

  // Video + document (e.g. OPG pitch deck, UCL report)
  if (hasVideo && hasDocs) {
    return (
      <div className="flex h-full min-h-0 flex-col gap-3">
        <VideoTheater alt={project.title} isActive={isActive} media={primaryVideo!} />
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-2">
          <DocumentFrame compact media={documents[0]} />
          {hasPhotos && <PhotoMosaic compact images={images} title={project.title} />}
          {documents.length > 1 && <DocumentFrame compact media={documents[1]} />}
        </div>
      </div>
    );
  }

  // Video + photos only
  if (hasVideo && hasPhotos) {
    return (
      <div className="flex h-full min-h-0 flex-col gap-3">
        <VideoTheater alt={project.title} isActive={isActive} media={primaryVideo!} />
        <PhotoMosaic compact images={images} title={project.title} />
      </div>
    );
  }

  // Video only
  if (hasVideo) {
    return <VideoTheater alt={project.title} isActive={isActive} media={primaryVideo!} />;
  }

  // Document-primary (presentation slide)
  if (hasDocs && !hasPhotos) {
    return (
      <div className="flex h-full flex-col gap-3">
        {documents.map((doc, i) => (
          <DocumentFrame key={i} media={doc} />
        ))}
      </div>
    );
  }

  // Document + photos
  if (hasDocs && hasPhotos) {
    return (
      <div className="flex h-full min-h-0 flex-col gap-3 lg:grid lg:grid-cols-5 lg:gap-4">
        <div className="lg:col-span-3">
          <DocumentFrame media={documents[0]} />
        </div>
        <div className="lg:col-span-2">
          <PhotoMosaic images={images} title={project.title} />
        </div>
      </div>
    );
  }

  // Photos only
  if (hasPhotos) {
    return <PhotoMosaic images={images} title={project.title} />;
  }

  // Document fallback from links handled in data — empty state
  return null;
});

ProjectVisualBlock.displayName = 'ProjectVisualBlock';
export default ProjectVisualBlock;
