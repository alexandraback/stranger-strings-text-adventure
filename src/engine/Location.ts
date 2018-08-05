import Item from './Item';

class Location {
    public id: string;
    public description: string;
    public image?: string;
    public locations: Map<string, Location>;
    public items: Map<string, Item>;

    constructor() {
        this.locations = new Map<string, Location>();
        this.items = new Map<string, Item>();
    }

    public setId(value: string): Location {
        this.id = value;
        return this;
    }

    public setDesc(value: string): Location {
        this.description = value;
        return this;
    }

    public setImg(value: string): Location {
        this.image = value;
        return this;
    }

    public link(path: string, location: Location): Location {
        this.locations[path.toLowerCase()] = location;
        return this;
    }

    public addItem(name: string, item: Item): Location {
        this.items.set(name.toLowerCase(), item);
        return this;
    }
}

export default Location;
