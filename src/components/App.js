import React from "react";
import {Router, Route} from "react-router-dom";
import UserList from "./users/UserList";
import UserCreate from "./users/UserCreate";
import UserEdit from "./users/UserEdit";
import UserDelete from "./users/UserDelete";
import history from "../history";
import Header from "./Header";

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={UserList}/>
                        <Route path="/users/new" exact component={UserCreate}/>
                        <Route path="/users/edit/:id" exact component={UserEdit}/>
                        <Route path="/users/delete/:id" exact component={UserDelete}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;