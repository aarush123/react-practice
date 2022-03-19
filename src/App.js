import Cart from "./components/Shopping/Cart";
import Purchase from "./components/Shopping/Purchase";
import Total from "./components/Shopping/Total";
import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import { Routes, Route, Link, Redirect} from "react-router-dom";
// import Details from './components/Details';

// import MapPractice from './components/MapPractice';
// import Buttons from './components/Buttons';
import { useState, useCallback } from 'react';
import TotalContext from "./store/Total-Context";
// import HeaderSection from './components/HeaderSection.js';
// import CounterSection from './components/CounterSection';
// import FlagSection from './components/FlagSection';
// import ChangeState from './components/ChangeState';
// import FooterSection from './components/FooterSection';
// const buttonStyle = {
//   width: "50px",
//   height: "25px",
//   color: "white",
//   backgroundColor: "Blue",
//   borderRadius: "5px"
// }

// function App() {
// const [state, setState] = useState({
//   count: 0,
//   toggleBoolean: false
// });
// const [currentTime, setNewTime] = useState(new Date().toLocaleString());
// const [notStarted, StartWatch] = useState(false);
// useEffect(()=>{
//   setInterval(()=>{
//     setNewTime(new Date().toLocaleString());
//   },1000)
// }, [notStarted]);
// const handleButtons = (operators) => {
//   operators === "+" ? setState({...state,count: state.count+1}) : setState({...state,count:state.count-1});
// }
//   return (
//     <>
//       <h1>Counter Application!</h1>
//       <h3>Counter: {state.count}</h3>
//       <button onClick= {()=>handleButtons('+')} style={buttonStyle}>+</button>
//       <button onClick={()=>handleButtons('-')}style={buttonStyle}>-</button>
//       <h3>{state.toggleBoolean.toString()}</h3>
//       <button onClick={()=>setState({...state, toggleBoolean:!state.toggleBoolean})}>Toggle Above!!</button>
//       <br></br>
//       <button onClick={()=>StartWatch(true)}>Start Watch!</button>
//       <p>{currentTime}</p>
//     </>
//   )
// }



// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [flag, changeFlag] = useState(false);
//   const plusCounter = useCallback(() => {
//     setCounter(counter + 1);
//   },[counter]);
//   const changeFlagFunc = useCallback(() => {
//     changeFlag(!flag);
//   },[flag]);
//   return (
//     <div>
//       <h1>Demonstrating useCallback Hook and React.memo()</h1>
//       <HeaderSection/>   
//       <CounterSection counter={counter}/>
//       <FlagSection flag={flag}/>
//       <ChangeState buttonText="Change Counter!" click={plusCounter}/>
//       <ChangeState buttonText="Change Flag!" click={changeFlagFunc}/>
//       <FooterSection/>
//     </div>
//   )
// }


// export default App;

// const arr = ["apple", "banana", "orange", "beetroot", "strawberry"];
// const buttonArray = ["button 1", "button 2","button 3", "button 4"];
// const App = () => {
//   return (
//     <div>
//       <h1>Map Practice!</h1>
//       <ol>
//       {arr.map((fruit)=>{
//         return <MapPractice key={Math.random().toString()} fruitNames={fruit}/>
//       })}
//       </ol>
//       {buttonArray.map((btnName)=>{
//         return <Buttons buttonName = {btnName} />
//       })}

//     </div>
//   )
// }

// export default App;




// const App = () => {

//   const submitForm = (e) => {
//     e.preventDefault();
//   }
//   const [data, setData] = useState({
//     fName: '',
//     lName: '',
//     mob: ''
//   });
//   const handleForm = (e) => {
//     setData((prevState)=>{
//       console.log(prevState);
//       return {...prevState,[e.target.name]: e.target.value}
//     });
//   }
//   return (
//     <> 
//     <form onSubmit={submitForm}>
//       <input name="fName" onChange={handleForm} placeholder="First Name"/><br/>
//       <input name="lName" onChange={handleForm} placeholder="Last Name"/><br/>
//       <input name="mob" onChange={handleForm} placeholder="Mobile Number"/><br/>
//       <button>Submit!</button>
//     </form>
//       <p>{`this is name ${data.fName}, this is Last Name ${data.lName} and here is my Mobile Number ${data.mob}`}</p>
//     </>
//   )
// }

// export default App;

// const App = () => {
//   const formStyle = {
//     display: "flex",
//     alignItems: "row"
//   }
//   const [formData, setFormData] = useState({
//     firstName: "",
//     Male: false,
//     Female: false,
//     maritialStatus: true,
//     mobile: ""
//   });
//   const [toShowData, setToShowData] = useState(false);
//   const formHandler  = (e) => {
//     setFormData((prevState)=>{
//       return {...prevState, [e.target.name]: e.target.value}
//     });
//   }
//   const showDataBtnfunc = (e) => {
//     e.preventDefault();
//     setToShowData(true)
//   }
//   return (
//     <>
//       <form>
//         <div style={formStyle}>
//         <p>Employee Name: </p>
//         <input onChange={formHandler} style={{marginLeft: '5px'}} name="firstName" placeholder="Enter Full Name" />
//         </div>
//         <div style={{display: "flex",alignItems: "row"}}>
//         <p>Gender: </p>
//         <div style={{marginTop:"auto",marginBottom: "auto"}}>
//           <input onChange={formHandler} type="radio" style={{marginTop:"auto",marginBottom: "auto"}} name="Male" value="Male"/>
//           <label htmlFor="Male">Male</label>
//         </div>
//         <div style={{marginTop:"auto",marginBottom: "auto"}}>
//           <input onChange={formHandler} type="radio" style={{marginTop:"auto",marginBottom: "auto"}} name="Female" value="Female"/>
//           <label htmlFor="Female">Female</label>
//         </div>
//         </div>
//         <div style={formStyle}>
//         <p>Maritial Status: </p>
//         <div style={{marginTop:"auto",marginBottom: "auto"}}>
//         <input onChange={formHandler} type="checkbox" checked={false} style={{marginTop:"auto",marginBottom: "auto"}} name="maritialStatus"/>
//         <label htmlFor="maritialStatus">Married</label>
//         </div>
//         </div>
//         <div style={formStyle}>
//         <p>Mobile Number </p>
//         <input onChange={formHandler} style={{marginLeft: '5px'}} type="number" name="mobile" placeholder="Enter Mobile Number!" />
//         </div>
//         <button onClick={showDataBtnfunc} style={{width: "296px", height: "50px", border: "2px black solid", borderRadius: "5px", marginTop:"5px"}}>Submit!</button>
//       </form>
//       <div>
//         Output!
//         {toShowData ? 
//         console.log(formData.firstName + formData.Male+formData.Female+formData.maritialStatus+formData.mobile):
//         console.log('don not show data!')}
//       </div>
//     </>
//   )
// }

// export default App;


// const App = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const changeAdmin = (e) => {
//     setIsAdmin(e.target.checked);
//   }
//   const productObj = [
//     {id: 1, productName: "Apple"},
//     {id: 2, productName: "Mango"},
//     {id: 3, productName: "Orange"},
//     {id: 4, productName: "Kiwi"}
//   ]
//   return (
//     <>
//         <input onChange={changeAdmin} type="checkbox"/>Is Admin
//         <hr/>
//         <h3>{isAdmin.toString()}</h3>
//         {isAdmin ? productObj.map((prod)=>{
//           return <p key={Math.random().toString()}>{prod.id}:-{prod.productName}</p>
//         }):'No data Found!'}
//     </>

//   )
// }

// export default App;


// ------------------------------------------- REACT ROUTERS ---------------------------------------------

// RELATIVE QUESTIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Q1. HOW DO YOU IMPLEMENT SINGLE PAGE APPLICATION? 
// ANS - SINGLE PAGE APPLICATION IS IMPLEMENTED BY USING REACT ROUTER, INSTALL THE react-router-dom@6, cover the entire index application in BrowserRouter by importing it, by doing import {BrowserRouter} from 'react-router-dom' in the index.js
// then in the main application, you need to import 3 things which is {Routes, Route, Link} from 'react-router-dom', the entire app js function needs to be covered in Routes, and then use Route like below.. it takes in 2 parameters, path and Element.. check below.. 

// Now there is one more component that react provides, which is Link.. so in order to make that non refreshing kind of thing, we use Link Component and it takes in "to" which is the path.. that needs to be same as that of the path that has been used in Route Component.. so when I click on Link, that to redirects to the same path. 

// if I want the homepage to appear all the time then I can keep just the forward slash, so that it will appear all the time, even on click of any other pages too! 

// now let us say that if I have some data to show on a page which comes dynamically so the link will change.. that link changing work is done by passing parameter to the link.. 

// ---------------------- USEPARAMS HOOK ---------------------------

  // if I have to get the url parameter then I will have to use the useParams() hook the useParams hook gets the data from the main route path where I have passed the url kind of variable.. now the component that I am rendering when the url parameter is being changed in that component I have to use the useParams hook.. 
  // syntax - const params = useParams(); this params return the name of the parameter after colon(:) for ex. test in the line below.. params.test
  // Ques - How do you use dynamic parameter?
  // ans - dynamic parameters can be used by using : colon .. and the content after : is the name of the parameter

  // difference between path and url  - the url is what is shown in the browser and the path is what that is defined in the Route path argument

  // REDIRECT HOOK 
  // if there is no path defined then I can use Redirect to set a predefined path.. for ex.. if I have a valid login then show the login page otherwise redirect to some other page.. 
  
  
//   const App = () => {
//   return (
    
//       <div className='App'>
//         <ul>
//           <li><Link to="/tutorial">Tutorial</Link></li>
//         </ul>
//         <Routes>
//           <Route path = "/tutorial" element={<Home/>} />
//           {/* <Route path = "/tutorial/:test" element={<Details/>} /> */}
//           {/* <Redirect from="/" to="/home"/> */}
//         </Routes>
//       </div>
//       )
// }

// export default App;

// ----------------------------------------------------------- PROP DRILLING -----------------------

// passing data from components to components is called as prop drilling.. when there are multiple props then there can be a problem in passing props from one component to another and managing the state.. now to solve these problems there are some things.. content API, redux or similar framework to make the required state value global

// basically when there are some values that I want to use as a prop and there are many components where I want to use it, then prop drilling can take place and to solve that problem and make the values global, we can use context API or Redux.. so any component can access these values directly.. 

// const App = () => {
//   const products=[
//     {pName:'Apple',price:30},
//     {pName:'Banana',price:3},
//     {pName:'Orange',price:10},
//     {pName:'Grapes',price:8}
//   ]

//   const [item, setItem] = useState('');
//   return (
//     <div className = "mainApp_row_class">
//       <Purchase products={products}/>
//       <Cart />
//       <Total/>
//     </div>
//   )
// }

// export default App;

// ---------------------------------------------------------------- GIT AND GITHUB ---------------------------------------------------------


//  GIT INIT - this is the folder that git provides which is further used to track all the history that I have made in my project.. so all the histories are stored in this folder.. it is a hidden file, how do I get this folder where all the commands are saved .. 


//  git add . -- this is the command that I use to push everything ( changed or unchanged to the .git folder)

// git status - to check what changes are made.. and this will return the changes that are made... if any file is deleted or updated 

// git commit -m "here the message goes" --- so here I am making the commit and sending a message too.. so let say that If I have changed data is some file so the relevant message will go as message

// git log - this command will return who have made the changes and it will also show the message that was sent, this returns the log sorted through time log



//  git Stash -- so this is kind of the backstage storage for the files that have NOT BEEN COMMITTED and we can keep them in the main directory on our wish.. so let's say that I have made a new file and done some changes on that file but I do not want to include in the main github project so in that case I can stash them .. 
//  how can one stash the files.. any changes that I have done which are not yet commited, I can simply use GIT STASH and the latest changes after the last commit will be stashed.. they will stay on the backstage and if I want to get them back them I can use GIT STASH POP, this will bring the files to front and then we can commit them.. 

// ------------------------------------------ GITHUB ---------------------------------------------


// now let us say that if I am working on some project and I want to make the repository, so that I can upload the changes there only.. that's the purpose of the github, right.? 
// in that case I will register my repository that I have made on my account on the project on my computer that I am working on... that is done by one command "git remote add origin `here comes the url (http)`"
// let us break that url 
// 2. remote - this means that I working with URL 
// 3. add - this means that I am adding a new URL 
// 4. origin - now this is the part, this is the name of the url.. kind of a dns address.. or a contact name for the particular number, I can not remember every number in my phone so I put a name to those numbers.. now it is not mandatory that it has to be origin but by convention we keep it that way.. 

// now pushing the changes for that folder to that repository -- we use the command "git push origin master"
// breaking the command -
// push -- pushing the changes 

// origin - this is same as above.. to which repository you are pushing the changes 
// master -- to which branch you are pushing the changes 

// FORKING -- now let us say that there is a project in world that I want to work on.. so in the ideal situation, I should not be allowed to change any thing on that particular organization's folder.. so in that case I fork that project to my personal account and that creates a new repository with the same name but in my account so that I can contribute to it.. even if the repository is public for the world to see, no one in github can change the code that is not there in their account.. 

// the URL from where I have forked the repository.. is known as "UPSTREAM URL" and my url is known as "origin"

// so if I want to connect the url to my project then I will use git remote add upstream "the url from where I have forked the repo"

//  NEVER COMMIT ON THE MAIN BRANCH, ALWAYS CREATE THE NEW BRANCH WHILE WORKING AND THEN THEY WILL BE MERGED 
// to create the new branch.. git branch "name of the branch"


// PULL REQUEST - now comes the part where forking is defined.. so let us say that I have forked an open source project and I have contributed to that project.. now I will have to ask to the actual project owners that hey I have made some changes after forking your project ( in my own branch) so after that I will check with them that if I qualify to make the changes effective in the actual project.. the owner will review my code 

// then the actual project owner can confirm the pull request. once done , the changes that are made on the borrowee repo will be reflected on the main project 


//squashing commits -  if we have a lot for commits that we are working on and we want to merge it into one commit.then how do we do it.. we do it by "rebase" command 

// let's say that I have done 4 commits and I want to make one commit for that.. so after making commits., I will get the commit ID and then I will take the 5th commit ID and use rebase -i `5th commit ID`, this will open a terminal with the 4 IDs above the 5th, that I took. and then I can pick and squash between those 4 commits.. 
// pick 1234455(this will be the random ID that I am going to get)
// s 1234459
// s 1234451
// pick 1234452
// the pick which is above the S's will be the master of the S's .. so in the above example.. the id 1234455 will contain the S ones.. then the panel will open.. change it however you want and to exit.. esc :x
// NOTE - whenever we are creating a new branch then that branch will be after the head (main / master) so all the changes are supposed to be done before we create a new branch. 


// MERGE CONFLICT 

// so let us say that two people make some change in one line only so github gets confused and after committing, it will prompt an error saying which change do you want to keep.. ? 

// in that case.. we will have to manually remove the lines that we do not want to keep and then merge the pull request to the main branch


// ------------------------------------ github end -------------------------------------


// ------------------------------------------------- CONTEXT API --------------------------------------------

// this is used for global state management... when there are some values that I want to declare global for the entire project so that I do not have to use prop in particular.. then I use context api 

// it is a 3 step process 
/* 
1. creating context 
2. Provider
3. Consumer

------------- creating context -----------------

for creating context, we use const nameOfContext = React.createContext(default Value); 
we can manipulate the default value later on without any problem

Now generally the context is created as a separate file so that it can be used anywhere in the project.. one method is to make the folder named as store and in that we can create a global context component

---------------- Provider ----------- 
Once the context is created then we have to provide it. 

-------------the syntax for the same is -------  

<nameOfContext.Provider value = {value}>
  <name of the component rendered />
</nameOfContext.Provider>

Now the nameOfContext is the name of the context that I have created in the first step.. 
value is the fixed attribute which can take anything.. it is going to take the state which I want to use globally  
and inside of it.. we will render that component where we want the value to be available.. 
I mean the component where the context will be called.. the global object basically.. 

--------------- Consumer ----------- 

now the third step is where I will refer the context.. meaning where I will use the global context that I have made.

the syntax is bit different .. 
in the component where I have to use the context I will have to wrap the entire application in 
under the main function's return statement 
<nameOfContext.Consumer>
  {(value)=>{
    return(
      <div>
        <h1>This is the : {value}</h1>
      </div>
    )
  }}
</nameOfContext.Consumer>

the nameOfContext.Consumer return a callback function and the function takes in the value which was passed as an attribute to the main provider value and then the JSX is returned.. 

I can use context anywhere in my project by just giving it a return function and it will provide the value that I have passed where I have declared the provider

--------------------------------------------------- USECONTEXT -----------------------------------------------

  this is the hook which I can use in place of Consumer function.. I can use simply use the useContext(nameOfContext)
const consumerName = useContext(nameOfContext)
and by doing that I do not have to return the function for the consumer Function 

*/



const App = () => {
  const [demo, setDemo] = useState(0);
  const products=[
    {pName:'Apple',price:30},
    {pName:'Banana',price:3},
    {pName:'Orange',price:10},
    {pName:'Grapes',price:8}
  ];
  const [itemChosen, setItemChosen] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  
  const selectChange = (e) => {
      let pName = e.target.options[e.target.selectedIndex].text;
      let price = e.target.value;
      let tCart=[...itemChosen];
      let obj = {pName,price};
      let tPrice = parseInt(price);
      tPrice = productPrice + tPrice;
      tCart.push(obj);
      setItemChosen(tCart);
      setProductPrice(tPrice);
      console.log(itemChosen, productPrice);
  }
  return (
    
    <div className = "mainApp_row_class">
      
      <Purchase 
      selectChange={selectChange}

      products={products}
      />


      <Cart 
            itemChosen={itemChosen}
            productPrice={productPrice}
      />
      <TotalContext.Provider value={productPrice}>
        <Total/> 
      </TotalContext.Provider>
      
    </div>
  )
}

export default App;