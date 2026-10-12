import { STORY_VIDEOS, type VideoItem } from '../data/site';
import YouTubeFacade from './YouTubeFacade';

interface VideoSectionProps {
  /** First video is shown large; the rest sit in a grid underneath. */
  videos?: VideoItem[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  tinted?: boolean;
}

/** Responsive video block with click-to-load YouTube players (youtube-nocookie.com). */
const VideoSection = ({
  videos = STORY_VIDEOS,
  eyebrow = 'Watch',
  heading = 'See CurePlus Hospitals in action',
  intro = 'Meet the teams, see our hospitals and hear how we are bringing quality care closer to home.',
  tinted = false,
}: VideoSectionProps) => {
  const [featured, ...more] = videos;
  if (!featured) return null;

  return (
    <section id="video" className={`section ${tinted ? 'section-tint' : ''}`} aria-labelledby="video-heading">
      <div className="container-page">
        <div className="section-heading" data-reveal>
          <p className="eyebrow justify-center">{eyebrow}</p>
          <h2 id="video-heading">{heading}</h2>
          <p>{intro}</p>
        </div>

        <div className="mx-auto max-w-4xl" data-reveal>
          <YouTubeFacade videoId={featured.id} title={featured.title} />
          <h3 className="mt-4 text-h3 text-brand-950">{featured.title}</h3>
          {featured.date && <p className="text-sm text-ink-muted">{featured.date}</p>}
          <p className="copy mt-1">{featured.description}</p>
        </div>

        {more.length > 0 && (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((video, i) => (
              <li key={video.id} data-reveal style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}>
                <YouTubeFacade videoId={video.id} title={video.title} className="!shadow-card" />
                <h3 className="mt-3 text-base font-semibold leading-snug text-brand-950">{video.title}</h3>
                {video.date && <p className="mt-0.5 text-sm text-ink-muted">{video.date}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
