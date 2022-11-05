import {AddressModel} from "./address"

export class DeliveryPlaceModel
{
    public id: number = 0;
    public name: string = '';
    public address: AddressModel = new AddressModel;
}