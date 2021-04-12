// useEffect(()=>{
//   const runCall = async () => {
//     let apiValue = await fetchData();
//     console.log(apiValue);
//   }
//   const fetchData = async () => {
//     const requestOption = {
//       method: 'GET',
//       redirect: 'follow'
//     }

//     const apiUrl = 'https://api.covid19india.org/data.json'

//     try{
//       const response = await fetch(apiUrl,
//         requestOption);
//         return response.ok ? response.text() : null;
//     } catch(error){
//       console.log(error);
//       return null;
// ;    }
//   }
//   runCall();
// }, [])