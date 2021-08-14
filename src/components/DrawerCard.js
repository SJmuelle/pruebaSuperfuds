import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import {
  ArrowBackIosRounded,
  RemoveCircleOutlineRounded,
  AddCircleOutlineRounded,
  DeleteOutlineRounded,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
  },
  fullList: {
    width: "auto",
  },
  root: {
    "& .MuiDrawer-paper": {
      width: "70%",

      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },

  container: {
    padding: [[25, 70, 25, 20]],
  },

  backContai: {
    display: "flex",
    alignItems: "center",
  },
  iconBack: {
    marginRight: 5,
    fontSize: 14,
    color: "#25c16a",
  },
  textBack: {
    fontSize: 14,
  },

  colorPrimary: {
    color: "#25c16a",
  },

  containerInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  infoSubtitle: {
    marginTop: "auto",
    fontSize: 15,
    fontWeight: "bolder",
    opacity: 0.8,
  },

  table: {
    "& .MuiTableCell-root": {
      borderBottom: 0,
    },
  },

  itemInfo: {
    lineHeight: 0,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemSubTitle: {
    fontSize: 10,
  },
  itemCateg: {
    fontSize: 12,
    marginTop: 5,
  },

  itemAddRmove: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemCantidad: {
    margin: [[0, 15]],
    fontSize: 16,
  },
  addRemove: {
    fontSize: 30,
    color: "#25c16a",
  },
  itemTotal: {
    fontSize: 30,
    fontWeight: "bold",
  },
}));

const itemCart = ({ classes, producto = {} }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div className={classes.itemInfo}>
          <Typography className={classes.itemTitle}>
            Super Kale Chips
          </Typography>
          <Typography className={classes.itemSubTitle}>
            x6 unids - 250 gr c/u
          </Typography>
          <Typography className={clsx(classes.itemCateg, classes.colorPrimary)}>
            SuperFuds
          </Typography>
        </div>
      </TableCell>
      <TableCell align="center">
        <div className={classes.itemAddRmove}>
          <RemoveCircleOutlineRounded
            className={classes.addRemove}
            style={{
              ...(producto.cantidad < 2 ||
                (!producto.cantidad && { color: "gray" })),
            }}
          />
          <span className={classes.itemCantidad}>{producto.cantidad || 0}</span>
          <AddCircleOutlineRounded className={classes.addRemove} />
        </div>
      </TableCell>
      <TableCell align="center">
        <Typography className={classes.itemTotal}>
          <span className={classes.colorPrimary}>$</span>34.000
        </Typography>
      </TableCell>
      <TableCell align="center">
        <DeleteOutlineRounded />
      </TableCell>
    </TableRow>
  );
};

export const DrawerCard = ({ drawerCard, setDrawerCard }) => {
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerCard({ ...drawerCard, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container className={classes.container}>
        <div
          className={classes.backContai}
          onClick={() => {toggleDrawer(anchor, false)}}
        >
          <ArrowBackIosRounded className={classes.iconBack} />
          <Typography className={classes.textBack}>
            Volver a la tienda
          </Typography>
        </div>

        <Grid xs={12} item className={classes.containerInfo}>
          <Typography className={classes.infoTitle}>
            Carrito de compras
          </Typography>
          <Typography className={classes.infoSubtitle}>
            <spnat className={classes.colorPrimary}>3</spnat> item
          </Typography>
        </Grid>

        <Grid xs={12} item className={classes.containerTable}>
          <TableContainer className={classes.table}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                  <TableCell align="center">Precio</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 1, 1, 1, 1, 1, 1, 1].map((prod) => itemCart({ classes }))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <Drawer
      anchor={"right"}
      open={drawerCard["right"]}
      onClose={toggleDrawer("right", false)}
      className={classes.root}
    >
      {list("right")}
    </Drawer>
  );
};
