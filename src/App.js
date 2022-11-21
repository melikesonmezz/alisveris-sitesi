import Kategori from "./Kategori";
import UrunListesi from "./UrunListesi";
import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import Navigate from "./Navigate";
import alertify from 'alertifyjs';
import { Route,Routes } from 'react-router-dom';
import SepetListesi from "./SepetListesi";
import NotFound from "./NotFound";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";


export default class App extends Component {
  state = { seciliKategori: "", urunler: [], sepet: [] };

  kategoriDegistir = (kategori) => {
    this.setState({ seciliKategori: kategori.categoryName });
  };

  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    let urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    //sepetteki urun id'si ile urun id eşit mi ona bakıyoruz
    if (urunEklendi) {
      urunEklendi.adet += 1;
    } else {
      yeniUrun.push({ urun: urun, adet: 1 });
    }
    this.setState({ sepet: yeniUrun });
    alertify.success(urun.productName + "sepete eklendi",3)
  };

  sepettenCikar = (urun) => {
    let kalanUrunler = this.state.sepet.filter(u=> u.urun.id !== urun.id);
    this.setState({ sepet: kalanUrunler });
    alertify.error(urun.productName + "sepeten çıkarıldı")
  };

  urunGetir() {
    fetch("http://localhost:3001/products")
      .then((rspnse) => rspnse.json())
      .then((data) => this.setState({ urunler: data })); //artık urunler state'i (data olacak)yani json veriler olacak
  }

  componentDidMount() { //render'dan önce çalışacak
    this.urunGetir();
  }

  render() {
    //sepet bilgisini propms olarak Navigate.js'e gönderiyoruz
    return (
      <div>
        <Container>
          <Row>
            <Navigate
              sepettenCikar={this.sepettenCikar}
              sepet={this.state.sepet}
            />
          </Row>
          <Row>
            <Col xs="3">
              <Kategori
                kategoriDegistir={this.kategoriDegistir}
                seciliKategori={this.state.seciliKategori}
              />
            </Col>
            <Col xs="9">
              <Routes>
              <Route
                path="/"
                element={
              <UrunListesi
                sepeteEkle={this.sepeteEkle}
                urunler={this.state.urunler}
              />}
             />
             <Route path="/sepet" 
             element={<SepetListesi
             sepet={this.state.sepet}//sepet sayfasında hem sepet bilgisini gösterme hemde sepetten çıkarma işlemi yapılacak
             sepettenCikar={this.sepettenCikar}
             />} />
             <Route path="/form" element={<FormDemo/>}/>
             <Route path="/form2" element={<FormDemo2/>}/>
             <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
