import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'
import { fetchWishes, addGiver } from '../actions/wishes';

interface IWishProps {
  wish?: any;
  id?: any;
  isLoading: any;
  isSaving: any;
  addGiver: any;
  //onToggle?: any;
}
//  <td className="wishes-column">{props.wish.giver}</td>

interface IWishState {
  newGiver: String;
}

class Wish extends Component <IWishProps, IWishState> {
  state = { newGiver: '' }

  addGiver (event: any) {
    event.preventDefault() // Prevent form from reloading page
    const { newGiver } = this.state

    if(newGiver) {
      this.props.addGiver(this.props.wish._id, newGiver)
      this.setState({ newGiver: newGiver })
    }
  }

  render() {
    let { newGiver } = this.state;
    const { isLoading, isSaving} = this.props
    const { giver } = this.props.wish

    return (
    <tr>
    <td className="wishes-column name-column">{this.props.wish.name}</td>
    <td className="wishes-column description-column">{this.props.wish.description}</td>
    <td className="wishes-column age-column">{this.props.wish.age}</td>
    <td className="wishes-column organization-column">{this.props.wish.organization}</td>
        <td className="wishes-column">
          {!giver ? (
          <form className="form" onSubmit={this.addGiver.bind(this)}>
            <div className="field has-addons" style={{ justifyContent: 'center' }}>
              <div className="control">
                <input className="input"
                  value={newGiver}
                  placeholder="Váš email"
                  onChange={(e) => this.setState({ newGiver: e.target.value })} />
              </div>
              <div className="control">
                <button className={`button is-success ${(isLoading || isSaving) && "is-loading"}`}
                  disabled={isLoading || isSaving}>Obdarovat</button>
              </div>
            </div>
          </form>
          ) : (
            this.props.wish.giver
          )
        }
        </td>
  </tr>
  )
  }
}


interface IWishesProps {
  fetchWishes?: any;
  addGiver?: any;
  wishes: any;
  isLoading: any;
  isSaving: any;
  error: any;
}

interface IWishesState {
  newWish: String;
}

class Wishes extends Component <IWishesProps, IWishesState> {
  state = { newWish: '' }

  componentDidMount() {
    this.props.fetchWishes()
  }

  render() {
    let { newWish } = this.state
    const { wishes, isLoading, error } = this.props

    const total = wishes.length
    const complete = wishes.filter((wish: any) => wish.giver).length
    const incomplete = wishes.filter((wish: any) => !wish.giver).length

    return (
      <section className="section full-column">
        <h1 className="title white">Vánoční Krabice</h1>
        <div className="error">{error}</div>

        <div className="container wishes-list">
        <table>
          <tr>
            <th className="wishes-column name-column">Jméno</th>
            <th className="wishes-column description-column">Popis</th>
            <th className="wishes-column age-column">Věk</th>
            <th className="wishes-column organization-column">Organizace</th>
            <th className="wishes-column">Dárce</th>
          </tr>
          {wishes.map((wish: any) => <Wish key={wish._id}
                                     id={wish._id}
                                     wish={wish}
                                     isLoading={this.props.isLoading}
                                     isSaving={this.props.isSaving}
                                     addGiver={this.props.addGiver}/> )}
        </table>

          <div className="white">
            Celkem přání: {total}  , Zabraných přání: {complete} , Volných přání: {incomplete}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    wishes: state.wishes.items,
    isLoading: state.wishes.loading,
    isSaving: state.wishes.saving,
    error: state.wishes.error
  }
}

const mapDispatchToProps = {
    fetchWishes,
    addGiver
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishes)