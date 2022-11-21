import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'


export default class kategori extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kategoriler:[
            {kategoriId:1,kategoriIsim:"bilgisayar"},
            {kategoriId:2,kategoriIsim:"masa"},
            {kategoriId:3,kategoriIsim:"laptop"},
            {kategoriId:4,kategoriIsim:"kalem"}
        ],
       
    };
}

kategoriGetir()
{
  fetch("http://localhost:3001/categories")
  .then(rspnse=>rspnse.json())
  .then(data=>this.setState({kategoriler:data}))//kategori deki bilgiler artık yok olur ve 
  //json içindeki bilegiler gelir
  
}

componentDidMount()
{
  this.kategoriGetir();
}

render() {
    return (
      <div>
        <ListGroup>
            {this.state.kategoriler.map(kategori=>(
            <ListGroupItem 
            active={kategori.categoryName===this.props.seciliKategori?true:false}
            onClick={()=>this.props.kategoriDegistir(kategori)}
            key={kategori.id}>{kategori.categoryName}</ListGroupItem>
            ))}
        
        </ListGroup>
    <h4>{this.props.seciliKategori}</h4>
      </div>
    )
  }
}

