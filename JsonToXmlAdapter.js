class JsonToXmlAdapter {
    constructor(reader){
        this.reader = reader;
    }

    read(){
        const data = this.reader.read();
        // TODO complex logic to convert to xml
        return "<ml>";
    }
}

module.exports = JsonToXmlAdapter;