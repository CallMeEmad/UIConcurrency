import * as Interface from '../interface/error';
export class Error implements Interface.Error{
    public Detail : string;
    public Type : string;
    public Title : string;
    public StatusCode : number;
    public Instance : string;
}