class Weather {
  constructor(city, state) {
    this.apiKey = '8UCXL9AZRDCXJUJBFQ3M54LFH';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
   const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}?key=${this.apiKey}` );

 //  const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}?key=${this.apiKey}`


    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}