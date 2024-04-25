import logo from './logo.svg';
import './App.css';
import Blog from './Blog';

function App() {
  const posts = [
    {id : 1 , name :"Red Bull" , img : "https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/497SOka6gHO04S711sNtCa/adf6f738eaccdd4de2aa8ffe20bafa9a/LRES_IN_RBWE_250_Single_Unit_close_ambient__1_.png?h=680&fm=webp&q=90"},
    {id : 2 , name :"Red Bull" , img : "https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/376uTpes2R3UU30kjhDgMx/788487279150c3c3018057b9d2d1bb77/LRES_IN_RBRE_250_Single_Unit_close_ambient__1_.png?h=680&fm=webp&q=90"},
    {id : 3 , name :"Red Bull" , img : "https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/3r9LNEQkKc4Qe6YaJnNBJ1/105d7f426869b046ba6984ab995791c9/IN_RBED_250_Single_Unit_close_ambient_ORIGINAL_DRES__1_.png?h=680&fm=webp&q=90"},
    {id : 4 , name :"Red Bull" , img : "https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/oI7JHUHs4T9261N7M1JEM/23692b6646a9e7dacd6600ffd169f392/IN_RBYE_250_Single_Unit_close_ambient_ORIGINAL_DRES__5_.png?h=680&fm=webp&q=90"},
    {id : 5 , name :"Red Bull" , img : "https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/376uTpes2R3UU30kjhDgMx/788487279150c3c3018057b9d2d1bb77/LRES_IN_RBRE_250_Single_Unit_close_ambient__1_.png?h=680&fm=webp&q=90"},
    {id : 6 , name :"Red Bull" , img : "https://www.redbull.com/energydrink/v1/resources/contentful/images/lcr8qbvxj7mh/5yJ5aAgTkSl24TXP9IFA7l/933582c6cabc953a9d0001a23bb3dcfc/IN_RBSF_250_Single_Unit_close_ambient_ORIGINAL_DRES__1_.png?h=680&fm=webp&q=90"},
    {id : 7 , name :"Monster" , img : "https://web-assests.monsterenergy.com/mnst/68c062c3-e188-48d1-a3e4-c9d48fc484de.webp"},
    {id : 8 , name :"Monster" , img : "https://web-assests.monsterenergy.com/mnst/8a02f363-00cb-426c-a5c7-f8e0c312512f.webp"},
    {id : 9 , name :"Lemon" , img : "https://www.davatbeverages.com/wp-content/uploads/2024/03/Lemon-Apple-Tetra_Packet.png"},
   
  ]
  return (
<>
<Blog posts={posts}/>
</>
  );
}

export default App;