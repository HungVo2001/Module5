import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 2357441,
            product: "PS5 Spider Man",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qKiYpAcaBU3f0CEKovOvVoICNwfvhYFusA&usqp=CAU",
            customer: "Hung Vo",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 2357442,
            product: "PS5 Horizon",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-q5tV3YrTJ2YhNOwrdZe-hstbuwkePSxWyA&usqp=CAU",
            customer: "Hung Vo",
            date: "2 March",
            amount: 1000,
            method: "Online",
            status: "Pending",
        },
        {
            id: 2357443,
            product: "PS5 Horizon customer",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgG0EHm9ULgftzcQEQtytsPDiO_NRf5fEhiA&usqp=CAU",
            customer: "Hung Vo",
            date: "3 March",
            amount: 1500,
            method: "Online",
            status: "Pending",
        },
        {
            id: 2357444,
            product: "PS5 God of War",
            img: "data:image/jpeg;base64,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",
            customer: "Hung Vo",
            date: "4 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
        {
            id: 2357445,
            product: "PS5 God of War Custom",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByXQRcbMnaqAWZd2ZdUTrSUj2PD4C_yNvYQ&usqp=CAU",
            customer: "Hung Vo",
            date: "5 March",
            amount: 2100,
            method: "Online",
            status: "Approved",
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        
                        <TableCell className="tableCell">Tracking Id</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customerd</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;