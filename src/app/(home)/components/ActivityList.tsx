"use client";

import { useStore } from 'zustand';
import MobileActivityCard from './MobileActivityCard';
import ActivityCard from './ActivityCard';
import mobileStore from '@/stores/mobileStore';
import { useEffect } from 'react';

interface Activity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

interface ActivityCardProps {
  activity: Activity[];
}

export default function ActivityList({ activity }: ActivityCardProps) {
    const isMobile = mobileStore((state) => state.isMobile);
    const checkMobile = mobileStore((state) => state.checkMobile);
    
    useEffect(() => {
      checkMobile();
    }, [checkMobile]);

  return (
    isMobile ? <MobileActivityCard activity={activity}/> : <ActivityCard activity={activity}/>
  );
}
