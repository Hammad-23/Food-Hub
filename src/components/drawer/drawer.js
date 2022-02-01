import * as React from 'react';
import '../drawer/drawer.css';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from "@material-ui/core/Drawer";
import { BiCart } from "react-icons/bi";
import {Row, Col, Container} from 'react-bootstrap';
import {BsX} from 'react-icons/bs';
import {AiOutlineMinus} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import CustomButton from '../customButton/button';
import RollParatha from '../../asset/images/rollParatha.jpg';


export default function SwipeableTemporaryDrawer(props) {
  const totalPrice= 'Rs 1000'
  const [product, setProduct]= React.useState([
    {
      itemName:'Roasted Garlic Chicken Soup',
      itemAddOns:'Farmhouse salad and Knotbuns',
      itemPrice:'Rs 299'
  },
  {
    itemName:'Roasted Garlic Chicken Soup',
    itemAddOns:'Farmhouse salad and Knotbuns',
    itemPrice:'Rs 299'
},
{
  itemName:'Roasted Garlic Chicken Soup',
  itemAddOns:'Farmhouse salad and Knotbuns',
  itemPrice:'Rs 299'
},
{
  itemName:'Roasted Garlic Chicken Soup',
  itemAddOns:'Farmhouse salad and Knotbuns',
  itemPrice:'Rs 299'
},
{
itemName:'Roasted Garlic Chicken Soup',
itemAddOns:'Farmhouse salad and Knotbuns',
itemPrice:'Rs 299'
},
{
itemName:'Roasted Garlic Chicken Soup',
itemAddOns:'Farmhouse salad and Knotbuns',
itemPrice:'Rs 299'
}
  ])
  const [suggestProducts, setSuggestProducts]= React.useState([
    {
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    },
    {
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    },{
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    },
    {
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    },
    {
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    },
    {
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    },
    {
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    },
    {
      suggestImage:RollParatha,
      suggestItem:'Cream Cheese Jam Swiss Roll',
      suggestPrice: 'rs 1720'
    }
  ])
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Row>
            <Col>
            <div className='cardHeader'>
                <span>your cart</span>
                <p>1Item</p>
            </div>
            
            </Col>
            <Col>
            <div className='XIconBox'>
            <BsX size={20} color='#4a4a48'className='XIcon'/>
            </div>
            </Col>
        </Row>
        {
          product.map((item)=>{
            return(
              <>
              <Row>
          <Col xl={8}lg={8}md={9}sm={9}xs={9}>
            <div className='itemNameBox'>
              <div className='itemName'>
                <span>{item.itemName},</span>
              </div>
              <div className='itemAdOns'>
            <span>{item.itemAddOns}</span>
              </div>
            </div>
          </Col>
          <Col>

          </Col>
        </Row>
        <Row>
          <Col>
          <div className='itemPrice'>
            <span>{item.itemPrice}</span>
          </div>
          </Col>
          <Col>
          <div className='itemQuantityBox'>
            <AiOutlineMinus size={10} color='#f04602' className='decreaseIcon'/>
            <small>1</small>
            <AiOutlinePlus size={10} color='#f04602'className='increaseIcon'/>

          </div>
          </Col>
        </Row>
        </>
            )
          })
        }
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomButton Text={`place order . ${totalPrice}`} className='placeOrderBtn'/>
          </Col>
          <Col>
          <div className='alertDelivery'>
            <span>Safety Assured meals and contactless delivery</span>
          </div>
          </Col>
        </Row>
        <Row className='suggestionContainer'>
          <Col xl={12}lg={12}md={12}sm={12}xs={12}>
        <Row>
          <Col>
          <div className='suggestionTitle'>
            <p>you may also like</p>
          </div>
          </Col>
        </Row>
        {
          suggestProducts.map((item)=>{
            return(
              <>
               <Row>
          <Col xl={5} lg={5}md={5}sm={5}xs={5}>
          <div className='suggestionImage'>
            <img src={item.suggestImage} width={'70px'} height={'70px'}/>
          </div>
          </Col>
          <Col>
          <div className='suggestionItem'>
            <p>{item.suggestItem}</p>
          </div>
            <Col>
          <div className='suggestionPriceNBtn'>
            <div className='suggestionPrice'>
            <span>{item.suggestPrice}</span>
            </div>
          <CustomButton Text='add' className='addSuggestionBtn'/>
          </div>
          </Col>
          </Col>
        </Row>
              </>
            )
          })
        }
        </Col>
        </Row>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <BiCart size={25} color='#4a4a48'/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
