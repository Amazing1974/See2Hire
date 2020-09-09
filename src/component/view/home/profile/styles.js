import styled from 'styled-components';
import Video from 'react-native-video';
import { Dimensions } from 'react-native';

import Text from '../../../widget/text';

const width = Dimensions.get('window').width * 0.9 - 30;
const height = width / 16 * 9;

export const Main = styled.ScrollView`
    width: 100%;
    height: 100%;
`;

export const Container = styled.View`
    width: 100%;
    paddingTop: 60px;
    paddingBottom: 70px;
    alignSelf: center;
    alignItems: center;
`;

export const VideoPlayer = styled(Video)`
    height: ${height};
`;

export const TextView = styled(Text)`
    fontSize: ${props => props.fontSize ? props.fontSize : 14};
    color: ${props => props.color ? props.color : '#000'};
    flexShrink: 1;
`;

export const SkillContainer = styled.View`
    flexDirection: row;
    flexWrap: wrap;
`;

export const Skill = styled.Text`
    background-color: #F1F1F1;
    border-radius: 10px;
    padding: 5px;
    marginHorizontal: 15px;
    marginVertical: 5px;
    overflow: hidden;
    fontSize: 14px;
    color: #000;
`;