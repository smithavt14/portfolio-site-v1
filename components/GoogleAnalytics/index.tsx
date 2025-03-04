import React from 'react';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GA_TRACKING_ID = 'G-L03HCBHKHQ';

declare global {
    interface Window {
        gtag: (command: string, target: string, config?: object) => void;
        dataLayer: any[];
    }
}

export default function GoogleAnalytics() {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            window.gtag('config', GA_TRACKING_ID, {
                page_path: url,
            });
        };
        
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                `}
            </Script>
        </>
    );
} 