import React, { useEffect } from 'react';

interface HotmartWidgetProps {
  id?: string;
}

export function HotmartWidget({ id = 'hotmart-sales-funnel' }: HotmartWidgetProps) {
  useEffect(() => {
    const existingScript = document.getElementById('hotmart-checkout-script');
    
    const mountWidget = () => {
      if ((window as any).checkoutElements) {
        try {
          (window as any).checkoutElements.init('salesFunnel').mount(`#${id}`);
        } catch (e) {
          console.error('Error mounting Hotmart sales funnel', e);
        }
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'hotmart-checkout-script';
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.async = true;
      script.onload = () => {
        mountWidget();
      };
      document.body.appendChild(script);
    } else {
      mountWidget();
    }
  }, [id]);

  return (
    <div className="w-full my-4">
      {/* <!-- HOTMART - Sales Funnel Widget --> */}
      {/* <!--- sales funnel container ---> */}
      <div id={id}></div>
      {/* <!-- HOTMART - Sales Funnel Widget --> */}
    </div>
  );
}

