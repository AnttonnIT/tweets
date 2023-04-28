import styled from '@emotion/styled';
import cardImage from 'img/cardImage.png';

export const Card = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const CardTop = styled.div`
  position: relative;

  height: 222px;
  padding: 28px 36px 18px 36px;

  &::after {
    content: '';
    display: block;

    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 8px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const CardTopWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${cardImage});
  background-repeat: no-repeat;
`;

export const CardLogo = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 76px;
  height: 22px;

  background: rgba(255, 255, 255, 0.3);
`;
export const CardBottom = styled.div`
  padding: 62px 36px 36px 36px;
`;

export const CardUserPhotoWrapper = styled.div`
  position: absolute;
  top: 214px;
  right: 50%;

  width: 80px;
  height: 80px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  transform: translate(50%, -50%);

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const CardUserPhoto = styled.img`
  width: 62px;
  height: 62px;

  border-radius: 50%;
`;

export const TweetInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;

  text-align: center;
`;
