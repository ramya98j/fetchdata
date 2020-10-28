import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VedioDetail from './VedioDetail';
import VedioList from './VedioList';
class App extends React.Component{
    state={videos:[],selectedV:null};
    componentDidMount(){
        this.onTermSubmit('cars');
    }
    onTermSubmit= async (term)=>{
         const response=await youtube.get('/search',{
              params:{
                  q: term
              }
          });
          this.setState({
              videos:response.data.items,
              selectedV:response.data.items[0]
            });

    };
     onVideoSelect=(video)=>{
         console.log(video);
         this.setState({selectedV:video});

     };
    render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
         <SearchBar onSubmit={this.onTermSubmit}/>
         <div className="ui grid">
             <div className=" ui row">
              <div className="eleven wide column"><VedioDetail video={this.state.selectedV}/></div>
        <div className="five wide column"> <VedioList onVideoSelect={this.onVideoSelect} v={this.state.videos}/></div>
         </div>
         </div>
       </div>
    );
    }
}
export default App;