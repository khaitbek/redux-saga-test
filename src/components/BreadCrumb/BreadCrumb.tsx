import { Breadcrumb, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


export function BreadCrumb() {
  const { pathname } = useLocation();
  if (pathname === "/") return <></>;
  return (
    <Container>
      <Breadcrumb className="py-3">
        <Link to="/">
          Go back
        </Link>
      </Breadcrumb>
    </Container>
  )
}
