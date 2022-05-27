import { Component } from "react";
import { Spinner } from "react-spinner-animated";

import 'react-spinner-animated/dist/index.css';

class Loader extends Component {
    render() {
        return (
            < Spinner
                text={"Loading..."} 
                bgColor={"transparent"}
                center={true}
                width={"150px"}
                height={"150px"}
            />
        )
    }
}

export default Loader;
