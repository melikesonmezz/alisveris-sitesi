import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class FormDemo extends Component {
    state={kullaniciadi:'',sehirAdi:''}
    onChangeHandle=(event)=>{
       // this.setState({kullaniciadi:event.target.value})
       let name=event.target.name;//name'İ alır
       let value=event.target.value;//value alır

       this.setState({[name]:value})
    }
    onSubmitHandler=(event)=>{
      event.preventDefault()//kullanıcın adını kaydetleyi sağlar silinmez
    alert(this.state.kullaniciadi)
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
            <h3>Kullanıcı Adı</h3>
            <input name="kullaniciadi" type="text" onChange={this.onChangeHandle}></input>
            <h2>Kullanıcının Adı:{this.state.kullaniciadi}</h2>

            <h3>Şehir Adı</h3>
            <input name="sehirAdi" type="text" onChange={this.onChangeHandle}></input>
            <h2>Şehir Adı:{this.state.sehirAdi}</h2>
            <input type="submit" value="Kaydet"/>
        </Form>
      </div>
    )
  }
}
