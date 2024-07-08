import { PrivateConfig, SpotifyConfig } from '../interfaces/Config';
import { HttpClient } from './http/HttpManager';

export class Manager {
  protected http = new HttpClient(this.config, this.privateConfig);

  constructor(
    protected config: SpotifyConfig,
    protected privateConfig: PrivateConfig
  ) {}
}
