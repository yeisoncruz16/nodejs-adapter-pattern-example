const AnalyticsLibrary = require("./AnalyticsLibrary");
const JsonReadear = require("./JsonReader");
const JsonToXmlAdapter = require("./JsonToXmlAdapter");

const initialDataInstance = new JsonReadear();

const data = new JsonToXmlAdapter(initialDataInstance).read();

new AnalyticsLibrary().process(data);