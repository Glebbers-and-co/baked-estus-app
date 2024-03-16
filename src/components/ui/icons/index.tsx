import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

type SvgComponent = VariableFC<'svg'>;

export const Bookmarks: SvgComponent = ({ ...props }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M24 3H12C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5V7H8C7.46957 7 6.96086 7.21071 6.58579 7.58579C6.21071 7.96086 6 8.46957 6 9V28C6 28.1837 6.05061 28.3639 6.1463 28.5208C6.24199 28.6776 6.37904 28.8051 6.54241 28.8892C6.70579 28.9733 6.88917 29.0107 7.07243 28.9974C7.25569 28.9841 7.43174 28.9205 7.58125 28.8137L14 24.2288L20.42 28.8137C20.5695 28.9202 20.7454 28.9835 20.9285 28.9966C21.1116 29.0097 21.2947 28.9722 21.4579 28.8882C21.621 28.8041 21.7579 28.6768 21.8536 28.5201C21.9492 28.3635 21.9998 28.1835 22 28V23.0863L24.4188 24.8137C24.5683 24.9205 24.7443 24.9841 24.9276 24.9974C25.1108 25.0107 25.2942 24.9733 25.4576 24.8892C25.621 24.8051 25.758 24.6776 25.8537 24.5208C25.9494 24.3639 26 24.1837 26 24V5C26 4.46957 25.7893 3.96086 25.4142 3.58579C25.0391 3.21071 24.5304 3 24 3ZM20 26.0575L14.58 22.1825C14.4104 22.0614 14.2072 21.9962 13.9987 21.9962C13.7903 21.9962 13.5871 22.0614 13.4175 22.1825L8 26.0562V9H20V26.0575ZM24 22.0575L22 20.625V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H12V5H24V22.0575Z'
        fill='#232323'
        className={cn('fill-current')}
      />
    </svg>
  );
};

export const History: SvgComponent = ({ ...props }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17 10V15.4338L21.515 18.1425C21.7424 18.2791 21.9063 18.5005 21.9705 18.7579C22.0347 19.0152 21.9941 19.2876 21.8575 19.515C21.7209 19.7425 21.4996 19.9063 21.2422 19.9705C20.9848 20.0348 20.7124 19.9941 20.485 19.8575L15.485 16.8575C15.337 16.7686 15.2146 16.6429 15.1296 16.4927C15.0446 16.3424 14.9999 16.1727 15 16V10C15 9.73482 15.1054 9.48047 15.2929 9.29293C15.4804 9.10539 15.7348 9.00004 16 9.00004C16.2652 9.00004 16.5196 9.10539 16.7071 9.29293C16.8946 9.48047 17 9.73482 17 10ZM16 4.00004C14.4225 3.99611 12.8599 4.30508 11.4026 4.90907C9.94527 5.51306 8.62222 6.40008 7.51 7.51879C6.60125 8.43879 5.79375 9.32379 5 10.25V8.00004C5 7.73482 4.89464 7.48047 4.70711 7.29293C4.51957 7.10539 4.26522 7.00004 4 7.00004C3.73478 7.00004 3.48043 7.10539 3.29289 7.29293C3.10536 7.48047 3 7.73482 3 8.00004V13C3 13.2653 3.10536 13.5196 3.29289 13.7071C3.48043 13.8947 3.73478 14 4 14H9C9.26522 14 9.51957 13.8947 9.70711 13.7071C9.89464 13.5196 10 13.2653 10 13C10 12.7348 9.89464 12.4805 9.70711 12.2929C9.51957 12.1054 9.26522 12 9 12H6.125C7.01875 10.9475 7.90875 9.95629 8.92375 8.92879C10.3136 7.53898 12.0821 6.58955 14.0085 6.19913C15.9348 5.80872 17.9335 5.99463 19.7547 6.73364C21.576 7.47266 23.1391 8.73199 24.2487 10.3543C25.3584 11.9766 25.9653 13.8899 25.9938 15.8552C26.0222 17.8205 25.4708 19.7506 24.4086 21.4043C23.3463 23.0581 21.8203 24.3621 20.0212 25.1535C18.2221 25.9448 16.2296 26.1885 14.2928 25.854C12.356 25.5194 10.5607 24.6216 9.13125 23.2725C9.03571 23.1823 8.92333 23.1117 8.80052 23.0648C8.6777 23.018 8.54686 22.9958 8.41547 22.9995C8.28407 23.0032 8.15469 23.0328 8.03472 23.0865C7.91475 23.1402 7.80653 23.217 7.71625 23.3125C7.62597 23.4081 7.55538 23.5205 7.50853 23.6433C7.46168 23.7661 7.43948 23.8969 7.44319 24.0283C7.44691 24.1597 7.47647 24.2891 7.53018 24.4091C7.58389 24.529 7.66071 24.6373 7.75625 24.7275C9.18056 26.0716 10.9122 27.0467 12.8 27.5677C14.6878 28.0886 16.6744 28.1396 18.5865 27.7162C20.4986 27.2929 22.278 26.4079 23.7694 25.1387C25.2608 23.8695 26.4189 22.2545 27.1427 20.4348C27.8664 18.6151 28.1338 16.6459 27.9215 14.699C27.7091 12.7522 27.0236 10.8869 25.9246 9.26595C24.8256 7.64501 23.3466 6.31766 21.6166 5.39977C19.8867 4.48187 17.9584 4.00131 16 4.00004Z'
        fill='#232323'
        className={cn('fill-current')}
      />
    </svg>
  );
};

export const Cart: SvgComponent = ({ ...props }) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17 15V22C17 22.2652 16.8946 22.5196 16.7071 22.7071C16.5196 22.8946 16.2652 23 16 23C15.7348 23 15.4804 22.8946 15.2929 22.7071C15.1053 22.5196 15 22.2652 15 22V15C15 14.7348 15.1053 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14C16.2652 14 16.5196 14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15ZM29.9825 12.2637L28.25 25.265C28.1857 25.7455 27.9492 26.1863 27.5843 26.5054C27.2194 26.8246 26.751 27.0003 26.2662 27H5.73373C5.24896 27.0003 4.78057 26.8246 4.41567 26.5054C4.05078 26.1863 3.81421 25.7455 3.74998 25.265L2.01623 12.265C1.97845 11.9824 2.00154 11.6949 2.08395 11.422C2.16636 11.149 2.30619 10.8968 2.49406 10.6823C2.68193 10.4678 2.91349 10.2959 3.17322 10.1783C3.43295 10.0606 3.71484 9.9998 3.99998 10H8.54623L15.25 2.34125C15.3438 2.23484 15.4592 2.14962 15.5885 2.09125C15.7179 2.03287 15.8581 2.00269 16 2.00269C16.1419 2.00269 16.2821 2.03287 16.4114 2.09125C16.5407 2.14962 16.6561 2.23484 16.75 2.34125L23.4537 10H28C28.2848 10.0002 28.5663 10.0612 28.8256 10.1789C29.0849 10.2967 29.3161 10.4685 29.5037 10.6828C29.6913 10.8971 29.8309 11.149 29.9133 11.4217C29.9956 11.6943 30.0188 11.9814 29.9812 12.2637H29.9825ZM11.2037 10H20.7962L16 4.51875L11.2037 10ZM28 12H3.99998L5.73373 25H26.2662L28 12ZM21.605 14.9L20.905 21.9C20.8911 22.0311 20.9034 22.1636 20.9409 22.2899C20.9785 22.4162 21.0406 22.5339 21.1238 22.6361C21.2069 22.7383 21.3095 22.8231 21.4256 22.8855C21.5416 22.948 21.6688 22.9869 21.8 23C21.8337 23.0018 21.8675 23.0018 21.9012 23C22.1489 22.9997 22.3877 22.9075 22.5713 22.7412C22.7549 22.5749 22.8702 22.3464 22.895 22.1L23.595 15.1C23.6215 14.8361 23.5421 14.5725 23.3743 14.3671C23.2064 14.1618 22.9639 14.0315 22.7 14.005C22.4361 13.9785 22.1725 14.0579 21.9671 14.2257C21.7618 14.3936 21.6315 14.6361 21.605 14.9ZM10.395 14.9C10.3685 14.6361 10.2382 14.3936 10.0328 14.2257C9.82749 14.0579 9.56387 13.9785 9.29998 14.005C9.03609 14.0315 8.79354 14.1618 8.6257 14.3671C8.45785 14.5725 8.37846 14.8361 8.40498 15.1L9.10498 22.1C9.12985 22.3475 9.24609 22.5769 9.431 22.7433C9.61591 22.9097 9.85621 23.0012 10.105 23C10.1387 23.0018 10.1725 23.0018 10.2062 23C10.3369 22.9869 10.4637 22.9481 10.5794 22.886C10.6951 22.8239 10.7974 22.7395 10.8805 22.6379C10.9636 22.5362 11.0259 22.4191 11.0638 22.2934C11.1016 22.1676 11.1144 22.0357 11.1012 21.905L10.395 14.9Z'
        fill='#232323'
        className={cn('fill-current')}
      />
    </svg>
  );
};