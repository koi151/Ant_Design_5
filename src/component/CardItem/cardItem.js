import { memo } from "react";
import './cardItem.scss';

function CardItem({children}) {
  return (
    <div className="card-item">
      {children}
    </div>
  )
}

export default memo(CardItem);