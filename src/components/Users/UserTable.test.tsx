import { fireEvent, render, screen } from '@testing-library/react';
import UsersTable from './UserTable.tsx';
import { Provider } from 'react-redux';
import { store } from '../../App/store';


const setCurrentUser: React.Dispatch<React.SetStateAction<User | null>> = () => {}
const setActive: React.Dispatch<React.SetStateAction<string>> = () => {};
const setShowPostNav: React.Dispatch<React.SetStateAction<boolean>> = () => {};

describe("UsersTable", () => {
    let users;
    beforeEach(() => {
        render(
            <Provider store={store}>
                <UsersTable 
                    setCurrentUser={setCurrentUser} 
                    setActive={setActive} 
                    setShowPostNav={setShowPostNav} 
                />
            </Provider>
        );
        users = store.getState().users;
    });

    // it("renders spinner while loading data", () => {
    //     // make sure loading screen is shown while accessing api
    //     expect(screen.queryByText(/Loading/)).toBeInTheDocument();
    // });

    it("renders a table after loading data", async () => {
        expect(await screen.findByRole('table')).toBeInTheDocument();
    });

    const headers = ['id', 'name', 'username', 'email', 'phone', 'website', 'actions'];
    headers.forEach(header => {
        it(`renders ${header} as a column header in table`, async () => {
            expect(await screen.findByText(header)).toBeInTheDocument();
        });
    });

    it("renders expected number of rows into table", async () => {
        let tableRows = await screen.findAllByRole('row');
        // tableRows.length - 1 because of the column headers
        expect(tableRows.length-1).toEqual(users.length);
        
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
            expect(cell[0]).toHaveTextContent(users[idx].id);
            expect(cell[1]).toHaveTextContent(users[idx].name);
            expect(cell[2]).toHaveTextContent(users[idx].username);
            expect(cell[3]).toHaveTextContent(users[idx].email);
            expect(cell[4]).toHaveTextContent(users[idx].phone);
            expect(cell[5]).toHaveTextContent(users[idx].website);
            expect(cell[6]).toHaveTextContent(/View Posts/);
            expect(cell[6]).toHaveTextContent(/Update Name/);
        });
    });

    it("renders modal when 'Update Name' button is clicked", async () => {
        let updateBtns = await screen.findAllByText(/Update Name/);
        fireEvent.click(updateBtns[0]);
        expect(screen.getByText(`Update ${users[0].username}'s name`)).toBeInTheDocument();
        expect(screen.getByText(`Current Name: ${users[0].name}`)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
})