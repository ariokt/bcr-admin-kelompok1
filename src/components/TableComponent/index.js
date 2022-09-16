import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const TableComponent = (props) => {
    const columns = [{
            dataField: 'id',
            text: 'No'
        }, {
            dataField: 'email',
            text: 'User Email'
        }, {
            dataField: 'car',
            text: 'Car'
        }, {
            dataField: 'start',
            text: 'Start Rent'
        }, {
            dataField: 'finish',
            text: 'Finish Rent'
        }, {
            dataField: 'price',
            text: 'Product Price'
        }, {
            dataField: 'category',
            text: 'Category'
        },];
    return (
        <BootstrapTable keyField='id' data={ props.users } columns={ columns } pagination={ paginationFactory() } />
    )
}

export default TableComponent
