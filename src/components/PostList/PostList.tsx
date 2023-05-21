import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { PostLoader } from "../Loader/Loader";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import { Comments } from "../Comments";
import { setError, setLoading } from "../../features/postSlice";

export function PostList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, isLoading } = useSelector((state: RootState) => state.post);
  useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      dispatch({ type: "POSTS_FETCH" });
      return posts;
    },
    onSuccess() {
      dispatch(setLoading())
    },
    onError(err) {
      dispatch(setError(err));
    },
    staleTime: 100000000
  });
  const goToUserPage = (id: User["id"]) => navigate("/users/" + id);
  if (isLoading) return <PostLoader />
  return (
    <Container>
      <Row style={{ gap: "1rem", justifyContent: "center" }} >
        {posts.map(post => (
          <Col key={post.id} xs={3}>
            <Card>
              <Button onClick={() => goToUserPage(post.userId)} style={{ width: "50px", height: "50px", backgroundImage: "url(https://placehold.co/50x50)" }} className="rounded-pill overflow-hidden ms-3 mt-3 border-0">
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
    </Container>
  )
}
