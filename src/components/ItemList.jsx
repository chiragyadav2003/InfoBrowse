import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import { Grid, CircularProgress } from '@mui/material';
import ItemCard from './ItemCard';

const ItemList = ({ searchTerm }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData();
      setItems(data);
      setLoading(false);
    };
    getItems();
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return loading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={2}>
      {filteredItems.map(item => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <ItemCard title={item.title} body={item.body} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
