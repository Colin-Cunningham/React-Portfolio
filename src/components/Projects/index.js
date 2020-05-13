import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./style.css"


function Cards(props) {
  return (
    <Card id="card" className="centered">
      <Image id="image" src={props.image} wrapped ui={true} />
      <Card.Content>
  <Card.Header id="head">{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.date}</span>
      </Card.Meta>
      <Card.Description id="desc">
        {props.desc}
      </Card.Description>
    </Card.Content>
    <Card.Content extra id="bottom">
        <a id="link" href={props.link}>Deployed Link</a>
    </Card.Content>
    </Card>
  );
}

export default Cards;
