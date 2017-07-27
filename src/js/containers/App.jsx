import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import ProjectsPage from './ProjectsPage'
import Footer from '../components/Footer'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/blog' component={BlogPage} />
                <Route path='/projects' component={ProjectsPage} />
            </Switch>
        </main>
    )
}

class App extends React.Component {
    render() {
        return (
            <div id='root'>
                <Navbar />
                <Main />
                <Footer />
            </div>
        )
    }
}


export default App
