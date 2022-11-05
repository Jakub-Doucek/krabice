import {AddressModel} from "./address.model"
import {DeliveryPlaceModel} from "./deliveryPlace.model"

export class OrganizationModel
{
    public id: number = 0;
    public name: string = '';
    public address: string = '';
    public deliveryPlaces: DeliveryPlaceModel[] = [];
}