import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { DeliveryPlaceModel } from '../models/deliveryPlace.model';
import { Collapse } from 'react-collapse';


interface IDeliveryPlaceProps {
    deliveryPlaceData: DeliveryPlaceModel;
    id?: any;
    onDelete?: any;
    onChange?: any;
}

interface IDeliveryPlaceState {
    deliveryPlaceData: DeliveryPlaceModel;
    opened: boolean;
}

class DeliveryPlace extends Component<IDeliveryPlaceProps, IDeliveryPlaceState> {
    state = { opened: false, deliveryPlaceData: this.props.deliveryPlaceData }


    render() {

        return (

            <div className="block card">
                <header className="card-header">
                    <p className="card-header-title">
                        {this.state.deliveryPlaceData.name}
                    </p>
                    <button className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>

                <Collapse isOpened={false}>
                    <div className="card-content">
                        <div className="content">
                            <div className="block">
                                <b className="level-left">Address:</b>
                                <input className="input"
                                    value="Street"
                                    placeholder="Street placeholder"
                                />
                                <input className="input"
                                    value="postal code"
                                    placeholder="postal code placeholder"
                                />
                                <input className="input"
                                    value="city"
                                    placeholder="city placeholder"
                                />
                                <input className="input"
                                    value="psc"
                                    placeholder="psc placeholder"
                                />
                            </div>
                            <div className="control level block">
                                <button className={`button level-left is-danger is-outlined`}
                                    disabled={false}>Delete</button>
                                <button className={`button level-right is-success`}
                                    disabled={true}>Update</button>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default DeliveryPlace;