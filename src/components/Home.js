import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Home.css";
import image from "../image.png"

const Home = () => {

  const [data,setdata] = useState("");
  const [loading,setloading]=useState(true); 
  const [loadingbar,setloadingbar]=useState(false); 
  const [personprofile,setpersonprofile] = useState(useState({
    data: '',
    loading: true
}));
  const url = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

  const getdata = () =>{
    axios.get(url)
    .then((response)=>{
      console.log(response.data);
      setloading(false);
      setdata(response.data);
    })
    .catch(error=>console.log(error));
  }
  useEffect(()=>{
    getdata();
  },[url])

  // const handleclick = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(, {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();

  //     console.log('result is: ', JSON.stringify(result, null, 4));

  //     setpersonprofile(result);
  //   } catch (err) {
  //     setErr(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  //   const data = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
  //   setpersonprofile({
  //     data: data,
  //     loading: false
  // });
  // console.log(personprofile);
  const handleclick = (id) => {
    setloadingbar(true);
    axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
    .then((response)=>{
      console.log(response.data);
      setloadingbar(false);
      setpersonprofile(response.data);
    })
    .catch(error=>console.log(error));
}

  return (
    <div className='all'>
      <div className='all1'>
    <div className="contain">
      <div className="left">
        <div className='divall'>
          <div className='divhead'>
            <p className='para'>USER LISTS</p>
          </div>
          {
            loading?
            <div class="loader"></div>
            :""
          }
          {
            data?data.map((element)=>{
            return <button className='div1' onClick={()=>{handleclick(element.id)}}>
              {element?.profile?.username}
            </button>
            }):""
          }
        </div>
      </div>
      <div className="right">
      <div className='divallnew'>
        <div className='divhead1'>
            <p className='para'>USER DETAILS</p>
        </div>
            <img src={image} className='img' alt="" />
            <h4>@Paxton68</h4>
            {
          loadingbar?
          <div class="loader"></div>
          :""
        }
             <div className='div3'>
              <p style={
                {
                  "display":"flex",
                  "flex":"wrap"
                }
              }>{personprofile?.Bio}</p>
            </div>
            <p  className='ppp1'>FirstName</p>
            <div className='div2'>{personprofile?.profile?.firstName  }</div>
            <p className='ppp2'>Job Title</p>
            <div className='div2'>{personprofile?.jobTitle}</div>
            <p className='ppp3'>Email</p>
            <div className='div2'>{personprofile?.profile?.email}</div>
      </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Home
