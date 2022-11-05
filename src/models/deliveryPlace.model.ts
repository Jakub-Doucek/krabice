import {AddressModel} from "./address.model"

export class DeliveryPlaceModel
{
    public id: number = 0;
    public name: string = '';
    public address: AddressModel = new AddressModel();
}