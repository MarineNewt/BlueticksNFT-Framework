import React from 'react';
import classNames from 'classnames';

const Informative = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
  }) => {
  
    const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );
  
    const innerClasses = classNames(
      'features-tiles-inner section-inner pt-0',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );
  
    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses} style={{marginLeft: '18vw', marginRight: '18vw'}}>
            <br></br>
            <h2 className="center-content mt-0 blackit"> How BlueTicksNFT works:</h2>
            <p className=" mt-0 blackit mb-1">When you mint one of our nft's you get the chance to mint a 1/1! <br></br><br></br> There will be three 1/1s in total: <br></br><br></br> <span style={{color: '#FFD700'}}><b>Gold:</b></span> If you mint the gold NFT you will be the proud owner of a top tier NFT! <br></br><br></br> <span style={{color: '#C0C0C0'}}><b>Silver:</b></span> If you mint the silver NFT you will be the proud owner of a lower tiered blue chip. <br></br><br></br> <span style={{color: '#CD7F32'}}><b>Bronze:</b></span> If you mint the bronze NFT you will be the winner of 25 free mints for our next NFT drop. Giving you a great chance at winning your own blue chip NFT. </p>
            <div className="center-content animateit"><p></p><p>Is Luck</p><p> on your side?</p></div>
          </div>
        </div>
      </section>
    );
  }

export default Informative;