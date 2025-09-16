import React from "react";
import errorimg from "../assets/errorimg.png";

class RouteErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so next render shows fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Caught by RouteErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <section className="content-right-main">
                    <div className="main_tab_content" style={{ textAlign: "center", padding: "40px" }}>
                        <img src={errorimg} alt="Error" style={{ maxWidth: "250px" }} />
                        <h1>Oops!! Something went wrong.</h1>
                        <p style={{ color: "#0A0A0A", fontSize: "18px" }}>
                            Please try again later.
                        </p>
                    </div>
                </section>
            );
        }

        return this.props.children;
    }
}

export default RouteErrorBoundary;
