import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

const products = [
  { id: 1, category: 'Plant', name: 'H. Sunrise', description: 'Hoya Sunrise (H. Obscura x Lacunosa) - 3" Pot', price: '$30', img: 'https://i.imgur.com/mi1RfPi.jpeg'},
  { id: 2, category: 'Plant', name: 'A. Crystallinum', description: 'Anthurium Regale - 2 leaf potted in Pons', price: '$150', img: 'https://i.imgur.com/YeVH3jS.jpeg'},
  { id: 3, category: 'Plant', name: 'A. Pallidiflorum', description: 'Anthurium Pallidiflorum - 2 leaf potted in Pons', price: '$200', img: 'https://i.imgur.com/KjjSeBb.jpeg'},
] 

const Products = () => {
  const classes = useStyles();

  return(
    <main>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={4} md={3} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products