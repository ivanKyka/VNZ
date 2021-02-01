import React, {Component} from 'react';
import '../index.css';
import {observer, Provider} from "mobx-react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "../components/Header";
import News from "../components/News";
import InstitutionList from "../components/InstitutionList";
import {asv, hnups, kvl, vao, viti, vlch, vml, zhvi, kampocol, lvivcol, sergXn, viticol} from "../consts/vvnzInfo";
import Institution from "../components/Institution";
import QuestionForm from "../components/Question";
import styled from 'styled-components';
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsStore from "../stores/NewsStore";
import QuestionsList from "../components/QuestionsList";
import Info from "../components/Info";
import bg from '../../resources/bg.jpg'

const vvnzList = {
    viti,
    hnups,
    vao,
    zhvi,
    asv
};

const lyceumsList = {
    kvl,
    vlch,
    vml
}

const collegeList = {
    kampocol,
    lvivcol,
    sergXn,
    viticol
}

const stores = {
    newsStore: new NewsStore()
}

@observer
class App extends Component {


    render() {
        return (<Provider {...stores}>
                <Router>
                    <Background />
                    <Container>
                        <Header />
                        <Content>
                            <Route exact path={'/'} component={MainPage} />
                            <Route exact path={'/news'} component={News} />
                            <Route exact path={'/info'} component={Info} />
                            <Route exact path={'/vvnz'} render={() => <InstitutionList infoList={vvnzList}/>} />
                            <Route exact path={'/lyceum'} render={() => <InstitutionList infoList={lyceumsList}/>} />
                            <Route exact path={'/college'} render={() => <InstitutionList infoList={collegeList}/>} />
                            <Route path={'/institution/:name'} component={Institution} />
                            <Route path={'/question'} component={QuestionForm} />
                            <Route path={'/questions'} component={QuestionsList} />
                        </Content>
                        <Footer />
                    </Container>
                </Router>
            </Provider>
        );

    }

}

export default App;

const Container = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  object-fit: contain;
  background: url(${bg});
  background-size: 100vw 100vh ;
  filter: blur(3px);
  opacity: 0.35;
  position: fixed;
  z-index: 0;
`;

const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 25px;
`;