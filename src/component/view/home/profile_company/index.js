import React from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';

import ProfileAvatar from '../../../widget/profile_avatar';
import ProfileCard from '../../../widget/profile_card';
import {
    Main,
    Container,
    VideoPlayer,
    TextView,
    SkillContainer,
    Skill
} from './styles';

const Profile = (props) => {
    return (
        <Main>
            <Container>
                <ProfileAvatar 
                    path={props.avatar_path} 
                    name={props.first_name + ' ' + props.last_name}
                    location={props.address_city+', '+props.address_state}
                    onPress={()=>{props.navigation.navigate('EditPhoto')}} 
                />
                <ProfileCard onPress={()=>{props.navigation.navigate('EditVideo')}}>
                    <VideoPlayer
                        source={props.video_path=='' ? require('../../../../assets/sample.mp4') : props.video_path}
                        controls={true}
                        paused={true}
                        resizeMode='cover'
                    />
                </ProfileCard>
                <ProfileCard onPress={()=>{props.navigation.navigate('EditOverview')}}>
                    <TextView fontSize={18} color={'#000'}>Overview</TextView>
                    <TextView fontSize={14} color={'#000'} style={{marginTop: 20}}>{props.overview}</TextView>
                </ProfileCard>
                <ProfileCard onPress={()=>{props.navigation.navigate('EditSkills')}}>
                    <TextView fontSize={18} color={'#000'}>Profession {'&'} Skills</TextView>
                    <TextView fontSize={14} color={'#000'} style={{marginTop: 20}}>{
                        props.professions.map((item) => item + ', ')
                    }</TextView>
                    <SkillContainer>
                        {
                            props.skills.map((item) => {
                                return <Skill>{item}</Skill>
                            })
                        }
                    </SkillContainer>
                </ProfileCard>
                <ProfileCard onPress={()=>{props.navigation.navigate('EditExperience')}}>
                    <TextView fontSize={18} color={'#000'}>Experience</TextView>
                    {
                        props.experiences.map(item => {
                            return (
                                <>
                                    <TextView fontSize={14} color={'#000'} style={{marginTop: 20, fontWeight: 'bold'}}>{item.company + ' - ' + item.from + ' - ' + item.to}</TextView>
                                    <TextView fontSize={14} color={'#000'} style={{marginTop: 10}}>{item.position}</TextView>
                                </>
                            );
                        })
                    }
                </ProfileCard>
            </Container>
        </Main>
    );
};

const mapStateToProps = (state) => {
    const {store} = state;
    return store;
};

export default connect(mapStateToProps)(Profile);