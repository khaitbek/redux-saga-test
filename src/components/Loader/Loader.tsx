import { Button, Card, Container, Placeholder } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
export function PageLoader() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{
      height:"90vh"
    }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export function PostLoader() {
  const itemCount = 10;
  const itemArray = Array(itemCount).fill(crypto.randomUUID());
  return (
    <Container>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {itemArray.map(() => (
          <Card key={crypto.randomUUID()} style={{width:"320px",flexShrink:"0"}}>
            <Button style={{ width: "50px", height: "50px", backgroundColor:"gray" }} className="rounded-pill overflow-hidden ms-3 mt-3 border-0">
            </Button>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              
            </Card.Body>
            <Card.Footer className="py-3">
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Container>
  )
}

// export function CommentLoader() {
  
// }
