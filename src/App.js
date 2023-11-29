import logo from './logo.svg';
import './App.css';
import './index.css';
import Tweet from "./tweet";
import { useState } from 'react';


let default_Tweets= [
  {
    id:0,
    name: 'Mariam',
    content:'j vais bien',
    like :100  
  },
  {
    id:1,
    name: 'Anne',
    content:'cool',
    like :10  
  },
  {
    id:2,
    name: 'Sarr',
    content:'nice',
    like :50 
  },
  {
    id:3,
    name: 'Dia',
    content:'fun',
    like :200  
  }

]

 export default function App() {




let [tweets, setTweets]=useState(default_Tweets)
const onDelete= (tweetId)=>{
  setTweets( (curr) => curr.filter((tweet)=> tweet.id !== tweetId))
}


const handleSubmit = (event) =>{
  event.preventDefault()
  console.log(event);

  const name = event.target.name.value;
  const content = event.target.content.value;
  const newTweet={
    id: tweets[tweets.length - 1]?.id +1  ?? 0,
    name,
    content,
    like:0
  }
  event.target.name.value=''
  event.target.content.value=''

  AddTweet(newTweet)
}

const AddTweet = (tweet) => {
  setTweets ([ ...tweets, tweet])

}
const onLike= (tweetId) =>{
  setTweets( (curr) =>{
    const copyTweet = [...curr];
    const likedTweet = curr.find((tweet) => tweet.id === tweetId);
    likedTweet.like += 1;
    
    return copyTweet
  })
}

const tweetsList =tweets.map( (tweet) => {
  return(
  <Tweet
  key = {tweet.id}
  id={tweet.id} 
  name= {tweet.name} 
  content= {tweet.content} 
  like = {tweet.like} 
  onDelete = { (id) =>{
    onDelete(id)
  }}
  onLike={(id) => {
    onLike(id)
  }}
   />
  );
});
  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='tweet-form'> 
     <h4>New tweet</h4>
     <input placeholder='name' type='text' name='name'/>
     <input placeholder='content' type='content' name='content'/>
     <input type='submit'/>

     </form> 
      
      <div className='tweet-container'>
      {tweetsList}
      </div>
    
    </div>
  );

}

