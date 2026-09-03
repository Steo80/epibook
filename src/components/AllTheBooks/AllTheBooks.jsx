import { useState } from "react";
import books from '../../data/fantasy.json';
import SingleBook from "../SingleBook/SingleBook";
import { Container, Row, Col, Alert } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";


const AllTheBooks = () => {

  const [inputData, setInputData] = useState('');
  const [booksData, setBooksData] = useState(books);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  console.log(booksData)

  const onChangeInput = (e) => {
    const value = e.target.value;
    setInputData(value);
    if (value === '') {
      setBooksData(books);
      setIsSearchEmpty(false);
    }
  }

  const onSearch = (e) => {
    e.preventDefault()
    setIsSearchEmpty(false);
    const filteredBooks = books.filter(singleBook =>
      singleBook.title.toLowerCase().includes(inputData.toLowerCase())
    )
    if (filteredBooks.length === 0) {
      setIsSearchEmpty(true);
    }
    setBooksData(filteredBooks)

  }
  console.log(inputData)

  return (
    <Container>
      <SearchBar
        inputData={inputData}
        onChangeInput={onChangeInput}
        onSearch={onSearch}
      />
      {/*Row griglia libri*/}
      <Row className="g-4">
        {isSearchEmpty && (
          <Alert variant="warning">
            Nessun libro trovato.
          </Alert>
        )}
        {!isSearchEmpty && booksData.map((book) =>
          <Col
            key={book.asin}
            xs={12}
            md={4}
            lg={3}
            xl={2}
          >
            <SingleBook book={book} />
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default AllTheBooks;