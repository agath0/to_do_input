import React from "react";
import "./index.css";

const ToDoo=(props)=>{
    return(
        <div id="todo">
            <span id="box1">{props.doList.newWord}</span>
            <button id="delete" onClick={props.onPress}>Delete</button>
        </div>
    )
}

var num=0;
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:'',
            doList:[]
        }
        this.handleChange=this.handleChange.bind(this)
  };
    

    handleChange(event){
        this.setState({input:event.target.value});
    }
    addFunc(){
        var newWord=this.state.input;
        this.setState({doList:[...this.state.doList,{newWord,num:num++}]})
        this.setState({input:''});
    }
    removeList(num){
        this.setState({
            doList:this.state.doList.filter(doList=>doList.num!==num)
        })
    }
    render(){
        return(
            <div className="container">
                <h1 style={{color:'#3e447d',textAlign:'center',fontSize:90}}>Your To Dooo... List</h1>
                <input type="text" id="in" name="input" value={this.state.input} onChange={this.handleChange} />
                <button id="add" onClick={()=>this.addFunc()}>Add</button>
                {this.state.doList.map(doList=><ToDoo doList={doList} onPress={()=>this.removeList(doList.num)} />)}
            </div>
        )
    }
}










export default App;