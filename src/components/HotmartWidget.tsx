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

  const handleClick = () => {
    if (id !== 'hotmart-sales-funnel') {
      const el = document.getElementById('acceso-inmediato');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full my-4 flex flex-col items-center cursor-pointer" onClick={handleClick}>
      {/* <!-- HOTMART - Sales Funnel Widget --> */}
      {/* <!--- sales funnel container ---> */}
      <div id={id} className="w-full max-w-lg">
        <div className="w-full py-4 px-6 rounded-2xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold text-base md:text-lg shadow-2xl transition-all flex items-center justify-center gap-2 text-center">
          <span>¡SI! QUIERO LA APP, AÑADIR A MI PEDIDO</span>
        </div>
      </div>
      {/* <!-- HOTMART - Sales Funnel Widget --> */}
    </div>
  );
}

