import React from 'react';

import { Button, Accordion, Card } from 'react-bootstrap';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Accordion defaultActiveKey="0">
          {this.props.itemsList.map(item => {
            return (
              <Card key={item._id}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={item._id}>
                    {item.name}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={item._id}>
                  <Card.Body>
                    <p>
                      {item.description}
                    </p>
                    <Button onClick={() => this.props.onDeleteItem(item)} data-testid={`delete-button-${item.name}`}>Delete Item</Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          })}
        </Accordion>

        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.itemsList.map((item, idx) =>
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button onClick={() => this.props.onDeleteItem(item)} data-testid={`delete-button-${item.name}`}>Delete Item</Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table> */}


      </section>
    );
  }
}

export default Items;
