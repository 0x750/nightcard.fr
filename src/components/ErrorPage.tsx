import { Container } from 'react-bootstrap';
import './ErrorPage.css';

type ErrorPageProps = {
    code: number;
}

const ErrorPage: React.FunctionComponent<ErrorPageProps> = ({code}: ErrorPageProps) => {
    return (
        <Container className="error-page">
            <h1>{code}</h1>
        </Container>
    );
}

export default ErrorPage;