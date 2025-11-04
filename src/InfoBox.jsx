import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/primary-2-science/    weather%20conditions/sunny-weather.jpg";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpAs9VniJvuieSefh4eHkeuczsvh9tS278A&s";
    const RAIN_URL = "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/primary-2-science/weather%20conditions/rainfall.jpg";
    return (
        <div className="infoBox">
            <div className='card'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? INIT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}&nbsp;
                        {
                         info.humidity > 80 ? <ThunderstormIcon/> : 
                         info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" 
                         sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C{""}</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp {info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}