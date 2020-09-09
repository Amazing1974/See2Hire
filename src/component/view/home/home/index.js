import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../../../widget/searchbox';
import HomeCard from '../../../widget/homeCard';
import { Container, Background, CardContainer } from './styles';
import backgroundImg from '../../../../assets/bg.png';

const Home = (props) => {
  return (
    <>
      <Background source={backgroundImg}/>
      <Container>
        <SearchBox placeholder={"Search Talent"} />
        <CardContainer>
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </CardContainer>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  const {store} = state;
  return store;
};

export default connect(mapStateToProps)(Home);
