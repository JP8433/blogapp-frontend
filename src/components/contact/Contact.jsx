
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.droptica.com/sites/droptica.com/files/styles/blog_banner_image/public/media/image/contact-pages.png?itok=hIt85Ptt);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    <br></br>
                    Reach out to me on
                    <Link href="https://www.instagram.com/jay_patel__05/" color="inherit" target="_blank">
                        <Instagram/>
                        <br></br>
                    </Link>
                    <br></br>
                    Send me an Email 
                    <Link href="mailto:jaypatel.in9167@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;