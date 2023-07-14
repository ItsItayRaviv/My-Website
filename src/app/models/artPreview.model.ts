class artPreview {
    private imageUrl: string;
    private videoUrl: string;

    public image():string { return this.imageUrl };
    public video():string { return this.videoUrl; };
  
    constructor(imageUrl: string, videoUrl: string) {
      this.imageUrl = imageUrl;
      this.videoUrl = videoUrl;
    }
  }

  export default artPreview;