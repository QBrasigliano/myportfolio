import axios from 'axios';

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()
  console.log("tok", process.env.token)

  const { data } = await axios({
    method: 'get',
    url: `https://api.github.com/users/QBrasigliano/repos`,
    headers: {
      Authorization: `Bearer ${process.env.token}`,
      "Content-Type": "application/json",
      'Accept-Encoding': 'identity',
    },
  })
  return (data);
})
