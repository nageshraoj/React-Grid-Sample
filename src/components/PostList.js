import React, { Component } from "react";
import {connect} from "react-redux";
import {FetchPost} from "../actions";
import UserCardView from "./UserCardView";

class PostList extends Component {

    state={clicked:false,
            userid:null};

    componentDidMount(){
        this.props.FetchPost();
    }

    // ShowPost=()=>{
    //     return (
    //     this.props.posts.map(eachPost=>{
    //         return( 
    //             <div className="row">
             
    //                 <div className="two wide column">
    //                     <i className="large middle aligned icon user"/>        
    //                 </div>
    //                 <div className="eight wide column">
    //                     <p>{eachPost.body}</p>
    //                  </div>
    //                 <div className="three wide column">
    //                         <p>{eachPost.title}</p>
    //                     </div>
         
    //             </div>
    //     );
    //   }))
    // }

    ShowUserDetails = (e,value)=>{
        this.setState({clicked:true});
        this.setState({userid:value})
    }

    render(){
        return(
            <div onFocus={()=>this.setState({clicked:false})}> 
                {/* <div className="ui  celled grid">
                    {this.ShowPost()}
                </div> */}
                {/* List of Posts */}
                <table className="ui celled  padded table" style={{width:"800px"}}>
                    <thead>
                        <tr>
                            <th className="ui center aligned header">id</th>
                            <th className="ui center aligned header">User</th>
                            <th className="ui center aligned header">Title</th>
                            <th className="ui center aligned header">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                {
                    this.props.posts?
                    this.props.posts.map(eachpost=>
                        
                            <tr key={eachpost.id}>
                                 <td>{eachpost.id}</td>
                                 <td>
                                 <div onClick={(e)=>this.ShowUserDetails(e,eachpost.userId)} 
                                        className="ui vertical animated button" tabindex="0">
                                        <div className="hidden content selectable">Details</div>
                                        <div className="visible content ">
                                        <i className="large middle aligned icon user"/>
                                        </div>
                                 </div> 
                                </td>
                                <td>{eachpost.title}</td>
                                <td>{eachpost.body}</td>
                            </tr>
                      
                        ) :null
                }
                        {
                        this.state.clicked ? 
                        <div>
                            <UserCardView userid={this.state.userid} /> 
                        </div>
                             : null
                           
                        }

                </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post
    }
}

export default  connect (mapStateToProps,{FetchPost})(PostList);