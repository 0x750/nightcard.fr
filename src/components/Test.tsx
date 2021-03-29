import Jumbotron from 'react-bootstrap/Jumbotron';

const Test: React.FunctionComponent<{text: string}> = ({text}) => {
    return <Jumbotron><h1>{text}</h1></Jumbotron>;
}

export default Test;