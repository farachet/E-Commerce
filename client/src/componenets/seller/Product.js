import React from 'react';
import {  Box ,  Button} from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import "./style.css"

const Products = () => {
    return (
<Box > 
<Box className="Collect" style={{width: '100%', height: '100%', position: 'relative'}}>
<Box className="Card" style={{width: 200, height: 300, left: 0, top: 0, position: 'absolute'}}>
<Box className="Rectangle22" style={{width: 200.12, height: 334.58, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.10)', boxShadow: '0px 3.6519203186035156px 2.921536445617676px rgba(0, 0, 0, 0.25)', borderRadius: 7.30}} ></Box>
<Box className="SecretRare" style={{left: 8.99, top: 211.14, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 14.61, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Secret Rare</Box>
<Box className="LoremIpsum" style={{left: 8.99, top: 242.79, position: 'absolute', color: 'white', fontSize: 14.61, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Lorem Ipsum</Box>
<Box className="005Eth" style={{left: 126.09, top: 242.79, position: 'absolute', color: 'white', fontSize: 14.61, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' , display : "flex"}}>0.005 ETH</Box>
<img className="Rectangle23" style={{width: 176.14, height: 180.55, left: 12.99, top: 9.99, position: 'absolute', borderRadius: 7.30}} src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_60,w_325/legacy_dam/fr-ch/S001605567/MXP-20724-FOTL-Basic-Tshirt-Tier4-DP-Tile-001?cb=ddc1a215835a308abe6a4cffc385f38d343ba845" />
<Box className="Fa0051" style={{left: 116.05, top: 211.14, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 10.96, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>FA#0051</Box>
</Box>
<Box className="heart" style={{width: 284.12, height: 1225.14, left: 20, top: 290, position: 'absolute'}}>
<FavoriteBorderRoundedIcon style={{color : "white" }} ></FavoriteBorderRoundedIcon>

</Box>

<Box  className="btnBuy" style={{width: 112.54, height: 10.52, paddingLeft: 14.61, paddingRight: 14.61, paddingTop: 7.30, paddingBottom: 7.30,  position: 'absolute' , left: 49.05, top: 289.14, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' , background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)', borderRadius: 7.30, justifyContent: 'center', alignItems: 'center', gap: 7.30, display: 'inline-flex'}}>
<Button style={{color : "white" , fontFamily: 'Poppins' , fontWeight: '500', wordWrap: 'break-word'}}>Buy Now</Button>
</Box>
</Box>
</Box>

       
    );
}

export default Products;
