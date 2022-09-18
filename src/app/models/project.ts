export class Project {
    id: number;
    name: string;
    description: string;
    category: string;
    status: string;
    createdOn: Date;

    constructor(id: number, name: string, description: string, category: string, status: string, createdOn: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.status = status;
        this.createdOn = createdOn;
    }
}
