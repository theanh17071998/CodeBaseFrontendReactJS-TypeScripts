import { Typography } from '@material-ui/core';
import 'moment/locale/vi';
import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Tour, { ReactourStep } from 'reactour';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ROUTES } from '../configs/routes';
import { openGuide } from '../modules/auth/redux/authReducer';
import { goToAction } from '../modules/common/redux/reducer';
import { AppState } from '../redux/reducers';

interface Props {}

const Guide: React.FC<Props> = props => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const location = useLocation();
  const open = useSelector((state: AppState) => state.auth.openGuide);
  const [tick, setTick] = React.useState(true);

  const [index, ] = React.useState(0);
  const steps = React.useMemo((): ReactourStep[] => {
    return [
      {
        selector: '[data-tour="step-1"]',
        content: ({ goTo, inDOM }) => {
          return (
            <div>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                <FormattedHTMLMessage id="guide.step.1" />
              </Typography>
            </div>
          );
        },
        action: node => {
          // by using this, focus trap is temporary disabled
          node?.addEventListener('click', () => {
            // setIndex(1);
          });
        },
        stepInteraction: false,
        position: 'right',
      },
      {
        selector: '[data-tour="step-2"]',
        content: ({ goTo, inDOM }) => {
          return (
            <div>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                <FormattedHTMLMessage id="guide.step.2" />
              </Typography>
            </div>
          );
        },
        position: 'right',
        // you could do something like:
        // position: [160, 250],
        action: node => {},
        style: {
          // backgroundColor: '#bada55',
        },
        // Disable interaction for this specific step.
        // Could be enabled passing `true`
        // when `disableInteraction` prop is present in Tour
        stepInteraction: false,
        // Text read to screen reader software for this step's navigation dot
        // navDotAriaLabel: 'Go to step 4',
      },
      {
        selector: '[data-tour="step-3"]',
        content: ({ goTo, inDOM }) => {
          return (
            <div>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                <FormattedHTMLMessage id="guide.step.3" />
              </Typography>
            </div>
          );
        },
        action: node => {
          // by using this, focus trap is temporary disabled
        },
        position: 'right',
        stepInteraction: false,
      },
      {
        selector: '[data-tour="step-4"]',
        content: ({ goTo, inDOM }) => {
          return (
            <div>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                <FormattedHTMLMessage id="guide.step.4" />
              </Typography>
            </div>
          );
        },
        action: node => {
          // by using this, focus trap is temporary disabled
        },
        position: 'right',
        stepInteraction: false,
      },
      {
        selector: '[data-tour="step-5"]',
        content: ({ goTo, inDOM }) => {
          return (
            <div>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                <FormattedHTMLMessage id="guide.step.5" />
              </Typography>
            </div>
          );
        },
        action: node => {
          // by using this, focus trap is temporary disabled
        },
        position: 'right',
        stepInteraction: false,
      },
      {
        selector: '[data-tour="step-6"]',
        content: ({ goTo, inDOM }) => {
          return (
            <div>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                <FormattedHTMLMessage id="guide.step.6" />
              </Typography>
            </div>
          );
        },
        action: node => {
          // by using this, focus trap is temporary disabled
        },
        position: 'right',
        stepInteraction: false,
      },
      {
        selector: '[data-tour="step-7"]',
        content: ({ goTo, inDOM }) => {
          return (
            <div>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                <FormattedHTMLMessage id="guide.step.7" />
              </Typography>
            </div>
          );
        },
        action: node => {
          // by using this, focus trap is temporary disabled
        },
        position: 'right',
        stepInteraction: false,
      },
      // ...
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  React.useEffect(() => {
    if (open) {
      dispatch(goToAction({ pathname: ROUTES.generalSetting.position }));
    }
  }, [dispatch, open]);

  React.useEffect(() => {
    setTimeout(() => {
      setTick(one => !one);
    }, 0);
  }, [location.pathname]);

  return (
    <>
      <Tour
        update={`${tick}`}
        steps={steps}
        isOpen={open}
        onRequestClose={() => {
          dispatch(openGuide(false));
        }}
        onBeforeClose={target => (document.body.style.overflowY = 'auto')}
        onAfterOpen={target => (document.body.style.overflowY = 'hidden')}
        // showButtons={false}
        // showNavigation={false}
        // showCloseButton={false}
        // goToStep={index}
        showNumber={false}
        showNavigationNumber={false}
        updateDelay={1000}
        startAt={index}
      />
    </>
  );
};

export default Guide;
