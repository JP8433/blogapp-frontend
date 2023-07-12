
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://media.istockphoto.com/id/1352152504/vector/abstract-dark-black-papercut-geometric-background-modern-futuristic-background-can-be-use.jpg?s=612x612&w=0&k=20&c=yfLNqPWFSydHVIZuKmjwsauuRBtlhTArOYF5xnc8XGo=) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading> WELCOME BLOGGER</Heading>
           
        </Image>
    )
}

export default Banner;