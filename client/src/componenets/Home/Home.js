import React, { useContext,useEffect } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import Cart from "../AllProduct/Card";
import {ecommerceContext} from "../../ecommerceContext/e-commerceContext"
import axios from "axios"

const Home = () => {
  const {currentUser,handleUser}=useContext(ecommerceContext)
  useEffect(()=>{
    const token=localStorage.getItem("token")
    axios.post(`http://localhost:3001/api/user`,{"token":token})
    .then(res=>{
      
      if(res.data.user){
        console.log(res.data.user)
        handleUser(res.data.user)
      }
     })
    
    .catch(err=>console.log("errrr",err))
  },[])

  console.log(currentUser)
  return (
    <Box sx={{
      margin:"150px auto "
    }}>
      <Box style={{ width: "100%", height: "100%", position: "relative" }}>
        <Box
          style={{
            width: 793,
            height: 0,
            left: 300,
            top: 29,
            position: "absolute",
            border: "0.25px rgba(255, 255, 255, 0.20) solid",
          }}
        ></Box>

        <Box
          style={{
            width: 150.22,
            height: 10,
            padding: 13.41,
            left: 500.51,
            top: 7,
            position: "absolute",
            background: "#6C5DD3",
            borderRadius: 206.71,
            justifyContent: "center",
            alignItems: "center",
            gap: 13.41,
            display: "inline-flex",
          }}
        >
          <Box
            style={{
              width: 147.56,
              height: 28.17,
              color: "white",
              fontSize: 18.78,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Main Collection
          </Box>
        </Box>
        <Box
          style={{
            width: 150.22,
            height: 10,
            padding: 13.41,
            left: 752.27,
            top: 7,
            position: "absolute",
            background: "#493E52",
            borderRadius: 206.71,
            justifyContent: "center",
            alignItems: "center",
            gap: 13.41,
            display: "inline-flex",
          }}
        >
          <Box
            style={{
              width: 152.93,
              height: 28.17,
              color: "white",
              fontSize: 18.78,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Creators Market
          </Box>
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 300,
          margin: "auto",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 300,
            margin: "auto",
          }}
        >
          <Box
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              marginLeft: -500,
              marginTop: 100,
            }}
          >
            <Box
              className="Home"
              style={{
                width: 1197,
                height: 479,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <Box
                className="Heroleft"
                style={{
                  width: 536,
                  height: 457,
                  left: 0,
                  top: 22,
                  position: "absolute",
                }}
              >
                <Box
                  className="Group4"
                  style={{
                    width: 525,
                    height: 75,
                    left: 11,
                    top: 382,
                    position: "absolute",
                  }}
                >
                  <Box
                    className="Group1"
                    style={{
                      width: 72,
                      height: 75,
                      left: 0,
                      top: 0,
                      position: "absolute",
                    }}
                  >
                    <Box
                      style={{
                        left: 1,
                        top: 0,
                        position: "absolute",
                        color: "white",
                        fontSize: 30,
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      100+
                    </Box>
                    <Box
                      className="Brands"
                      style={{
                        left: 0,
                        top: 45,
                        position: "absolute",
                        color: "rgba(255, 255, 255, 0.50)",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Brands
                    </Box>
                  </Box>
                  <Box
                    className="Group2"
                    style={{
                      width: 173,
                      height: 75,
                      left: 152,
                      top: 0,
                      position: "absolute",
                    }}
                  >
                    <Box
                      className="K"
                      style={{
                        left: 49,
                        top: 0,
                        position: "absolute",
                        color: "white",
                        fontSize: 30,
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      20k+
                    </Box>
                    <Typography
                      style={{
                        width: 300,
                        color: "white",
                        marginTop: -360,
                        letterSpacing: 1.2,
                        fontSize: 35,
                        wordWrap: "break-word",
                        fontFamily: "SF Pro Display",
                        fontWeight: "800",
                      }}
                    >
                      Clothes are the Spirit of Fashion
                    </Typography>
                    <Typography
                      style={{
                        width: 300,
                        color: "#888888",
                        marginTop: 15,
                        letterSpacing: 1.2,
                        fontSize: 15,
                        wordWrap: "break-word",
                        fontFamily: "SF Pro Display",
                      }}
                    >
                      Clothes are the Spirit of Fashion
                    </Typography>
                    <Box
                      className="FashionDesigner"
                      style={{
                        left: 0,
                        top: 45,
                        position: "absolute",
                        color: "rgba(255, 255, 255, 0.50)",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Fashion Designer
                    </Box>
                  </Box>
                  <Box
                    className="Group3"
                    style={{
                      width: 149,
                      height: 75,
                      left: 376,
                      top: 0,
                      position: "absolute",
                    }}
                  >
                    <Box
                      style={{
                        left: 46,
                        top: 0,
                        position: "absolute",
                        color: "white",
                        fontSize: 30,
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      60+
                    </Box>
                    <Box
                      className="FashionShows"
                      style={{
                        left: 0,
                        top: 45,
                        position: "absolute",
                        color: "rgba(255, 255, 255, 0.50)",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Fashion Shows
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="Desc"
                  style={{
                    width: 500,
                    height: 334,
                    left: 0,
                    top: 0,
                    position: "absolute",
                  }}
                >
                  <Box
                    style={{
                      width: 490,
                      left: 0,
                      top: 177,
                      position: "absolute",
                      color: "rgba(255, 255, 255, 0.50)",
                      fontSize: 20,
                      fontFamily: "SF Pro Display",
                      fontWeight: "500",
                      lineHeight: 36,
                      wordWrap: "break-word",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Box>

                  <Box
                    className="Action"
                    style={{
                      width: 230,
                      height: 20,
                      left: 160,
                      top: 234,
                      position: "absolute",
                    }}
                  >
                    <Box
                      className="Frame1"
                      style={{
                        width: 111,
                        height: 15,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 10,
                        paddingBottom: 10,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        background:
                          "linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <Box
                        className="ExploreNow"
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Explore Now
                      </Box>
                    </Box>
                    <Box
                      className="Frame2"
                      style={{
                        width: 111,
                        height: 15,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 10,
                        paddingBottom: 10,
                        left: 160,
                        top: 0,
                        position: "absolute",
                        background: "rgba(255, 255, 255, 0.10)",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        display: "inline-flex",
                      }}
                    >
                      <Box
                        className="Create"
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          wordWrap: "break-word",
                        }}
                      >
                        Create
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                className="Heroimage"
                style={{
                  width: 591,
                  height: 471,
                  left: 606,
                  top: 0,
                  position: "absolute",
                }}
              >
                <img
                  className="Rectangle15"
                  style={{
                    width: 187,
                    height: 140,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    borderRadius: 10,
                  }}
                  src="https://wallmantra.com/cdn/shop/products/wallmantra-table-lamp-ethereal-glow-moon-lamp-32122080067750.jpg?v=1641471599"
                />
                <img
                  className="Rectangle17"
                  style={{
                    width: 187,
                    height: 220,
                    left: 0,
                    top: 155,
                    position: "absolute",
                    borderRadius: 10,
                  }}
                  src="https://i.etsystatic.com/32670787/r/il/275a61/4098078043/il_1080xN.4098078043_1xk2.jpg"
                />
                <img
                  className="Rectangle16"
                  style={{
                    width: 187,
                    height: 108,
                    left: 202,
                    top: 0,
                    position: "absolute",
                    borderRadius: 10,
                  }}
                  src="https://galaxyglow-up.com/cdn/shop/products/LAMP-14_grande.jpg?v=1630375431"
                />
                <img
                  className="Rectangle19"
                  style={{
                    width: 187,
                    height: 220,
                    left: 202,
                    top: 123,
                    position: "absolute",
                    borderRadius: 10,
                  }}
                  src="https://galaxyglow-up.com/cdn/shop/products/LAMP-3_1024x.jpg?v=1642894335"
                />
                <img
                  className="Rectangle21"
                  style={{
                    width: 187,
                    height: 212,
                    left: 404,
                    top: 59,
                    position: "absolute",
                    borderRadius: 10,
                  }}
                  src="https://cdn.shopify.com/s/files/1/1274/9019/products/resized_A-115square_1024x1024.jpg?v=1629978909"
                />
              </Box>
            </Box>
            <Box
              className="Group27"
              style={{
                width: 179,
                height: 159,
                left: 808,
                top: 358,
                position: "absolute",
              }}
            >
              <Box
                className="Rectangle20"
                style={{
                  width: 179,
                  height: 159,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  borderRadius: 10,
                }}
              />
              <img
                className="Image2"
                style={{
                  width: 150,
                  height: 150,
                  left: 16,
                  top: 5,
                  position: "absolute",
                }}
                src="https://www.futoncompany.co.uk/images/detailed/45/Glow_Lamp__24_.jpg"
              />
              <Box
                className="Ellipse4"
                style={{
                  width: 112,
                  height: 5,
                  left: 17,
                  top: 145,
                  position: "absolute",
                  boxShadow: "13px 13px 13px ",
                  borderRadius: 9999,
                }}
              />
            </Box>
            <Box
              className="Group28"
              style={{
                width: 187,
                height: 157,
                left: 606,
                top: 360,
                position: "absolute",
              }}
            >
              <Box
                className="Rectangle18"
                style={{
                  width: 287,
                  height: 127,
                  left: 0,
                  top: 30,
                  position: "absolute",
                  borderRadius: 10,
                }}
              />
              <Box
                className="Ellipse5"
                style={{
                  width: 112,
                  height: 5,
                  left: 37,
                  top: 138,
                  position: "absolute",
                  boxShadow: "13px 13px 13px ",
                  borderRadius: 9999,
                }}
              />
              <img
                className="Image3"
                style={{
                  width: 147,
                  height: 147,
                  left: 20,
                  top: 0,
                  position: "absolute",
                }}
                src="https://img.fruugo.com/product/1/86/518516861_max.jpg"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className="AboutUs"
        style={{
          color: "white",
          fontSize: 40,
          fontFamily: "Roboto",
          fontWeight: "700",
          wordWrap: "break-word",
          marginLeft: 590,
          marginTop: 600,
        }}
      >
        About Us
      </Box>
      <Box
        style={{
          width: "100%",
          textAlign: "center",
          color: "#888888",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
          marginLeft: 10,
          color: "#888888",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur
        <br />
        Lorem ipsum dolor sit amet .
      </Box>
      <br />

      <Box>
        <img
          style={{ width: 500, height: 600, marginTop: 100, marginLeft: 50 }}
          src="https://www.futoncompany.co.uk/images/detailed/45/Forest_Lamp__4_.jpg"
        />

        <Typography
          style={{
            marginLeft: 600,
            marginTop: -300,
            color: "#888888",

            fontFamily: "SF Pro Display",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie,
          <br />
          dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
          accumsan,
          <br />
          risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
          Maecenas eget condimentum velit,
          <br />
          sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per
          <br />
          inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
          scelerisque ante pulvinar.
        </Typography>
        <Typography
          style={{
            marginLeft: 600,
            marginTop: -300,
            color: "white",
            fontSize: 36,
          }}
        >
          Fashion That Speaks
        </Typography>
        <Box>
          <Box
            className="Frame48095465"
            style={{
              width: "100%",
              height: "60%",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              display: "inline-flex",
              marginTop: 500,
            }}
          >
            <Box
              className="Frame48095464"
              style={{
                height: 20,
                paddingLeft: 49,
                paddingRight: 49,
                paddingTop: 5,
                paddingBottom: 5,
                background: "linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "flex",
              }}
            >
              <Box
                className="AllCollections"
                style={{
                  color: "white",
                  fontSize: 10,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                All Collections
              </Box>
            </Box>
            <Box
              className="Frame4"
              style={{
                width: 228,
                paddingLeft: 70,
                paddingRight: 70,
                paddingTop: 5,
                paddingBottom: 5,
                background: "rgba(255, 255, 255, 0.10)",
                borderRadius: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <Box
                className="VerifiedBrands"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Verified Brands
              </Box>
            </Box>
            <Box
              className="Frame6"
              style={{
                width: 227,
                paddingLeft: 70,
                paddingRight: 70,
                paddingTop: 5,
                paddingBottom: 5,
                background: "rgba(255, 255, 255, 0.10)",
                borderRadius: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <Box
                className="VerifiedArtists"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Verified Artists
              </Box>
            </Box>
            <Box
              className="Frame7"
              style={{
                width: 228,
                paddingLeft: 70,
                paddingRight: 70,
                paddingTop: 5,
                paddingBottom: 5,
                background: "rgba(255, 255, 255, 0.10)",
                borderRadius: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <Box
                className="NewDrops"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                New Drops
              </Box>
            </Box>
            <Box
              className="Frame48095465"
              style={{
                width: 227,
                paddingLeft: 70,
                paddingRight: 70,
                paddingTop: 5,
                paddingBottom: 5,
                background: "rgba(255, 255, 255, 0.10)",
                borderRadius: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <Box
                className="LiveShows"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Live Shows
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="parent"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          marginLeft: 100,
          width : 1200 ,
          marginTop: 50,
        }}
      >
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </Box>
    </Box>
  );
};

export default Home;
