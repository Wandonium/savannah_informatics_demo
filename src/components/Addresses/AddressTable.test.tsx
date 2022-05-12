import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../App/store';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../App/index';


import { AddressTable } from './AddressTable';

describe("AddressTable", () => {
    let addresses = [
        {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            },
            "no_of_users": 1
        },
        {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            },
            "no_of_users": 1
        },
        {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            },
            "no_of_users": 1
        },
        {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            },
            "no_of_users": 1
        },
        {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            },
            "no_of_users": 1
        },
        {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            },
            "no_of_users": 1
        },
        {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            },
            "no_of_users": 1
        },
        {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            },
            "no_of_users": 1
        },
        {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            },
            "no_of_users": 1
        },
        {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            },
            "no_of_users": 1
        }
    ];

    beforeEach(() => {
        const dispatch = store.dispatch;
        const {addAddresses} = bindActionCreators(actionCreators, dispatch);
        addAddresses(addresses);
        render(
            <Provider store={store}>
                <AddressTable />
            </Provider>
        );
    });

    it("renders a table after loading data", async () => {
        expect(await screen.findByRole('table')).toBeInTheDocument();
    });

    const headers = ['street', 'suite', 'city', 'zipcode', 'no of users'];
    headers.forEach(header => {
        it(`renders ${header} as a column header in table`, async () => {
            expect(await screen.findByText(header)).toBeInTheDocument();
        });
    });

    it("renders expected number of rows into table", async () => {
        let tableRows = await screen.findAllByRole('row');
        // tableRows.length - 1 because of the column headers
        expect(tableRows.length-1).toEqual(addresses.length);
        
    });

    it("renders data into table cells", async () => {
        let cells = await screen.findAllByRole('cell');
        let theCells = [];
        let currentCell = [];
        for(let i = 0; i <= cells.length; i++) {
            if(currentCell.length !== headers.length) {
                currentCell.push(cells[i]);
            } else {
                theCells.push(currentCell);
                currentCell = [];
                currentCell.push(cells[i]);
            }
        }
        theCells.forEach((cell, idx) => {
            expect(cell[0]).toHaveTextContent(addresses[idx].street);
            expect(cell[1]).toHaveTextContent(addresses[idx].suite);
            expect(cell[2]).toHaveTextContent(addresses[idx].city);
            expect(cell[3]).toHaveTextContent(addresses[idx].zipcode);
            expect(cell[4]).toHaveTextContent(addresses[idx].no_of_users);
        });
    });
})