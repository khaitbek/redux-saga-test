import { Button, ButtonGroup, Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
export default function About() {
  const skills = [
    "React",
    "Nextjs",
    "NextAuth",
    "Express",
    "Postgres",
    "Mongo",
    "Prisma",
    "tRPC",
    "Framer Motion",
    "Chakra UI"
  ];
  const socialLinks = [
    {
      title: "Github",
      colorScheme: "secondary",
      link: "https://github.com/khaitbek"
    },
    {
      title: "LinkedIn",
      colorScheme: "primary",
      link: "https://www.linkedin.com/in/hayitbek-yusupov-a640a7226/"
    },
    {
      title: "Medium",
      colorScheme: "warning",
      link: "https://medium.com/@khaitbekdev"
    },
    {
      title: "Telegram",
      colorScheme: "info",
      link: "https://t.me/khaitbekdev"
    }
  ]
  return (
    <Container>
      <h2>Hi, I'm Hayitbek</h2>
      <p>
        I'm an aspiring fullstack developer who has just started his journey in web development. I really love doing different kinds of projects and I try to constantly learn the new technologies that are coming up every single day. Currently, I am looking for a company to work and give all of my best. I believe dispite of the fact that I'm a newcomer in web development, I am sure that I have great technical, learning and even teaching skills because I actively write tech articles and I am about to start a coding channel on Youtube with a friend of mine who is a Middle Golang developer
      </p>
      <Card className="my-5">
        <Card.Header>
          Hayitbek Yusupov - Fullstack developer
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {skills.map(skill => (
              <ListGroupItem key={skill}>
                {skill}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup>
            {socialLinks.map(socialLink => (
              <Button as="a" href={socialLink.link} target="blank" key={socialLink.title} variant={socialLink.colorScheme}>
                {socialLink.title}
              </Button>
            ))}
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </Container>
  )
}
