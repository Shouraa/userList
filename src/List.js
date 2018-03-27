import React, {Component} from "react";
import "./App.css";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      form: {
        fullname: '',
        email: '',
        phone: '',
      },
      editMode: false,
      editIndex: 0,
      };

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    }

  addItem() {
    if (this.state.editMode) {
      let people = this.state.people;
      
        people[this.state.editIndex] = this.state.form;
      

      this.setState({
        people: people,
        form: {
          fullname: '',
          email: '',
          phone: ''
        },
        editMode: false
      });

    } else {
      let people = this.state.people;

      people[people.length] = this.state.form;

      this.setState({
        people: people,
        form: {
          fullname: '',
          email: '',
          phone: ''
        },
        editMode: false
      });
    }
  }

  handleChange(e, name) {
    let form = this.state.form;
    form[name] = e.target.value;
    this.setState({form: form});
  }

  delete(index) {
    let people = this.state.people;
    
      people.splice(index, 1);
    

    this.setState({people: people});
  }

  edit(index) {
    let people = this.state.people;

    let form = {
      fullname: people[index].fullname,
      email: people[index].email,
      phone: people[index].phone
    }
   
      this.setState({
        form: form,
        editMode: true,
        editIndex: index
      });
    
  }

    generateEntries(entries) {
    let array = [];
    
    for (let counter = 0; counter < entries.length; counter++) {
      let person = entries[counter];

      array[counter] = (
        <tr key={counter}>
          <td>{person.fullname}</td>
          <td>{person.email}</td>
          <td>{person.phone}</td>
          <td>
            <button onClick={() => this.edit(counter)}>edit</button>
            <button onClick={() => this.delete(counter)}>delete</button>
          </td>
        </tr>
      );
    }

    return array;
  }

  
  render() {
    return (
      <div className="List">
        <div className="header">

          <input className="input1" type="text" value={this.state.form.fullname} onChange={(e) => this.handleChange(e, 'fullname')}
                 name="fullname" placeholder='Full name'/>
          <input className="input2" type="text" value={this.state.form.email} onChange={(e) => this.handleChange(e, 'email')} name="email"
                 placeholder='E-mail address'/>
          <input className="input1" type="text" value={this.state.form.phone} onChange={(e) => this.handleChange(e, 'phone')} name="phone"
                 placeholder='Phone number'/>

          <button className="button" onClick={() => this.addItem()}> Add New </button>

        </div>

        <table className="table">
        <tbody>
        <tr>
          <th>Name</th>
          <th>E-mail address</th>
          <th>Phone number</th>
          <th>Actions</th>
        </tr>
        {this.generateEntries(this.state.people)}
        </tbody>
      </table>
        
      </div>

    );
  }
}

export default List;