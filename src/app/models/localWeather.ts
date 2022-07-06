import { Main } from "./main";

export class LocalWeather {

    weather: any;
    main: Main;
    name: String;
    
    constructor(weather: any, main: Main, name: String) {
        this.weather = weather,
        this.main = main,
        this.name = name
    }
 
}