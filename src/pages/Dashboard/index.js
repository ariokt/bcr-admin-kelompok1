import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import "./Dashboard.css"
import imgdasboard from '../../assets/dashboardtop.svg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TableComponent from "../../components/TableComponent";
import { Container } from "react-bootstrap";


const Dashboard = () => {
    const value = {name: "DASHBOARD", menus: ["Dashboard"]};
    const breadCrumb = ["Dasboard", "Dashboard"];

    const data = [
        {name: 1, date: 10},
        {name: 2, date: 40},
        {name: 3, date: 60},
        {name: 4, date: 10},
        {name: 5, date: 120},
        {name: 6, date: 80},
        {name: 7, date: 40},
        {name: 8, date: 85},
        {name: 9, date: 90},
        {name: 10, date: 110},
        {name: 11, date: 70},
        {name: 12, date: 40},
        {name: 13, date: 70},
        {name: 14, date: 30},
        {name: 15, date: 90},
        {name: 16, date: 60},
        {name: 17, date: 50},
        {name: 18, date: 10},
        {name: 19, date: 10},
        {name: 20, date: 40},
        {name: 21, date: 10},
        {name: 22, date: 40},
        {name: 23, date: 60},
        {name: 24, date: 10},
        {name: 25, date: 120},
        {name: 26, date: 80},
        {name: 27, date: 40},
        {name: 28, date: 85},
        {name: 29, date: 90},
        {name: 30, date: 10},
    ];

    const users = [
        {
            id: 1,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        },
        {
            id: 2,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 3,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 4,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 5,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 6,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 7,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 8,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 9,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 10,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 11,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 12,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 13,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 14,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 3,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, {
            id: 15,
            email: 'ir@gmail.com',
            car: 'Car',
            start: 'Start Rent',
            finish: 'Finish Rent',
            price: 'Price',
            category: 'Category'
        }, 
    ];

    return (
        <div>
            <Navbar />
            <Header />
            <SideBar inside={value} />
            <div className="dashboard">
                <Breadcrumb items={breadCrumb} />
                <h2> <img src={imgdasboard} />   Rented Car Data Visualization</h2>
                <div className="monthsearch">
                    <p>Month</p>
                    <Form className="d-flex ">
                    <Form.Group className="mb-3">
                        <Form.Select aria-label="Default select example">
                            <option value="1">June - 2022</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit">Go</Button>
                </Form>
                </div>
                <div className="barChart">
                    <BarChart
                        width={970}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}>
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis  />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="date" fill="#586B90"/>
                    </BarChart>
                </div>
                <div className="table">
                    <h3>Dashboard</h3>
                    <p> <img src={imgdasboard} />   List Order</p>
                    <TableComponent users={users} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard