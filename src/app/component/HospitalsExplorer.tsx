'use client';

import { useEffect, useMemo, useState } from 'react';
import { RotateCcw, Search, SearchX, X } from 'lucide-react';

/** The searchable facts for one hospital (the card itself is rendered on the server and passed in via `cards`). */
export interface ExplorerItem {
  id: number;
  name: string;
  location: string;
  town: string;
  district: string;
  is24x7: boolean;
  specialtyTags: string[];
}

const norm = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9 ]+/g, ' ');

/**
 * Hospital listing with instant search + filters (district, specialty, 24x7). Everything runs in the
 * browser, so there is no page reload; the filters are mirrored into the URL so a link keeps its state.
 */
export default function HospitalsExplorer({ items, cards }: { items: ExplorerItem[]; cards: Record<number, React.ReactNode> }) {
  const districts = useMemo(() => Array.from(new Set(items.map((h) => h.district))).sort((a, b) => a.localeCompare(b)), [items]);

  // Specialties that appear on at least two hospitals, most common first
  const specialties = useMemo(() => {
    const counts = new Map<string, number>();
    items.forEach((h) => h.specialtyTags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return Array.from(counts.entries())
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag]) => tag);
  }, [items]);

  const [query, setQuery] = useState('');
  const [district, setDistrict] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [only247, setOnly247] = useState(false);
  const [urlRead, setUrlRead] = useState(false);

  // Apply filters from the URL (?q=&district=&specialty=&24x7=1) once, after the server-rendered list is on screen
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = params.get('district') ?? '';
    const sp = params.get('specialty') ?? '';
    setQuery(params.get('q') ?? '');
    setDistrict(districts.includes(d) ? d : '');
    setSpecialty(specialties.includes(sp) ? sp : '');
    setOnly247(params.get('24x7') === '1');
    setUrlRead(true);
  }, [districts, specialties]);

  // Mirror the filters in the address bar (no navigation, no reload)
  useEffect(() => {
    if (!urlRead) return; // don't wipe the incoming query string before it has been applied
    const next = new URLSearchParams();
    if (query.trim()) next.set('q', query.trim());
    if (district) next.set('district', district);
    if (specialty) next.set('specialty', specialty);
    if (only247) next.set('24x7', '1');
    const qs = next.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`);
  }, [urlRead, query, district, specialty, only247]);

  const results = useMemo(() => {
    const tokens = norm(query).split(' ').filter(Boolean);
    return items.filter((h) => {
      if (district && h.district !== district) return false;
      if (specialty && !h.specialtyTags.includes(specialty)) return false;
      if (only247 && !h.is24x7) return false;
      if (!tokens.length) return true;
      const haystack = norm(`${h.name} ${h.location} ${h.town} ${h.district} ${h.specialtyTags.join(' ')}`);
      return tokens.every((t) => haystack.includes(t));
    });
  }, [items, query, district, specialty, only247]);

  const hasFilters = Boolean(query.trim() || district || specialty || only247);
  const clear = () => {
    setQuery('');
    setDistrict('');
    setSpecialty('');
    setOnly247(false);
  };

  return (
    <div>
      {/* Filter bar */}
      <div className="card mb-8 p-4 sm:p-5" role="search" aria-label="Find a hospital">
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr_auto] md:items-end">
          <div>
            <label htmlFor="hospital-search" className="field-label">
              Search by hospital, town or specialty
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
              <input
                id="hospital-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Kushalnagar, orthopedics…"
                autoComplete="off"
                className="field-input pl-12 pr-11"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-1.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-brand-50"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="hospital-district" className="field-label">
              District
            </label>
            <select id="hospital-district" value={district} onChange={(e) => setDistrict(e.target.value)} className="field-input">
              <option value="">All districts</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <label className="flex min-h-[2.9rem] cursor-pointer select-none items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-2 has-[:checked]:border-emerald-700 has-[:checked]:bg-emerald-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-700">
            <input
              type="checkbox"
              checked={only247}
              onChange={(e) => setOnly247(e.target.checked)}
              className="h-5 w-5 accent-emerald-700"
            />
            <span className="text-sm font-semibold text-ink">Open 24x7 only</span>
          </label>
        </div>

        {specialties.length > 0 && (
          <fieldset className="mt-4">
            <legend className="field-label">Specialty</legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={specialty === ''}
                onClick={() => setSpecialty('')}
                className={`min-h-[2.5rem] rounded-full border px-4 text-sm font-semibold transition ${
                  specialty === '' ? 'border-brand-700 bg-brand-700 text-white' : 'border-brand-200 bg-white text-brand-800 hover:bg-brand-50'
                }`}
              >
                All
              </button>
              {specialties.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={specialty === s}
                  onClick={() => setSpecialty(specialty === s ? '' : s)}
                  className={`min-h-[2.5rem] rounded-full border px-4 text-sm font-semibold transition ${
                    specialty === s ? 'border-brand-700 bg-brand-700 text-white' : 'border-brand-200 bg-white text-brand-800 hover:bg-brand-50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>
        )}
      </div>

      {/* Result count */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-ink-soft" role="status" aria-live="polite">
          Showing <strong className="text-brand-900">{results.length}</strong> of {items.length} hospitals
        </p>
        {hasFilters && (
          <button type="button" onClick={clear} className="inline-flex min-h-[2.5rem] items-center gap-2 rounded-full px-3 text-sm font-semibold text-brand-800 hover:bg-brand-50">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Clear filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((hospital, i) => (
            <li
              key={hospital.id}
              // Cards below the first row are not rendered (or their images fetched) until they approach the viewport
              className={`${i >= 4 ? '[contain-intrinsic-height:auto_28rem] [content-visibility:auto]' : ''} ${hasFilters ? 'animate-riseIn' : ''}`.trim() || undefined}
              style={hasFilters ? { animationDelay: `${Math.min(i, 7) * 40}ms` } : undefined}
            >
              {cards[hospital.id]}
            </li>
          ))}
        </ul>
      ) : (
        <div className="card flex flex-col items-center gap-3 px-6 py-10 text-center">
          <SearchX className="h-12 w-12 text-brand-300" aria-hidden="true" />
          <h3 className="text-h3 text-brand-950">No hospitals match your search</h3>
          <p className="max-w-md text-ink-soft">Try a different town or specialty, or clear the filters to see all our hospitals.</p>
          <button type="button" onClick={clear} className="btn btn-primary mt-2">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
