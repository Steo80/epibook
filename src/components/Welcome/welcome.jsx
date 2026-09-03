import {Alert, Row, Col} from 'react-bootstrap/Alert';

const Welcome = () => {
    return (
        <Row>
            <Col>
                <Alert variant="secondary">
                    Benvenuto in Epik Books! Qui puoi trovare una vasta selezione di libri per tutti i gusti. Sfoglia la nostra
                    collezione e scopri il tuo prossimo libro preferito!
                </Alert>
            </Col>
        </Row>
    );
}

export default Welcome;