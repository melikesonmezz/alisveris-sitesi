import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class UrunListesi extends Component {
  
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün İsmi</th>
              <th>Birim Fiyat</th>
              <th>quantityPerUnit</th>
              <th>unitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map((urun) => (
              <tr key={urun.id}>
                <th scope="row">{urun.id}</th>
                <td>{urun.productName}</td>
                <td>{urun.unitPrice}</td>
                <td>{urun.quantityPerUnit}</td>
                <td>{urun.unitsInStock}</td>
                { <td>
                  <div>
                    <Button 
                    onClick={()=>this.props.sepeteEkle(urun)}
                    color="primary">Ekle</Button>
                  </div>
                </td> }
              </tr>
            ))}

            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
