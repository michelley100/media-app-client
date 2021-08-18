import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


export const MaterialTable = () => {
const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

function createData(name, country) {
  return { name, country};
}

const rows = [
  createData("Nature"),
  createData("Country"),

  // createData("Eclair", "BGF", "hggsg", "jh", "hgg"),
  // createData("Cupcake", "ggg", "uuy", "hhgga", "hyuuu"),
  // createData("Gingerbread", "nhh", "jhuu", "hgtg", "kiu"),
];

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
         <center><h2>Name of Videos</h2></center>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Video Playing</TableCell>
            <TableCell align="right">YouTube</TableCell>
            {/* <TableCell align="right">Genre</TableCell> */}
            {/* <TableCell align="right">Released Year</TableCell> */}
            {/* <TableCell align="right">Album</TableCell> */}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              {/* <TableCell align="right">{row.name}</TableCell> */}
              {/* <TableCell align="right">{row.carbs}</TableCell> */}
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
