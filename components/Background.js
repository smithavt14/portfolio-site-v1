import { useBackground } from '@hooks/useBackground';
import Stars from './backgrounds/animated/Stars';
// Import desktop components
import TreeDesktop from './backgrounds/desktop/Tree';
import SunDesktop from './backgrounds/desktop/Sun';
import MoonDesktop from './backgrounds/desktop/Moon';
import MountainDesktop from './backgrounds/desktop/Mountain';
import DudesDesktop from './backgrounds/desktop/Dudes';
// Import mobile components
import TreeMobile from './backgrounds/mobile/Tree';
import SunMobile from './backgrounds/mobile/Sun';
import MoonMobile from './backgrounds/mobile/Moon';
import MountainMobile from './backgrounds/mobile/Mountain';
import DudesMobile from './backgrounds/mobile/Dudes';

const ResponsiveComponent = ({ MobileComponent, DesktopComponent }) => (
    <>
        <div className="md:hidden"><MobileComponent /></div>
        <div className="hidden md:block"><DesktopComponent /></div>
    </>
);

const Background = () => {
    const { activeBackground } = useBackground();

    const backgrounds = {
        sun: {
            base: <ResponsiveComponent MobileComponent={SunMobile} DesktopComponent={SunDesktop} />,
        },
        moon: {
            base: <ResponsiveComponent MobileComponent={MoonMobile} DesktopComponent={MoonDesktop} />,
            extraElements: <Stars />
        },
        tree: {
            base: <ResponsiveComponent MobileComponent={TreeMobile} DesktopComponent={TreeDesktop} />,
        },
        mountain: {
            base: <ResponsiveComponent MobileComponent={MountainMobile} DesktopComponent={MountainDesktop} />,
            extraElements: <Stars />
        }
    };

    return (
        <div id="background" className="fixed inset-0 z-0 overflow-hidden">
            {Object.keys(backgrounds).map((bgKey) => (
                <div key={bgKey} className={`absolute inset-0 ${activeBackground === bgKey ? 'block' : 'hidden'}`}>
                    {backgrounds[bgKey].extraElements}
                    <div className="z-0 w-full h-auto absolute bottom-0 right-0">
                        {backgrounds[bgKey].base}
                    </div>
                </div>
            ))}

            {/* Fixed Dudes in Foreground */}
            <div className="absolute bottom-0 w-full h-auto z-30">
                <ResponsiveComponent
                    MobileComponent={DudesMobile}
                    DesktopComponent={DudesDesktop}
                />
            </div>
        </div>
    );
};

export default Background;