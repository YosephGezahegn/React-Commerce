import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  Stack,
  Slider,
  PagerIndicator,
  List,
  RatingBar,
} from "components";

const HomepageV2Page = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/homepagev3");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-poppins items-center mx-[auto] w-[100%]"
        onClick={handleNavigate8}
      >
        <header className="w-[100%]">
          <Column className="bg-white_A700 items-center w-[100%]">
            <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[85%]">
              <Row className="items-center w-[7%]">
                <Img
                  src="images/img_group19_1.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] w-[35%]"
                  alt="Group19"
                />
                <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Elliye{" "}
                </Text>
              </Row>
              <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] ml-[411px] w-[36%]">
                <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 hover:text-gray_800 w-[auto]">
                  Search here
                </Text>
                <Img
                  src="images/img_search.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="search"
                />
              </Row>
              <Img
                src="images/img_icon_5.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] w-[5%]"
                alt="icon"
              />
              <Button
                className="font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center w-[7%]"
                size="md"
              >
                Login
              </Button>
            </Row>
            <Line className="bg-gray_50 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[85%]" />
            <Row className="items-center justify-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] my-[23px] w-[41%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Categories
              </Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                New Arrival
              </Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Features
              </Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Collections
              </Text>
              <Text className="font-normal lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Discount
              </Text>
            </Row>
          </Column>
        </header>
        <Stack className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] w-[100%]">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={1}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="absolute inset-[0] w-[100%]"
            items={[...Array(6)].map(() => (
              <>
                <Stack className="lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px]">
                  <Img
                    src="images/img_image1.png"
                    className="absolute lg:h-[438px] xl:h-[501px] 2xl:h-[563px] 3xl:h-[676px] h-[750px] inset-[0] w-[100%]"
                    alt="image1"
                  />
                  <Column className="absolute bg-black_900_68 inset-[0] justify-end w-[100%]">
                    <Column className="3xl:mt-[106px] mt-[118px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[42%]">
                      <Text className="font-medium font-poppins lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                        50% Off Limited Offer
                      </Text>
                      <Text className="font-bold font-playfairdisplay lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] 3xl:text-[115px] text-[128px] lg:text-[74px] xl:text-[85px] 2xl:text-[96px] text-white_A700 w-[auto]">
                        Summer <br />
                        Collection
                      </Text>
                    </Column>
                    <Row className="bg-gray_800 items-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] mr-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[13%]">
                      <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                        Shop Now
                      </Text>
                      <Img
                        src="images/img_arrow_2.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Column className="items-end lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] w-[100%]">
                      <Stack className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] overflow-auto w-[56%]">
                        <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] right-[0] w-[100%]">
                          <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                            <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                              <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                                <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                                  <Stack className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] w-[100%]">
                                    <div className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-[0] shadow-bs w-[100%]"></div>
                                    <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[0] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                      <Img
                                        src="images/img_sweater_1.svg"
                                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                        alt="Sweater"
                                      />
                                      <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                                        Jacket
                                      </Text>
                                    </Column>
                                  </Stack>
                                  <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[14%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                    <Img
                                      src="images/img_tshirt_1.svg"
                                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                      alt="Tshirt"
                                    />
                                    <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                                      Shirt
                                    </Text>
                                  </Column>
                                </Stack>
                                <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center left-[29%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                  <Img
                                    src="images/img_pants_1.svg"
                                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                    alt="Pants"
                                  />
                                  <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                                    Pants
                                  </Text>
                                </Column>
                              </Stack>
                              <Column className="absolute bg-gray_800 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-x-[43%] inset-y-[0] items-center justify-center xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                                <Img
                                  src="images/img_boot_1.svg"
                                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                  alt="Boot"
                                />
                                <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                                  Shoes
                                </Text>
                              </Column>
                            </Stack>
                            <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[29%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                              <Img
                                src="images/img_dress_1.svg"
                                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                                alt="Dress"
                              />
                              <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                                Dress
                              </Text>
                            </Column>
                          </Stack>
                          <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[14%] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                            <Img
                              src="images/img_belt_1.svg"
                              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                              alt="Belt"
                            />
                            <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                              Accesories
                            </Text>
                          </Column>
                        </Stack>
                        <Column className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center justify-center right-[0] xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                          <Img
                            src="images/img_skirt.svg"
                            className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                            alt="Skirt"
                          />
                          <Text className="font-normal lg:mb-[17px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] mb-[30px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                            Skirt
                          </Text>
                        </Column>
                      </Stack>
                    </Column>
                  </Column>
                </Stack>
              </>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 relative" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 relative"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[4%] h-[12px] left-[8%] w-[max-content]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-gray_800 relative"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-radius50 w-[12px] h-[12px] bg-white_A700 relative"
            sliderRef={sliderRef}
            selectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
            unselectedWrapperCss="2xl:mx-[3px] 3xl:mx-[3px] inline-block lg:mx-[2px] mx-[4.00px] xl:mx-[2px]"
          />
        </Stack>
        <Img
          src="images/img_brands.svg"
          className="h-[100px] lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[56%]"
          alt="brands"
        />
        <Row className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]">
          <Column className="items-center w-[49%]">
            <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]">
              <Img
                src="images/img_placeholder_23.png"
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] w-[100%]"
                alt="placeholder"
              />
              <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[28%]">
                <span className="text-white_A700 font-poppins">
                  lbl_casual2
                </span>
                <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                  lbl_collection
                </span>
              </Text>
            </Stack>
            <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Img
                src="images/img_placeholder_24.png"
                className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] w-[100%]"
                alt="placeholder"
              />
              <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[11%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[28%]">
                <span className="text-gray_800 font-poppins">lbl_summer</span>
                <span className="text-gray_800 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                  lbl_collection
                </span>
              </Text>
            </Stack>
          </Column>
          <Stack className="lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]">
            <Img
              src="images/img_placeholder_25.png"
              className="absolute lg:h-[486px] xl:h-[556px] 2xl:h-[625px] 3xl:h-[750px] h-[832px] inset-[0] w-[100%]"
              alt="placeholder"
            />
            <Text className="absolute font-normal leading-[normal] left-[10%] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 top-[37%] w-[28%]">
              <span className="text-white_A700 font-poppins">lbl_big_vibe</span>
              <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                lbl_collection
              </span>
            </Text>
          </Stack>
        </Row>
        <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
              Featured
            </Text>
            <Row className="items-center justify-between w-[7%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                View all
              </Text>
              <Img
                src="images/img_arrow_3.svg"
                className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] w-[29%]"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]">
            <Stack className="lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] w-[32%]">
              <Img
                src="images/img_placeholder_26.png"
                className="absolute lg:h-[444px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] h-[761px] inset-[0] w-[100%]"
                alt="placeholder"
              />
              <Text className="absolute font-normal inset-x-[0] leading-[normal] mx-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-center text-gray_800 top-[7%] w-[61%]">
                <span className="text-gray_800 font-poppins">
                  lbl_discover_our
                </span>
                <span className="text-gray_800 font-poppins font-bold">
                  msg_featured_produc
                </span>
              </Text>
            </Stack>
            <List
              className="gap-[0] min-h-[auto] w-[66%]"
              orientation="vertical"
            >
              <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] px-[0] w-[100%]">
                <Column className="items-center w-[100%]">
                  <Img
                    src="images/img_rectangle39.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Green <br />
                      Warm Jacket
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center w-[100%]">
                  <Img
                    src="images/img_rectangle39_1.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Black
                      <br />
                      Warm Jacket
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center w-[100%]">
                  <Img
                    src="images/img_rectangle39_2.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Blue Grey <br />
                      Warm Jacket
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center w-[100%]">
                  <Img
                    src="images/img_rectangle39_3.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[58%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Blue Denim <br />
                      Jacket
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Row className="justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                <Column className="items-center w-[23%]">
                  <Img
                    src="images/img_rectangle39_4.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[45%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Casual <br />
                      Pink Shirt
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center w-[23%]">
                  <Img
                    src="images/img_rectangle39_5.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[59%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      Gray T-shirt
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center w-[23%]">
                  <Img
                    src="images/img_rectangle39_6.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Purple <br />
                      Warm Jacket
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center w-[23%]">
                  <Img
                    src="images/img_rectangle39_7.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="Rectangle39"
                  />
                  <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[57%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      Red Flannel
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
              </Row>
            </List>
          </Row>
        </Column>
        <Stack className="lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] h-[579px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="absolute bg-gray_800 items-center top-[0] w-[100%]">
            <Text className="font-bold lg:mb-[183px] xl:mb-[209px] 2xl:mb-[235px] 3xl:mb-[282px] mb-[314px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[45px] 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[auto]">
              Limited Offer
            </Text>
          </Column>
          <List
            className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
            orientation="horizontal"
          >
            <Row className="bg-gray_50 items-center shadow-bs1 w-[100%]">
              <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[35%]">
                <Img
                  src="images/img_rectangle45.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  alt="Rectangle45"
                />
                <Button
                  className="font-bold ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[72%]"
                  size="md"
                >
                  Add to Cart
                </Button>
              </Column>
              <Column className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] w-[48%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Limited Deals
                </Text>
                <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between px-[0] w-[100%]">
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        08
                      </Text>
                      <Text className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                        Hours
                      </Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        58
                      </Text>
                      <Text className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                        Minutes
                      </Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        18
                      </Text>
                      <Text className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] 2xl:mx-[10px] 3xl:mx-[12px] mx-[14px] lg:mx-[8px] xl:mx-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                        Seconds
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Black Warm Jacket{" "}
                </Text>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Row className="items-center w-[100%]">
                    <Text className="font-normal line-through not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[144px] xl:mr-[164px] 2xl:mr-[185px] 3xl:mr-[222px] mr-[247px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      $199
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center shadow-bs1 w-[100%]">
              <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] my-[32px] w-[35%]">
                <Img
                  src="images/img_rectangle45_1.png"
                  className="lg:h-[163px] xl:h-[187px] 2xl:h-[210px] 3xl:h-[252px] h-[279px] lg:w-[162px] xl:w-[186px] 2xl:w-[209px] 3xl:w-[251px] w-[279px]"
                  alt="Rectangle45"
                />
                <Button
                  className="font-bold ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[72%]"
                  size="md"
                >
                  Add to Cart
                </Button>
              </Column>
              <Column className="lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] w-[48%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Limited Deals
                </Text>
                <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-3 items-center justify-between px-[0] w-[100%]">
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        08
                      </Text>
                      <Text className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                        Hours
                      </Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        58
                      </Text>
                      <Text className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                        Minutes
                      </Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                      <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        18
                      </Text>
                      <Text className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] 2xl:mx-[10px] 3xl:mx-[12px] mx-[14px] lg:mx-[8px] xl:mx-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                        Seconds
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Casual Grey Shoes
                </Text>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Row className="items-center w-[100%]">
                    <Text className="font-normal line-through not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                      $399
                    </Text>
                    <Text className="font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:mr-[144px] xl:mr-[164px] 2xl:mr-[185px] 3xl:mr-[222px] mr-[247px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      $199
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </List>
        </Stack>
        <Row className="lg:gap-[17px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[27px] gap-[30px] grid grid-cols-2 items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] px-[0] w-[85%]">
          <Column className="w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
              New Arrival
            </Text>
            <Column className="items-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] w-[100%]">
              <List
                className="gap-[0] min-h-[auto] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[97%]"
                orientation="vertical"
              >
                <Row className="items-center lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[100%]">
                  <Img
                    src="images/img_placeholder_27.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[28%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      Checkered Jacket
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                  <Img
                    src="images/img_placeholder_28.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[43px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] ml-[75px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[30%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      Blue Woman Denim
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center lg:mr-[37px] xl:mr-[42px] 2xl:mr-[48px] 3xl:mr-[57px] mr-[64px] lg:my-[36px] xl:my-[41px] 2xl:my-[46px] 3xl:my-[56px] my-[62.5px] w-[92%]">
                  <Img
                    src="images/img_placeholder_29.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[24%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      Orange Jeans
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                  <Img
                    src="images/img_placeholder_30.png"
                    className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    alt="placeholder"
                  />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[24%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      Classic Watch
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Row>
              </List>
              <Row className="items-center justify-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.5px] w-[14%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                  View all
                </Text>
                <Img
                  src="images/img_arrow_4.svg"
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] w-[29%]"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
          <Column className="w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
              Popular This Week
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] w-[85%]"
              orientation="vertical"
            >
              <Row className="items-center xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[99%]">
                <Img
                  src="images/img_placeholder_31.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[19%]">
                  <Column className="items-center w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        Blue Jeans
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
                <Img
                  src="images/img_placeholder_32.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[20%]">
                  <Column className="items-center w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        Wristwatch
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
              <Row className="items-center lg:my-[35px] xl:my-[40px] 2xl:my-[45px] 3xl:my-[54px] my-[60px] w-[100%]">
                <Img
                  src="images/img_placeholder_33.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[26%]">
                  <Column className="items-center w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        Elegant Jacket
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
                <Img
                  src="images/img_placeholder_34.png"
                  className="h-[107px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] 3xl:ml-[104px] ml-[116px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] w-[107px] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                  alt="placeholder"
                />
                <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[21%]">
                  <Column className="items-center w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        Gray Watch
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                    value={4}
                    starCount={5}
                    color="var(--gray_50)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1920}
                  ></RatingBar>
                </Column>
              </Row>
            </List>
            <Column className="items-center lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] mt-[76px] w-[100%]">
              <Row className="items-center justify-center w-[14%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                  View all
                </Text>
                <Img
                  src="images/img_arrow_5.svg"
                  className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] w-[29%]"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <Row className="bg-gray_50 items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Img
            src="images/img_truck.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Truck"
          />
          <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Free Delivery
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_card.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Card"
          />
          <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Payment Method
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_broken.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Broken"
          />
          <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Warranty
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Img
            src="images/img_support.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] 3xl:ml-[112px] ml-[125px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
            alt="Support"
          />
          <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[138px] xl:mr-[158px] 2xl:mr-[177px] 3xl:mr-[213px] mr-[237px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[11%]">
            <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Customer Support{" "}
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
        </Row>
        <footer className="w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]">
              <Column className="2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[22%]">
                <Row className="items-center w-[27%]">
                  <Img
                    src="images/img_group19_2.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] w-[35%]"
                    alt="Group19"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Elliye{" "}
                  </Text>
                </Row>
                <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[92%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
                </Text>
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Img
                        src="images/img_call.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        +1234567890
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_email.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        elliye@support.com
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="justify-center 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[49%]">
                <Column className="w-[26%]">
                  <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Product Links
                  </Text>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[41%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Categories
                    </Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      New Arrival
                    </Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Features
                    </Text>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Collections
                    </Text>
                  </Column>
                </Column>
                <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[26%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Company
                  </Text>
                  <Column className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      About
                    </Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Blog
                    </Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Careers
                    </Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Services
                    </Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Privacy Policy
                    </Text>
                    <Text className="font-normal mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Terms of service
                    </Text>
                  </Column>
                </Column>
                <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[41%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                    Join our Newsletter
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <Column className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                    <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                      <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 tracking-ls1 w-[auto]">
                        Enter your email
                      </Text>
                      <Img
                        src="images/img_submit.svg"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] mt-[96px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_100 w-[auto]">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV2Page;
