//importare
import{Card} from 'react-bootstrap';

//componente
const SingleBook = ({book}) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title className='card-title fs-6 text'>{book.title}</Card.Title>
                <Card.Text>
                    € {book.price.toFixed(2)}
                </Card.Text>
                <Card.Text>
                    {book.category}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

//esportare
export default SingleBook;