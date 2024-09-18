import React, { Suspense, lazy } from 'react';
const HomeSection2 = lazy(() => import('./HomeSectionTwo.jsx'));
const HomeWork = lazy(() => import('./HomeWork.jsx'));
const HomeAtrract = lazy(() => import('./HomeAtrract.jsx'));
const LandingPage = lazy(() => import('./LandingPage.jsx'));
const Loader = lazy(() => import('../../utils/Loader.jsx'));
const HomeMain = () => {
    return (
        <main>

            <Suspense fallback={<Loader className={"home"} />}>

                <LandingPage />
                <HomeSection2 />
                <HomeWork />
                <HomeAtrract />

            </Suspense>

        </main>
    )
}

export default HomeMain