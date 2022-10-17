import React from 'react';
import { Table, Pagination } from 'rsuite';
import { useState, useEffect } from 'react';
import './TableDashboard.css';
import axios from 'axios';

const { Column, HeaderCell, Cell } = Table;

const TableDashboard = () => {
    const [dataTable, setDataTable] = useState([]);
    const [fixedData, setFixedData] = useState([]);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState('asc'); 
    const [loading, setLoading] = React.useState(false);
    const [totalData, setTotalData] = useState(0);

    const getDataTable = (page, limit) => {
        axios({
            method: "GET",
            url: "https://bootcamp-rent-cars.herokuapp.com/admin/v2/order",
            timeout: 120000,
            params: {
                sort: "user_email:asc",
                page: page,
                pageSize: limit,
            },
            headers: {
                accept: 'application/json',
                access_token: window.localStorage.getItem('token')
            }
        })
        .then(res => {
            setDataTable(res.data.orders);
            setTotalData(res.data.count);
        })
    };

    useEffect(() => {
        getDataTable(page, limit);
    }, [page, limit]);

    useEffect(() => {
        let ubahData = [];
        for (let i = 0; i < dataTable.length; i++) {
            if(page > 1 ) {
                dataTable[i].no = i+1+(limit*(page-1));
            } else {
                dataTable[i].no = i+1;
            }
            ubahData.push(dataTable[i]);
        }
        setFixedData(ubahData);
    }, [dataTable]);

    const handleChangeLimit = dataKey => { //untuk option 10,30,50 per page
        setPage(1); 
        setLimit(dataKey);
    };

    const getData = () => { //sort asc or dsc
        if (sortColumn && sortType) {
            return fixedData.sort((a, b) => {
                let x = b[sortColumn];
                let y = a[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else { 
                    return y - x;
                }
            });
        }
        return fixedData;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true); 
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };
    
    if(fixedData.length !== 0) {
        return (
            <div style={{marginBottom: '100px'}}>
                <Table height={420}
                    style={{width:"95%"}}
                    data={getData()}
                    sortColumn={sortColumn}
                    sortType={sortType}
                    onSortColumn={handleSortColumn}
                    loading={loading}>
                    <Column  flexGrow={1} align="center" fixed sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>No</HeaderCell>
                        <Cell dataKey="no" />
                    </Column>
                    <Column flexGrow={1} fixed sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Email</HeaderCell>
                        <Cell dataKey="User.email" />
                    </Column>
                    <Column flexGrow={1} sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Car</HeaderCell>
                        <Cell dataKey="Car.name" />
                    </Column>
                    <Column flexGrow={1} sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Start Rent</HeaderCell>
                        <Cell dataKey="start_rent_at" />
                    </Column>
                    <Column flexGrow={1} sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Finish Rent</HeaderCell>
                        <Cell dataKey="finish_rent_at" />
                    </Column>
                    <Column flexGrow={1} sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Price</HeaderCell>
                        <Cell dataKey="total_price" />
                    </Column>
                    <Column flexGrow={1} sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Category</HeaderCell>
                        <Cell dataKey="Car.category" />
                    </Column>
                </Table>
                <div style={{ padding: 20, width:"95%" }}>
                    <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={totalData}
                    limitOptions={[10, 30, 50]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                    />
                </div>
            </div>
    )
    }
}

export default TableDashboard
