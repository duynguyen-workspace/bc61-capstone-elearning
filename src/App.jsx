import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import useRoutesElements from "./routes/useRoutesElements";

function App() {
    const routeElements = useRoutesElements();

    return (
        <>
            <ScrollToTop />
            {routeElements}
        </>
    );
}

export default App;
