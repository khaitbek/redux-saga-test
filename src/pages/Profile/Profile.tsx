import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { Post, User } from "../../types"
import { BASE_URL } from "../../lib"
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PageLoader } from "../../components/Loader/Loader";
import { Comments } from "../../components/Comments";

export default function Profile() {
  const { id } = useParams();
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["user", id],
    queryFn: async () => {
      return (await axios.get(BASE_URL + "/users?id=" + String(id))).data[0];
    }
  });
  const { data: userPosts } = useQuery<Post[]>({
    queryKey: ["posts", id],
    queryFn: async () => {
      return (await axios.get(BASE_URL + "/posts?userId=" + id)).data;
    }
  });
  if (isLoading || !user) return <PageLoader />

  return (
    <>
      <Container>
        <Card className="my-5">
          <Card.Header>
            {user.name}
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroupItem>
                {user.email}
              </ListGroupItem>
              <ListGroupItem>
                {user.address.city}
              </ListGroupItem>
              <ListGroupItem>
                {user.company.name}
              </ListGroupItem>
              <ListGroupItem>
                {user.phone}
              </ListGroupItem>
              <ListGroupItem>
                {user.website}
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
        <h2 className="mb-5 text-center">Posts related to user</h2>
        <div className="mb-5">
          <Row style={{ gap: "1rem", justifyContent: "center" }} >
            {userPosts?.map(post => (
              <Col key={post.id} xs={3}>
                <Card>
                  <Button style={{ width: "50px", height: "50px", backgroundImage: "url(https://placehold.co/50x50)" }} className="rounded-pill overflow-hidden ms-3 mt-3 border-0">
                  </Button>
                  <Card.Body>
                    <Card.Title className="limit-title">{post.title}</Card.Title>
                    <Card.Text className="limit-text">
                      {post.body}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Comments postId={post.id} />
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}
