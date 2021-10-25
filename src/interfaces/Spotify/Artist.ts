import { Image } from './shared';
import { ExternalUrls } from './shared/ExternalUrls';
import { Followers } from './shared/Followers';

export interface ArtistSimplified {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  popularity: number;
  type: string;
  uri: string;
}
