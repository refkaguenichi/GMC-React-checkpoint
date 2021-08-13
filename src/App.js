import "./App.css";
import { Navbar, Container, Nav, Card, Button, Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Online library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#books-field">Books field</Nav.Link>
            <Nav.Link href="#authors">Authors</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* ------ */}
      {/* Card */}
      <Card className="card">
        <Card.Header as="h5">The Secret book</Card.Header>
        <Card.Body>
          <Card.Title>This is The Secret to life</Card.Title>
          <Card.Text>
            Author Rhonda Byrne, like each of us, has been on her own journey of
            discovery. In The Secret, she explains with simplicity the law that
            is governing all lives, and offers the knowledge of how to create –
            intentionally and effortlessly – a joyful life.
          </Card.Text>
          <Button variant="primary">Download</Button>
        </Card.Body>
      </Card>
      {/* ------ */}
      {/* Form */}
      <Form className="form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Please enter your Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Give your satisfaction level about the book</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      {/* ------ */}
      {/* Footer */}
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Other book version</h5>
              <p>Here you can find the book in many languages</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">English</a>
                </li>
                <li>
                  <a href="#!">French</a>
                </li>
                <li>
                  <a href="#!">Spanich</a>
                </li>
                <li>
                  <a href="#!">Arabic</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Japanese</a>
                </li>
                <li>
                  <a href="#!">Korean</a>
                </li>
                <li>
                  <a href="#!">chinese</a>
                </li>
                <li>
                  <a href="#!">hindi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="https://the-onlinr-library.com/"> the-online-library.com</a>
        </div>
      </footer>
      {/* ------ */}
    </div>
  );
}

export default App;
