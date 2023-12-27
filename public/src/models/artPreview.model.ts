class artPreview {
  private _artUrl: string;
  private _isVideo: boolean; 
  private _title: string;
  private _description: string | undefined;

  public artUrl():string { return this._artUrl };
  public isVideo(): boolean { return this._isVideo; }
  public title(): string { return this._title; }
  public desc(): string | undefined { return this._description; }
  
  constructor(artUrl: string, isVideo: boolean, title: string, description?: string) {
    this._artUrl = artUrl;
    this._isVideo = isVideo;
    this._title = title;
    this._description = description
  }
}

export default artPreview;