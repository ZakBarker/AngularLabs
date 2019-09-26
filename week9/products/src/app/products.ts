export class Products {
    objid:string;
    id:number;
    name:string;
    units:number;

    constructor(objid:string,_id:number,_name:string,_units:number)
    {
        this.objid = objid;
        this.id = _id;
        this.name = _name;
        
        this.units = _units;
    }
}
