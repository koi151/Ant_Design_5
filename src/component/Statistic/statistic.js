import { memo } from 'react';
import './statistic.scss';

function Statistic({icon, value, label, color=''}) {
  return (
    <>
      <div className='statistic'>
        <div className={"statistic__icon " +  (color && `statistic__icon--${color}`)}>
          {icon}
        </div>
        <div className='statistic__info'>
          <div className='statistic__info--value'>
            {value}
          </div>
          <div className='statistic__info--label'>
            {label}
          </div>
        </div>  
      </div>
    </>
  )
}

export default memo(Statistic);