import React from 'react';
import Home from './facebook/Home/Home';
import BookMarks from './facebook/BookMarks/BookMarks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Friends from './facebook/Friends/Friends';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/bookmarks' component={BookMarks} />
                <Route path='/friends' component={Friends}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
