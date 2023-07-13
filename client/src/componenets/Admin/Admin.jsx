import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { css } from "../Admin/CssAdmin.css";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Collection",
    headerName: "Collection",
    width: 150,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={params.value.image}
          alt="Collection"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        {params.value.name}
      </div>
    ),
  },

  {
    field: "volume",
    headerName: "Volume",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "SaleDay",
    headerName: "SaleDay",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "7D",
    headerName: "7D",
    type: "number",
    editable: true,
    width: 160,
  },
  {
    field: "floor price",
    headerName: "Floor price",
    type: "number",
    editable: true,
    width: 160,
  },
  {
    field: "Owner",
    headerName: "Owner",
    type: "number",
    editable: true,
    width: 160,
  },
  {
    field: "Item",
    headerName: "Item",
    type: "number",
    editable: true,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    Collection: {
      image:
        "data:image/png;base64,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",
      name: "Adidas",
    },
    volume: "100",
    SaleDay: 35,
  },
  {
    id: 2,
    Collection: {
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-nike-1-202653.png",
      name: "Nike",
    },
    volume: "150",
    SaleDay: 42,
  },
  {
    id: 3,
    Collection: {
      image:
        "data:image/png;base64,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",
      name: "Lacoste",
    },
    volume: "50",
    SaleDay: 45,
  },
  {
    id: 4,
    Collection: {
      image:
        "data:image/png;base64,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",
      name: "Zalando",
    },
    volume: "15",
    SaleDay: 10,
  },
  {
    id: 5,
    Collection: {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADBwcEuLi7n5+ceHh6ysrINDQ38/Pzg4OCnp6fQ0NC1tbX19fVRUVEEBAR5eXmbm5u7u7tubm7t7e2kpKTm5uatra2enp4jIyPY2Ni+vr6Hh4eVlZWAgIA8PDxmZmZAQEDS0tJMTExHR0cWFhZdXV10dHQ0NDSNjY1XV1dpaWkpKSmAYfyhAAAKmklEQVR4nO2b6ZaqvBKGgbY1iBEHEBvnWVvv//pOwpAqQhBtYa9vrVPPj727SYC8pFJJVdKWRRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRD/P/CguUfxxh7VHMzq316uK3hWzueLzxvUApvje51YrXK2Wbfaie72MMz5Pew2x9/7qMh6CjWOTnZbYH9H0MZlVnWquI1TbuvpdrqauKlKYws8exO3qdDr2cDjPPYCzjR+oMIwyJp6s+2RegYLEnisnvU9EaMrIYij6UNc2S1jblLI+MW2u60q/LF9iW2ffudGwxunFWSdk5df3Nn2ca/XDLJn+faXUygYnE9SZOgazLEjirbNua0yXt5Dx0Rf+TMHqI+XeQudb9vu9fWqs++8olConiRHIB8/kstjV7uFWZG47rdpprnCS1wxTkYgcKd6bS1/HelfvmNUmMC6on9FwSHS7rEO8vr4ubv9iFShv6yyEweNwlXejM5Q/nr1tLpPFFosTEtO62LBTL7d3rQnMFO4rPLXfAsCD7P8ajeV3dfa9Uyhxc5JJ9r2Hb2LWav0qv6xGkR6GvtcWRydlMDeXF1dp1d0B/FUodXJC6f46jUxIftSMZU0gOzDR2VpPIQu/FVX98fskuYgnvehdc860V7CNSe/oxExRqRCr+oDsjEIRLUiXw3Mwo3P+9Da56WPibqm/Fi3tU4UCteVjsy75g2QdpQTjPJrm6KZ1ijkX3knTvP7gmP+qOqB8inez3flZMTXIPCk3Iy1V7o1B/FcIWPTXOEpX2tH6o6HPlM2hneqXveqQSIAN8Mi0D0tCKnpw3zCsJXvZjDZ+uPmNBXx/ElVETvk39y3USQR3HYgvPB1ahSiL3ZMe8zbwmx7bivA8DYVU5EIAVEXonXmPkIFA6ykTmEM96UjIxxAJ16d8g2N4E1nFSXMzrtQrOmgC9ncUw7Itw/4jjqFrnpe+sU6l9iDSy+H1G/irczWwYQjV2//Qv0c3LgMeHKN2EHUKoTlQ1cWO+vA2oCZVn3qD9lHFVOFB82xb+grLERIEULZCt3yhkL5VjaPktgsu/RT6RA+I56YFfI7CDzi+WQpei3eqbLfN8YhUijVuBevEJzd2vE1+4FZ4UC11u5hR95Zy3/BTB/IQbwxDqXZO2LOYNZQdeKhnSjRNbvS2Rm+7QG+LbPCify3C72BHMSrvtS3r67F+C2JFQfwonbMtGLFhmeKCW7tKPmZw7Lm3FFldQo9dZMMnoNt0mcBfKx2c25FYKD5KKaQjbzJpmNH+zNQhXUKobtk8SSxdyaWhn72pp/WVm4l+A11YcGJr7KxgibvpdJSty5VTxVdyKxtZpTQs3aVX28eNA+LYA57y1v+y5fBQdQo5L/ZPckyKhhmNjkbqk4c/iszxamLayFAmnTThjMLRY7KTGusNOilOr67Sfoij4NxEPqvzBS5t2KylkE2cAZV1vlHqInxo1Rglt6BSVYlNH371l4yo9CWB7S+mIqJIWesEktCTt7Wmj7M/G+6xPCG6noHFhffrQjSkBl7NQxPxW2hiQPtnqB+zq4+V5hm1XZx+pJRCDUgbqxOqDSJC6sZbYYKQrTqmD2UgzhnOxLVCsUvUTIKx9kD+RE92cmX33pI3RLIzeyKC559H61u+BLqZaPzicJgLQxis1JG3sdSGCwCv/+BNx3gJHehhE0KQaqD6yXNRQoXjPN0R6ozc2Nv+dM7rCccNg4uhUf11brGD1vvxMCY5E6L5gVn7v4q2/rSrfRn7i0mg27UD8er9flLmsPKizuq8fuiB3N36p3btoQp+igs1HZR4mIWH89jqTWDwscgmCW4ruhBZzC/CMv4us+9zAhDLe4GM72W9uwaxlVJbrHC0LaPIi2T4jxU1TQpXxiHRYL9WH66zSgJTYJ1YYCLNaraW+21lnNL4TjJrYVrfKVvU4BBn/RxWJ4t+Cyx6sddmLpz0TIWDGKVe5u7pXim8O2t1khvrtcurNxY7ZqGp4m1R9+KtF0rHKu0lnNLXsTvkCH1iyNFLARKI8RDaST5e130lEm0h9PSo1z4WKvyjc2Bk9yhFhvzdak6m6raXyJor1Voudk2xW95hX1VnWgobAwOr8lPXQDdqNxoyLkJB/GCQrU+u2hPZ9ZcvfrU2gEi+RZFr5SCK+3aC2bgILa83kqFXe9yU9SLUazSUs5NvuQHurCkx10bYlrY9EwcRL3CILdrX1tiM7ZVy9xda2aq9tJMDi00zsQoAzF+RaGVLWa17QAJ8gFtmamDwsKlXsju0cBAF27Zzl5RuFL1V4OoOxhMJgtH4Hmek98sAgzj6amPwamLYyk368wD10AA6ZrvxSsKx2ocLB0hT7JYJCKdI7y/nUkfLUgNu5Xzim0T2HYQzsN8JqpYX823pa2mCBTO2wgwVKRgF5Lceem8wnA6sAV3cN/oQ9/eiBr4fKC1h2XuplltCQzNFHa5eQuVvnC1ol/oRCd4x0pP+mcMIMDQl8RNEKsFmOlYBO8rB14MexjOyy07Knh+QWFZRR+aYJiaPoSjmcKQtIz7auzrewtoEr0qO3tJYanKHnzNo/FxqA7z2LYpZ+nA9HjRFuT428zf6sNF6XAfOgZZKvyUI9rR7pRKUY6NHfU3o0l/p9zxKwonpSpwuqZ49u1jmLaXViKGHJtbytnOkK9R/E3hDE7RXZtduXF01vte7kLIsclvUSrFaYE6hRwZYlkhWjeewk9FFUCZz4chwg7GMN1Py4cI8WqvTuEenXUsKWSWg8y0yXG4R000bcPG8D3dTVkh2naoU8i6Z8jGGvqQgTetOsj0F9DpGNNzmRVCv479XvkBBjOtivFXK0h8GBRaaGe2lBX6OzjJXYopBAyOSMcH26AQpWtqFHqhCoHNClEcbHAIf6RTuR2a4ah1sNymNihE6ZrnCvl8wmH5a1JobZRjNnmEv4FnCkMqRjg45bjlCs2gEB+ReqpwJh4F7nJgGIcWCjjHDfkafOqiFHdLApVjc+R+mknhbGdrVJy+XAlDVe6yb+xmX7Vm2MyUWDh1sTe9s59/63S4mRSibYdnCtlSrsXyfIx5zLMLilU+UpaDz+eNTBVYPn9M0ryaaRxai5cUdi7ylJc6p2I+2Y3SNcsmkhkqwyX+M5+09lbJsalgnHlcYx8yfdI3n1RIs9l5quZqDAIDsPjH58kMhjfjZZK7jDWXM6SYqfNausK01khbmxYVZo86J6OA8exAu79CDVHVOOSqzN72TZCNmv9CjofMCuYHWLga+9DiWh+atleCe/ZDPj/tvPQEmeWG6N17WLk18BcKa7uXY4+ifploPbzLN/p5NV9btS1GS8mtV8D/WXlJ/sxJ/uKvH/b74eB3tBcXFsI2+TL9YgeZg2V8spKTO/OirmAQ7VSjbG8Wx3vPc/6+gnOSh6aYBAqJ0bzfHQyglhZceeMwoasTJXTl2Gbpo6PkWj/pXW+6Scxn1I1u627iy5jXz+4pP6ql08PtEofL0XS6nd66ja3OTJh8Sx3vPaJcB93Li3+J//pLCYIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOI/z/8AdFiebqdjqnEAAAAASUVORK5CYII=",
      name: "Zara",
    },
    volume: "17",
    SaleDay: 5,
  },
];

export default function DataGridDemo() {
  return (
    <div>
      <Box sx={{ height: 400, width: "100%", marginTop: 5 }}>
        <DataGrid
          className="custom-datagrid"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
      <footer>
        <Box
          sx={{
            display: "flex", // Set display to flex
            flexDirection: "row", // Set flexDirection to row
            justifyContent: "space-around", // Add space between the boxes
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img src="path_to_your_logo_image" alt="Logo" />
            <Typography variant="h6" color="text.primary">
              Your Text Here
            </Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className="about">
              About
            </Typography>
            <Typography variant="h6" className="about">
              Product <br />
              Resource <br />
              Term & condition <br />
              FAQ
            </Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className="about">
              Company
            </Typography>
            <Typography variant="h6" className="about">
              Our Team <br /> Partner With Us <br />
              Privacy & Policy <br />
              Features
            </Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "rgba(0, 0, 0, 0)",
              "&:hover": {
                backgroundColor: "primary.main",
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className="about">
              Contact
            </Typography>
            <Typography variant="h6" className="about">
              Tel : 90 117 343 <br /> Email: Farachet@gmail.com
            </Typography>
          </Box>
        </Box>
      </footer>
    </div>
  );
}
