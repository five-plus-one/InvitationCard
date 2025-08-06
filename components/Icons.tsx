import React from 'react';

type IconProps = {
  className?: string;
};

export const ClockIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const CornerDecoration: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0H0V100C25 75 40 40 60 20C75 5 90 0 100 0Z" fill="currentColor" fillOpacity="0.5"/>
        <path d="M80 0H0V80C20 60 30 30 50 15C60 5 70 0 80 0Z" fill="currentColor"/>
    </svg>
);


export const SealStamp: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="currentColor"/>
        <text
            x="50"
            y="57"
            fontFamily="'InvitationFont', serif"
            fontSize="50"
            fill="#FDE68A"
            textAnchor="middle"
            fontWeight="900"
            stroke="#FDE68A"
            strokeWidth="1"
        >
            喜
        </text>
    </svg>
);

export const NavigationIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);