const BASE_PATH_FORAPI = process.env.NODE_ENV === "development"?
"http://localhost:3000":"e-com-orcin.vercel.app"

export default BASE_PATH_FORAPI;