import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Comment, Post } from "../../types";
import { Accordion, Button, Collapse, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";

export function Comments({ postId }: { postId: Post["id"] }) {
  const [open, setOpen] = useState<boolean>(false);
  const { data: comments } = useQuery<Comment[]>({
    queryKey: ["comments", postId],
    queryFn: async () => {
      return (await axios.get(import.meta.env.VITE_BASE_URL + "/comments?postId=" + String(postId))).data
    }
  });

  return (
    <>
      <Button
        className="my-3"
        variant="success"
        onClick={() => setOpen(prev => !prev)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Show comments
      </Button>
      <Collapse in={open}>
        <ListGroup as="ol">
          {comments?.map(comment => (
            <ListGroupItem key={crypto.randomUUID()} as="li">
              <Accordion className="py-2" defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="limit-text">
                    {comment.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    {comment.body}
                    <Button className="ps-0" as="a" href={`mailto:${comment.email}`} variant="link">
                      {comment.email}
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Collapse>

    </>
  )
}
