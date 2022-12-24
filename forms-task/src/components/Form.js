import React, { Component } from 'react'
import './form.css'
export default class Form extends Component {
state={
    name:'',
    surname:'',
    email:'',
    phone:'',
    comment:''
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

handleSubmit=(e)=>{
    e.preventDefault();
    alert('successfully sended!!!!');
    console.log(this.state)
}

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
<label htmlFor='name'>
    Name : <input type="text" id='name' name="name" onChange={this.handleChange} required/>
</label>
<label htmlFor='surname'>
    Surname:
    <input type="text" id='surname' name="surname"onChange={this.handleChange} required/>
</label>
<label htmlFor='email'>
    E-mail:
    <input type="email" id='email' name="email" onChange={this.handleChange} />
</label>
<label htmlFor='phone'>
    Phone Number:
    <input type="tel" id='phone' name="phone" onChange={this.handleChange} />
</label>
<label htmlFor='comment'>
    Comment:
  <textarea id='comment' name="comment" onChange={this.handleChange} >
  </textarea>
</label>

<button type="submit" className="btn">
    Send
</button>
</form>
      </div>
    )
  }
}
