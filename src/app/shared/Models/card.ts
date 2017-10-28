
export class Card {
    name: string;
    layout: string;
    cmc: string;
    colors: string;
    type: string;
    supertypes: string;
    types: string;
    subtypes: string;
    rarity: string;
    set: string;
    setName: string;
    text: string;
    flavor: string;
    artist: string;
    number: string;
    power: string;
    toughness: string;
    loyalty: number;
    language: string;
    gameFormat: string;
    legality: string;
    id: string;
    multiverseid: string

    constructor(card: Card) {
        this.name = card.name;
        this.layout = card.layout;
        this.cmc = card.cmc;
        this.colors = card.colors;
        this.type = card.type;
        this.supertypes = card.supertypes;
        this.type = card.type;
        this.subtypes = card.subtypes;
        this.rarity = card.rarity;
        this.set = card.set;
        this.setName = card.setName;
        this.text = card.text;
        this.flavor = card.flavor;
        this.artist = card.artist;
        this.number = card.number;
        this.power = card.power;
        this.toughness = card.toughness;
        this.loyalty = card.loyalty;
        this.language = card.language;
        this.gameFormat = card.gameFormat;
        this.legality = card.legality;
        this.id = card.id;
        this.multiverseid = card.multiverseid;
    }
}