import React from 'react';
import { Table, Pagination } from 'rsuite';
import { useState, useEffect } from 'react';
import './TableDashboard.css'

const { Column, HeaderCell, Cell } = Table;

const TableDashboard = ({carData}) => {
    const [fixedData, setFixedData] = useState([]);

    useEffect(() => {
        let ubahData = [];
        for (let i = 0; i < carData.length; i++) {
            carData[i].id = i+1;
            ubahData.push(carData[i]);
        }
        setFixedData(ubahData);
    }, [carData]);

    const [sortColumn, setSortColumn] = React.useState(); //shorting data
    const [sortType, setSortType] = React.useState('asc'); 
    const [loading, setLoading] = React.useState(false);

    const getData = () => { //sort asc or dsc
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
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
        return data;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true); 
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);

    const handleChangeLimit = dataKey => { //untuk option 10,30,50 per page
        setPage(1); //untuk pindah ke suatu page ke-n
        setLimit(dataKey);
    };

    const data = fixedData.filter((v, i) => { //untuk implemen option per page yang dipilih
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });
    

    if(carData.length !== 0) {
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
                        <Cell dataKey="id" />
                    </Column>
                    <Column flexGrow={1} fixed sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Email</HeaderCell>
                        <Cell dataKey="User.email" />
                    </Column>
                    <Column flexGrow={1} sortable>
                        <HeaderCell style={{background: '#CFD4ED'}} className='headerCell'>Car</HeaderCell>
                        <Cell dataKey="car" />
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
                        <Cell dataKey="category" />
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
                    total={fixedData.length}
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
