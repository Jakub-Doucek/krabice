import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'
import { addDeliveryPlace, deleteDeliveryPlace, fetchDeliveryPlaces } from '../actions/delivery_places';
import { DeliveryPlaceModel } from '../models/deliveryPlace.model';
import DeliveryPlace from './delivery_place';


interface IDeliveryPlacesProps {
  fetchDeliveryPlaces: any;
  addDeliveryPlace: any;
  deleteDeliveryPlace: any;
  deliveryPlaces: any;
  isLoading: any;
  isSaving: any;
  error: any;
  
}

interface IDeliveryPlacesState {
  newDeliveryPlace: DeliveryPlaceModel;
}

class DeliveryPlaces extends Component <IDeliveryPlacesProps, IDeliveryPlacesState> {
  state = { newDeliveryPlace: new DeliveryPlaceModel()}

  componentDidMount() {
    this.props.fetchDeliveryPlaces()
  }

  addDeliveryPlace (event: any) {
    event.preventDefault() // Prevent form from reloading page
    const { newDeliveryPlace } = this.state

    if(newDeliveryPlace) {
      this.props.addDeliveryPlace(newDeliveryPlace);
      this.setState({ newDeliveryPlace: new DeliveryPlaceModel() });
    }
  }

  onNewDelivaryPlaceNameChanged(event: React.FormEvent<HTMLInputElement>)  
  {
    let newDeliveryPlace = this.state.newDeliveryPlace;
    newDeliveryPlace.name = event.currentTarget.value;
    this.setState({ newDeliveryPlace: newDeliveryPlace });
  }

  render() {
    let { newDeliveryPlace } = this.state
    const { deliveryPlaces, isLoading, isSaving, error, deleteDeliveryPlace } = this.props

    const total = deliveryPlaces ? deliveryPlaces.length : 0;

    return (
      <section className="section full-column">
        <h1 className="title white">Delivery Places</h1>
        <div className="error">{error}</div>

        <form className="form" onSubmit={this.addDeliveryPlace.bind(this)}>
          <div className="field has-addons" style={{ justifyContent: 'center' }}>
            <div className="control">
              <input className="input"
                     value={newDeliveryPlace.name}
                     placeholder="New delivery place"
                     onChange={(e) => this.onNewDelivaryPlaceNameChanged(e)}/>
            </div>

            <div className="control">
              <button className={`button is-success ${(isLoading || isSaving) && "is-loading"}`}
                      disabled={isLoading || isSaving}>Add</button>
            </div>
          </div>
        </form>

        <div className="container todo-list">
          {deliveryPlaces ? deliveryPlaces.map((deliveryPlace: DeliveryPlaceModel) => <DeliveryPlace key={deliveryPlace.id}
                                     id={deliveryPlace.id}
                                     deliveryPlaceData={deliveryPlace}
                                     onDelete={() => deleteDeliveryPlace(deliveryPlace.id)}
                                     /> )
                          : null}
          <div className="white">
            Total: {total}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deliveryPlaces: state.deliveryPlaces.deliveryPlaces,
    isLoading: state.deliveryPlaces.loading,
    isSaving: state.deliveryPlaces.saving,
    error: state.deliveryPlaces.error
  }
}

const mapDispatchToProps = {
  addDeliveryPlace,
  deleteDeliveryPlace,
  fetchDeliveryPlaces
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPlaces)