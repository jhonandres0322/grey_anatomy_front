import Carousel from 'react-material-ui-carousel'
import Grid from '@mui/material/Grid';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material';


const images = [
    "https://la.sonychannel.com/sites/la.set/files/widget_image_f_image/1_7.jpg",
    "https://mx.web.img3.acsta.net/pictures/22/10/06/21/38/5529680.jpg",
]

function HomePage() {
    return (
        <Carousel
            NextIcon={<KeyboardArrowRightOutlined/>}
            PrevIcon={<KeyboardArrowLeftOutlined/>}
        >
            {
                images.map((image, i) => <Item key={i} item={image} />)
            }
        </Carousel>
    );
}

function Item(props) {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <img
                alt="Grey's Anatomy"
                src={`${props.item}`}
                loading="lazy"
            />
        </Grid>

    )
}
export default HomePage;