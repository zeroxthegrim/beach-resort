import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: "Lorem ipusm dolor sit amet consectetur adipsici elit. Magni corpoiris."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipusm dolor sit amet consectetur adipsici elit. Magni corpoiris."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: "Lorem ipusm dolor sit amet consectetur adipsici elit. Magni corpoiris."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipusm dolor sit amet consectetur adipsici elit. Magni corpoiris."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>                
            </section>
        )
    }
}
