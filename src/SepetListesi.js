import React, { Component } from 'react';
import {Table,Button} from 'reactstrap';

export default class SepetListesi extends Component {
  renderSepet()
  {
    return(
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>KategoriID</th>
            <th>Ürün İsmi</th>
            <th>Birim Fiyat</th>
            <th>Units in Stock</th>
            <th>Adet</th>
            
          </tr>
        </thead>
        <tbody>
          {
            this.props.sepet.map(sepetUrun=>(
              <tr key={sepetUrun.urun.id}>
                <td>{sepetUrun.urun.id}</td>
                <td>{sepetUrun.urun.categoryId}</td>
                <td>{sepetUrun.urun.productName}</td>
                <td>{sepetUrun.urun.unitPrice}</td>
                <td>{sepetUrun.urun.unitsInStock}</td>
                <td>{sepetUrun.adet}</td>
                <Button 
                color="danger"
                onClick={()=>this.props.sepettenCikar(sepetUrun.urun)}>Sil</Button>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
  render() {
    return (
      <div>{this.renderSepet()}</div>
    );
  }
}
