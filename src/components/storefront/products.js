import { If, Else, Then } from "react-if";
import React from "react";
import { connect } from "react-redux";
import { activeCategory } from "../../store/categories";
import { Button,Typography, Grid, Card,  CardMedia, CardContent,  CardActions,  Container,  makeStyles,  ClickAwayListener,} from "@material-ui/core/";
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [open, setOpen] = React.useState(false);
  // const handleClick = () => {
  //   setOpen((prev) => !prev);
  // };
  // const handleClickAway = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <If condition={props.categories.activeCategory !== null}>
            <Then>
              {props.products.ProductsLists.map((product) => {
                return (
                  <Grid item key={product.name} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={product.img}
                        title={product.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography>Price: ${product.price}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                        onClick={() => addProduct(product)}
                          size="small"
                          color="primary"
                          // onClick={() => props.increment()}
                        >
                          ADD TO CART
                        </Button>
                        <button type="button" onClick={handleOpen}>
                        VIEW DETAILS
                        </button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="simple-modal-title"
                          aria-describedby="simple-modal-description"
                        >
                          {
                             
                                <div style={modalStyle} className={classes.paper}>
                                  <h2 id="simple-modal-title">Details of {product.name}</h2>
                                  <p id="simple-modal-description">
                                  {product.description}
                                  </p>
                                  
                                </div>
                              
                          }
                        </Modal>
                        {/* <Button size="small" color="primary" >
                          VIEW DETAILS
                        </Button> */}
                        {/* <ClickAwayListener onClickAway={handleClickAway}>
                          <div className={classes.root}>
                            <button type="button" onClick={handleClick}>
                            VIEW DETAILS
                            </button>
                            {open ? (
                              <div className={classes.dropdown}>
                               {product.description}
                              </div>
                            ) : null}
                          </div>
                        </ClickAwayListener> */}
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Then>
            <Else>
              <p>Choose a Category to start</p>
            </Else>
          </If>
        </Grid>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.Products, categories: state.Categories };
};
const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
