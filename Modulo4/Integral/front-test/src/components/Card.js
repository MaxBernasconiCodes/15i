import React from 'react'

export const Card = (props) => {
    return (
        <div class="card-container">
          <div id={'card' + props.id}>
            <div className="front face">
              <img src={props.img}/>
            </div>
            <div className="back face">
                <img src={'https://picsum.photos/200'} />
            </div>
          </div>
        </div>
    )
}