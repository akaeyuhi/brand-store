import React from 'react';
import { HomeBanner } from '../components/HomeBanner';
import { OfferBanner } from '../components/OfferBanner';
import FeaturedItems from '../components/FeaturedItems';
import FeaturesBanner from '../components/FeaturesBanner';
import Subscribe from '../components/Subscribe';

export default function HomePage() {
  return <>
    <HomeBanner />
    <OfferBanner />
    <FeaturedItems />
    <FeaturesBanner />
    <Subscribe />
  </>;
}
