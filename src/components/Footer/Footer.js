import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

import {SocialIcons} from '../Header/HeaderStyles';
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href='mailto:gashuk2002@yandex.ru'>gashuk2002@yandex.ru</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Innovating one project at a time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href='https://github.com/Damfler'>
                        <AiFillGithub size='3rem'/>
                    </SocialIcons>
                    <SocialIcons href='https://www.instagram.com/damfler/'>
                        <AiFillInstagram size='3rem'/>
                    </SocialIcons>
                    <SocialIcons href='https://www.youtube.com/channel/UCWIbaZ6Nt-pRcRie3g8SqZw'>
                        <AiFillYoutube size='3rem'/>
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
