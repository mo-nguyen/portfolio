import { Outlet } from "react-router";
import "./App.scss";
import Navigation from "./component/Navigation";
import Container from "react-bootstrap/Container";
import Footer from "./component/Footer";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div>
            <Navigation />
            <Container>
				<Outlet />
			</Container>
			<Footer />
        </div>
    );
}

export default App;
