import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container mb-0">
        <div className={innerClasses}>
          <div className="blackit">
          <h1 className="center-content blackit mt-0"> Meet the Team </h1>
          <p className="center-content" style={{marginLeft: '18vw', marginRight: '18vw'}}> The Blue Ticks NFT team brings oppurtunity to the table allowing anyone anywhere to potentially get access into  top-tier collections. Seasond NFT traders and collectors, alpha can be found at all corners of the Blue Ticks NFT community allowing community members to grow their knowledge and portfolios.</p>
          </div>
          <div className={tilesClasses} style={{padding: 10}}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/teamimage1.jpg')}
                alt="Hero"
                width={896}
                height={504} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">BoredGeordie</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-name text-color-high">Founder</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://twitter.com/BoredGeordie">bored geordie#9036</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/teamimage2.jpg')}
                alt="Hero"
                width={896}
                height={504} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">ARZ105</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-name text-color-high">Team Member</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://twitter.com/ARZ105_">ARZ105#1491</a>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/teamimage3.jpg')}
                alt="Hero"
                width={896}
                height={504} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Jaysung</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-name text-color-high">Team Member</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://twitter.com/JaysungNFT">Jesus#2765</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/teamimage4.jpg')}
                alt="Hero"
                width={896}
                height={504} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Swanny</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-name text-color-high">Team Member</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://twitter.com/Swannyy_x">Swanny#6557</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;