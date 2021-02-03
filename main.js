export class Webseries {
    constructor(title, director, stars, streamingOn) {
      this.title = title;
      // this.director = director;
      // this.stars = stars;
      // this.streamingOn = streamingOn;
      console.log("Inside webseries class");
    }
  
    get title() {
      return this.title;
    }
    set title(newTitle) {
      this.title = newTitle;
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
  
  export let card1 = new Webseries("New Web Series");
  card1.getTitle();
  console.log(card1.getTitle());
//console.log(title(webcard[0]));
  