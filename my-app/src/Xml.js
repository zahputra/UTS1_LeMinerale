import XMLData from "./carsData/Cars.xml"

import React from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//axios for xml request
import axios from 'axios';
//xml file reader
import XMLParser from 'react-xml-parser';


class Xml extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            id: [],
            name: [],
            price: [],


        }

    }
    componentDidMount() {
        //get data request
        axios.get(XMLData, {
            "Content-Type": "application/xml; charset=utf-8"
        }).then(res => {
            //Storing users detail in state array object
            const jsonDataFromXml = new XMLParser().parseFromString(res.data);


            this.setState({ id: jsonDataFromXml.getElementsByTagName('id') })
            this.setState({ name: jsonDataFromXml.getElementsByTagName('name') })
            this.setState({ price: jsonDataFromXml.getElementsByTagName('price') })



        });
    }

    render() {

        return (
            <table className="">

                <tr>
                    <td>
                        {(
                            this.state.id.map((item, index) => {
                                return (
                                    <td class="list-group-item">{item.value}</td>
                                )
                            }
                            ))}
                    </td>
                    <td>
                        {(
                            this.state.name.map((item, index) => {
                                return (
                                    <td class="list-group-item">{item.value}</td>
                                )
                            }
                            ))}
                    </td>
                    <td>
                        {(
                            this.state.price.map((item, index) => {
                                return (
                                    <td class="list-group-item">{item.value}</td>
                                )
                            }
                            ))}
                    </td>
                </tr>

            </table>

        )
    };
}
export default Xml;