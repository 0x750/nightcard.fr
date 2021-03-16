import { Container } from 'react-bootstrap';
import './ErrorPage.css';

const ErrorPage = ({code}) => {
    return (
        <Container className="error-page">
            <h1>{code}</h1>
        </Container>
    );
}

export default ErrorPage;