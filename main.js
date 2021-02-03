class Webseries {
    constructor(title) {
      this.title = title;
      // this.director = director;
      // this.stars = stars;
      // this.streamingOn = streamingOn;
      console.log("Inside webseries class");
    }
  
    get title() {
      return this._title;
    }
    set title(value) {
      this._title = value;
    }
  
    // get director() {
    //   return this.director;
    // }
    // set director(newDirector) {
    //   this.director = newDirector;
    // }
  
    // get stars() {
    //   return this.stars;
    // }
    // set stars(newStars) {
    //   this.stars = newStars;
    // }
    // get streamingOn() {
    //   return this.streamingOn;
    // }
  
    // set streamingOn(newStreamingOn) {
    //   this.streamingOn = newStreamingOn;
    // }
  }
  
  let obj = new Webseries("New Web Series");
//   obj.title();
  console.log(obj.title);
//console.log(title(webcard[0]));
  