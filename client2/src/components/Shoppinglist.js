import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
class ShoppingList extends Component  {
    state={
        items :[
            { id: uuidv4(),name:"Eggs"},
            { id: uuidv4(),name:"Milk"},
            { id: uuidv4(),name:"Steak"},
            { id: uuidv4(),name:"Water"}
        ]
    }
 render(){
     const{items}=this.state;
     return(
         <Container>
             
             <Button color="dark" style ={{marginTop:"100px"}} onClick={()=>{
                 const  name =prompt('Enter name')
                 if(name){
                     this.setState(state=>({
                         items:[...state.items,{id:uuidv4(),name}]
                     }))
                 }
             }}>Add items</Button>
              <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
              
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => { this.setState(state=>({
                        items:state.items.filter(item=>item.id!=id)
                    }));}}
                  >
                    &times;
                  </Button>
                
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
         </Container>
     )
 }
}
export default ShoppingList;