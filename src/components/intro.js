import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ width:'99vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="navidad"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Navidad
          </Typography>
          <Typography variant="body2" color="text.secondary">
                akjsdnakljnsdlkansdjnaksdnakjsndkansdka
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


