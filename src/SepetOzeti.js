import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";

export default class SepetOzeti extends Component {
    bosSepet(){
     return(
     <div> 
        <NavItem>
            <NavLink>
                Sepet Boş
            </NavLink>
        </NavItem>
     </div>

     );
    }

    sepetOzeti(){
        return(
            <div>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Sepetiniz
              </DropdownToggle>
              <DropdownMenu right>
                {this.props.sepet.map(sepetUyesi=>(
                  <DropdownItem key={sepetUyesi.urun.id}>
                    <Badge color="danger" onClick={()=>this.props.sepettenCikar(sepetUyesi.urun)}>X</Badge>
                    {sepetUyesi.urun.productName}
                    <Badge color="success">{sepetUyesi.adet}</Badge>
                  </DropdownItem>
                     
                ))}
                
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="sepet">Sepete Git</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
    }
  render() {
    return (
        <div>
     {this.props.sepet.length>0?this.sepetOzeti():this.bosSepet()}
     </div>
    );
  }
}
