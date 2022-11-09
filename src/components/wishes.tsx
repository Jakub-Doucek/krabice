import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'
import { fetchWishes, addGiver, addGiverFailConfirm } from '../actions/wishes';

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

    if(!!newGiver) {
      this.props.addGiver(this.props.wish._id, newGiver)
      this.setState({ newGiver: newGiver })
    } else {
      alert("Nejprve vyplň své jméno!")
    }
  }

  render() {
    let { newGiver } = this.state;
    const { isLoading, isSaving} = this.props
    const { giver } = this.props.wish

    return (
    <tr>
    <td className="wishes-column name-column">{this.props.wish.name}</td>
    <td className="wishes-column description-column">
      <span dangerouslySetInnerHTML={{__html: this.props.wish.description}} />
    </td>
    <td className="wishes-column age-column">{this.props.wish.age}</td>
    <td className="wishes-column organization-column">{this.props.wish.organization}</td>
        <td className="wishes-column organization-column">
          {!giver ? (
          <form className="form" onSubmit={this.addGiver.bind(this)}>
            <div className="field" style={{ justifyContent: 'center' }}>
              <div className="control">
                <input className="input"
                  value={newGiver}
                  placeholder="Zadej jméno"
                  onChange={(e) => this.setState({ newGiver: e.target.value })} />
              </div>
              <div className="control">
                <button className={`button is-success give-button ${(isLoading || isSaving) && "is-loading"}`}
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
  addGiverFailConfirm?: any;
  wishes: any;
  isLoading: any;
  isSaving: any;
  error: any;
  addGiverFailed: any;
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

    if (this.props.addGiverFailed){
      alert("Toto přání je již obsazené. Prosím obnovte stránku, aby se aktualizovala tabulka. (Pomocí klávesy F5)")
      this.props.addGiverFailConfirm();
    }

    return (
      <section className="section full-column">
        <h1 className="title white">Vánoční Krabice</h1>

        <div className='main-info'>
        Na této stránce zjistíte, jaké vánoční přání mají v ohrožených rodinách. Rodiny spolupracují s neziskovými organizacemi, svou situaci řeší, ale prostředky na vánoční dárky jim už nezbývají. 
        V seznamu je možné si rezervovat konkrétní dárek pro konkrétní dítě či maminku a zapsat se do tabulky. <br />
        Dárky prosím doneste <b>zabalené a popsané - jméno, věk a název organizace</b>. S takto označeným dárkem se zastavte do <b>Klubu 29 - Anežská 29, Pardubice</b>. Dárky doneste prosím do <b>9.12.</b>, ať je stihneme předat rodinám. 
        Dárky je možné nosit <b>od pondělí do soboty v čase 14-22 hodin</b>. Děkujeme za každý s láskou zabalený dárek!
        </div>

        <div className='description'>
          Více informací najdete ve facebookové skupině <a href="https://www.facebook.com/groups/477673940828096/">Krabice - skupina pro páchání dobra</a>. V případě dotazů a nejasností nás můžete kontaktovat přes email: iva.balik@seznam.cz nebo lenka.spanihelova@gmail.com
        </div>

        <div className="error">{error}</div>

        <div className="white">
            Celkem přání: {total}  , Zabraných přání: {complete} , Volných přání: {incomplete}
        </div>

        <div className="container wishes-list">
        <table>
          <tr>
            <th className="wishes-column name-column">Jméno</th>
            <th className="wishes-column description-column">Popis</th>
            <th className="wishes-column age-column">Věk</th>
            <th className="wishes-column organization-column">Organizace</th>
            <th className="wishes-column giver-column">Dárce</th>
          </tr>
          {wishes.map((wish: any) => <Wish key={wish._id}
                                     id={wish._id}
                                     wish={wish}
                                     isLoading={this.props.isLoading}
                                     isSaving={this.props.isSaving}
                                     addGiver={this.props.addGiver}/> )}
        </table>

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
    error: state.wishes.error,
    addGiverFailed: state.wishes.addGiverFailed
  }
}

const mapDispatchToProps = {
    fetchWishes,
    addGiver,
    addGiverFailConfirm
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishes)