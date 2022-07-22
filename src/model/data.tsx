import React from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { SiDevDotTo } from 'react-icons/si';
import { USERNAME_KEY } from '../constants/params';
import { NavigationItems } from '../components/SocialMedia/types';

export const socialMedia: NavigationItems = [
  {
    icon: <AiFillGithub />,
    url: `https://github.com/${USERNAME_KEY}`,
  },
  {
    icon: <AiFillFacebook />,
    url: `https://www.facebook.com/shubham.bhusal.125`,
  },
];
