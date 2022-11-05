import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'
import {OrganizationModel} from '../models/organization.model'


interface IOrganizationProps {
  organization: OrganizationModel;
}


const Organization = ( props: IOrganizationProps ) => (
    <div className="box todo-item level is-mobile">
      <div className="level-left">
        <label className={`level-item todo-description`}>
          <input className="input" />
          <input className="input"
                     value={props.organization.name}
                     placeholder="name"
                     />
          <span>{props.organization.name}</span>
        </label>
      </div>
      <div className="level-right">
        <a className="update level-item">Update</a>
      </div>
    </div>
  )

interface IOrganizationsProps {
  organizations?: OrganizationModel[];
}

interface IOrganitationsState {
    newOrganization: OrganizationModel;
}

class Organizations extends Component <IOrganizationsProps, IOrganitationsState> {
    constructor(props: IOrganizationsProps)
    {
        super(props)

        this.state = { newOrganization: new OrganizationModel() }
    }

  onNewOrganizationNameChanged(event: React.FormEvent<HTMLInputElement>)  
  {
    let newOrganization = this.state.newOrganization;
    newOrganization.name = event.currentTarget.value;
    this.setState({ newOrganization: newOrganization });
  }

  onNewOrganizationAddressChanged(event: React.FormEvent<HTMLInputElement>)  
  {
    let newOrganization = this.state.newOrganization;
    newOrganization.address = event.currentTarget.value;
    this.setState({ newOrganization: newOrganization });
  }


  render() {

    let isSaving: boolean = false;
    let isLoading: boolean = false;

    return (

      <section className="section full-column">
        <h1 className="title white">Organizations</h1>
        {/* <div className="error">{error}</div> */}

        <form className="form">
          <div className="field has-addons" style={{ justifyContent: 'center' }}>
            <div className="control">
              <input className="input"
                     value={this.state.newOrganization.name}
                     placeholder="Name"
                     onChange={(e) => this.onNewOrganizationNameChanged(e)}
                     />

              <input className="input"
                     value={this.state.newOrganization.address}
                     placeholder="Address"
                     onChange={(e) => this.onNewOrganizationAddressChanged(e)}
                     />
            </div>

            <div className="control">
              <button className={`button is-success ${(isLoading || isSaving) && "is-loading"}`}
                      disabled={isLoading || isSaving}>Add</button>
            </div>
          </div>
        </form>

        <div className="container todo-list">
          {this.props.organizations && this.props.organizations.map((organization: OrganizationModel) => <Organization organization={organization}/> )}
        </div>
      </section>
    );
  }
}

// const mapStateToProps = (state: any) => {
//   return {
//     todos: state.todos.items,
//     isLoading: state.todos.loading,
//     isSaving: state.todos.saving,
//     error: state.todos.error
//   }
// }

// const mapDispatchToProps = {
//   addTodo,
//   toggleTodo,
//   deleteTodo,
//   fetchTodos
// }

export default Organizations