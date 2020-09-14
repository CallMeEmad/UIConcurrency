import {ByteArray} from "xdata"

export interface Customer {
    id :number;
    name :string;
    lastName :string;
    internationalCode :string 
    telephoneNumber :string;
    address :string;
    rowVersion : ByteArray;
}