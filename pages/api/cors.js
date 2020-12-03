import Cors from "cors"
import initMiddleware from "../../scripts/init-middleware"

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  //   res.json({ message: 'Hello Everyone!' })

  let formData = {
    items: [
      {
        id: 5593938165916,
        quantity: 1,
      },
    ],
  }

  fetch("https://fatlightslim.myshopify.com/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log(response); 
    res.json(response)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}
