class Webseries {
    constructor(title, director, stars, streamingOn) {
      this.title = title;
      this.director = director;
      this.stars = stars;
      this.streamingOn = streamingOn;
      console.log("Inside webseries class");
    }
  
    get title() {
      return this._title;
    }
    set title(value) {
      this._title = value;
    }
  
    get director() {
      return this._director;
    }
    set director(value) {
      this._director = value;
    }
  
    get stars() {
      return this._stars;
    }
    set stars(value) {
      this._stars = value;
    }
    get streamingOn() {
      return this._streamingOn;
    }
  
    set streamingOn(value) {
      this._streamingOn = value;
    }
  }
  
  let obj = new Webseries("Breaking Bad","Vince Gilligan","Bryan Cranston", "Netflix");
  console.log(obj.title, obj.director,obj.stars,obj.streamingOn);
  for(var i in obj) {  
    document.write("<p>" + obj[i] + "</p>");

  }