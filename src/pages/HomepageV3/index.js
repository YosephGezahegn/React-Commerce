import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  Button,
  Grid,
  List,
  RatingBar,
} from "components";

const HomepageV3Page = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/categorieswithsidebar");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="items-center w-[100%]">
            <Column className="items-center w-[100%]">
              <Row className="bg-white_A700 items-center w-[100%]">
                <Row className="items-center justify-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[28%]">
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]"
                    onClick={handleNavigate7}
                  >
                    Categories
                  </Text>
                  <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    New Arrival
                  </Text>
                  <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    Features
                  </Text>
                  <Text className="cursor-pointer hover:font-bold font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    Collections
                  </Text>
                </Row>
                <Img
                  src="images/img_group19_3.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[124px] xl:ml-[142px] 2xl:ml-[159px] 3xl:ml-[191px] ml-[213px] w-[2%]"
                  alt="Group19"
                />
                <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[17px] xl:my-[20px] 2xl:my-[22px] 3xl:my-[27px] my-[30px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Elliye{" "}
                </Text>
                <Img
                  src="images/img_icon_6.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[345px] xl:ml-[394px] 2xl:ml-[444px] 3xl:ml-[533px] ml-[592px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[9%]"
                  alt="icon"
                />
              </Row>
              <Line className="bg-gray_50 h-[1px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[85%]" />
            </Column>
            <Row className="bg-white_A700 lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-9 items-center justify-center lg:pl-[188px] xl:pl-[215px] 2xl:pl-[242px] 3xl:pl-[290px] pl-[322.5px] lg:pr-[189px] xl:pr-[217px] 2xl:pr-[244px] 3xl:pr-[293px] pr-[325.5px] w-[100%]">
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_sweater_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Sweater"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  Jacket
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_tshirt_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Tshirt"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  Shirt
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_pants_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Pants"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  Pants
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_boot_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Boot"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                  Shoes
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_dress_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Dress"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  Dress
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_belt_2.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Belt"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[11px] lg:mx-[6px] xl:mx-[7px] 2xl:mx-[8px] 3xl:mx-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  Accesories
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_skirt_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Skirt"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  Skirt
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_bra.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Bra"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[10px] lg:mx-[5px] xl:mx-[6px] 2xl:mx-[7px] 3xl:mx-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  Underwear
                </Text>
              </Column>
              <Column className="bg-white_A700 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] items-center 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_dot.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Dot"
                />
                <Text className="font-normal lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
                  More
                </Text>
              </Column>
            </Row>
          </Column>
        </header>
        <Stack className="lg:h-[419px] xl:h-[480px] 2xl:h-[539px] 3xl:h-[647px] h-[718px] w-[100%]">
          <Img
            src="images/img_placeholder_35.png"
            className="absolute lg:h-[419px] xl:h-[480px] 2xl:h-[539px] 3xl:h-[647px] h-[718px] inset-[0] w-[100%]"
            alt="placeholder"
          />
          <Column className="absolute bg-white_A700_82 inset-[0] justify-center w-[100%]">
            <Button
              className="font-medium font-poppins xl:mt-[104px] 2xl:mt-[117px] 3xl:mt-[141px] mt-[157px] lg:mt-[91px] lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center w-[14%]"
              variant="FillWhiteA700"
            >
              50% Off Limited Offer
            </Button>
            <Text className="font-bold font-playfairdisplay lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-[72px] text-gray_800 w-[auto]">
              Summer Collection
            </Text>
            <Text className="font-normal font-poppins lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[35%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Row className="bg-gray_800 font-poppins items-center xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[141px] mb-[157px] lg:mb-[91px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] lg:mx-[165px] xl:mx-[188px] 2xl:mx-[212px] 3xl:mx-[254px] mx-[283px] w-[13%]">
              <Text className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] ml-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                Shop Now
              </Text>
              <Img
                src="images/img_arrow_6.svg"
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                alt="Arrow"
              />
            </Row>
          </Column>
        </Stack>
        <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
              Featured
            </Text>
            <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              View all
            </Text>
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[32%]">
              <Column className="items-center w-[100%]">
                <Img
                  src="images/img_rectangle39_8.png"
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
                  src="images/img_rectangle39_9.png"
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
                  src="images/img_placeholder_36.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="placeholder"
                />
                <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[66%]">
                  <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                    Black <br />
                    Warm Jacket
                  </Text>
                  <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    $299
                  </Text>
                </Column>
              </Column>
              <Column className="items-center w-[100%]">
                <Img
                  src="images/img_placeholder_37.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="placeholder"
                />
                <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]">
                  <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                    Black
                    <br />
                    Brief Case
                  </Text>
                  <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    $299
                  </Text>
                </Column>
              </Column>
            </Grid>
            <Column className="bg-gray_50 items-center w-[32%]">
              <Img
                src="images/img_placeholder_38.png"
                className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[100%]"
                alt="placeholder"
              />
              <Text className="font-medium leading-[normal] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-center text-gray_800 w-[55%]">
                Brown <br />
                Casual Sneaker
              </Text>
              <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_500 w-[auto]">
                $299
              </Text>
              <Button
                className="font-bold lg:mb-[32px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] mb-[55px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[38%]"
                size="md"
              >
                Add to Cart
              </Button>
            </Column>
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 w-[32%]">
              <Column className="items-center w-[100%]">
                <Img
                  src="images/img_rectangle39_10.png"
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
                  src="images/img_rectangle39_11.png"
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
              <Column className="w-[100%]">
                <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] items-center w-[100%]">
                  <Img
                    src="images/img_placeholder_39.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="placeholder"
                  />
                </Column>
                <Column className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Column className="items-center xl:mx-[10px] 2xl:mx-[12px] 3xl:mx-[14px] mx-[16px] lg:mx-[9px] w-[76%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Modern Classic
                      <br />
                      Watch
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="w-[100%]">
                <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] items-center w-[100%]">
                  <Img
                    src="images/img_placeholder_40.png"
                    className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                    alt="placeholder"
                  />
                </Column>
                <Column className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Column className="items-center lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] w-[71%]">
                    <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                      Casual <br />
                      Classic Watch
                    </Text>
                    <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Stack className="lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]">
          <Column className="absolute left-[2%] top-[8%] w-[13%]">
            <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
              New Arrival
            </Text>
            <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[100%]">
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </Column>
          <Stack className="absolute lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] inset-[0] w-[100%]">
            <div className="absolute bg-gray_800 lg:h-[249px] xl:h-[285px] 2xl:h-[320px] 3xl:h-[384px] h-[426px] left-[0] w-[24%]"></div>
            <List
              className="absolute lg:gap-[15px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] gap-[26.57px] grid grid-cols-4 inset-y-[0] min-h-[auto] my-[auto] right-[0] w-[83%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 items-center justify-center shadow-bs2 w-[100%]">
                <Img
                  src="images/img_blackbusiness.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] mt-[37.5px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="blackbusiness"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Black Briefcase
                </Text>
                <Text className="font-medium lg:mb-[21px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[33px] mb-[37.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="bg-white_A700 items-center justify-center shadow-bs2 w-[100%]">
                <Img
                  src="images/img_pink3tz3pbb1.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] mt-[37.5px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="pink3TZ3PBB1"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Pink Shirt
                </Text>
                <Text className="font-medium lg:mb-[21px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[33px] mb-[37.5px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="bg-white_A700 items-center justify-center mb-[0.72px] shadow-bs2 w-[100%]">
                <Img
                  src="images/img_graytshirtis.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37.14px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="graytshirtis"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Gray T-shirt
                </Text>
                <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37.14px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="bg-white_A700 items-center justify-center mt-[0.72px] shadow-bs2 w-[100%]">
                <Img
                  src="images/img_redcheckereds.png"
                  className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37.14px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]"
                  alt="redcheckereds"
                />
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Red Flannel
                </Text>
                <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37.14px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </List>
          </Stack>
        </Stack>
        <Row className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]">
          <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] w-[49%]">
            <Img
              src="images/img_rectangle28.png"
              className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] w-[100%]"
              alt="Rectangle28"
            />
            <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[28%]">
              <span className="text-white_A700 font-poppins">lbl_casual2</span>
              <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                lbl_collection
              </span>
            </Text>
          </Stack>
          <Stack className="lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[49%]">
            <Img
              src="images/img_rectangle29.png"
              className="absolute lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] h-[400px] inset-[0] w-[100%]"
              alt="Rectangle29"
            />
            <Text className="absolute font-normal h-[max-content] inset-y-[0] leading-[normal] left-[10%] my-[auto] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-white_A700 w-[28%]">
              <span className="text-white_A700 font-poppins">lbl_big_vibe</span>
              <span className="text-white_A700 text-[48px] font-playfairdisplay font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px]">
                lbl_collection
              </span>
            </Text>
          </Stack>
        </Row>
        <Stack className="lg:h-[212px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] h-[362px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Stack className="absolute lg:h-[212px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] h-[362px] inset-[0] w-[100%]">
            <div className="absolute bg-gray_800 lg:h-[181px] xl:h-[207px] 2xl:h-[232px] 3xl:h-[279px] h-[309px] top-[0] w-[100%]"></div>
            <List
              className="absolute bottom-[0] lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-4 inset-x-[0] min-h-[auto] mx-[auto] w-[85%]"
              orientation="horizontal"
            >
              <Row className="bg-white_A700 items-center shadow-bs3 w-[100%]">
                <Img
                  src="images/img_truck_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Truck"
                />
                <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46.5px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    Free Delivery
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
                    This free shipping
                    <br />
                    only for selected region
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
                <Img
                  src="images/img_card_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Card"
                />
                <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46.5px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    Payment Method
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
                    This free shipping
                    <br />
                    only for selected region
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
                <Img
                  src="images/img_broken_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Broken"
                />
                <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46.5px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
                  <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                    Warranty
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
                    This free shipping
                    <br />
                    only for selected region
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center shadow-bs3 w-[100%]">
                <Img
                  src="images/img_support_1.svg"
                  className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.5px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                  alt="Support"
                />
                <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[34px] 3xl:mr-[41px] mr-[46.5px] lg:my-[37px] xl:my-[42px] 2xl:my-[48px] 3xl:my-[57px] my-[64px] w-[55%]">
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
            </List>
          </Stack>
          <Text className="absolute font-bold left-[8%] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 top-[15%] w-[auto]">
            Why Choose Us
          </Text>
        </Stack>
        <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[85%]">
          <Row className="items-center justify-between w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
              Popular this Week
            </Text>
            <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              View all
            </Text>
          </Row>
          <List
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-6 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_placeholder_41.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[81%]">
                <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                  Black Adventure
                  <br />
                  Boots
                </Text>
                <RatingBar
                  className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_placeholder_42.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[64%]">
                <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                  Black Formal
                  <br />
                  Highheels
                </Text>
                <RatingBar
                  className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_placeholder_43.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[68%]">
                <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                  Brown <br />
                  Casual Shoes
                </Text>
                <RatingBar
                  className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </Column>
            <Column className="w-[100%]">
              <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] items-center w-[100%]">
                <Img
                  src="images/img_placeholder_44.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                  alt="placeholder"
                />
              </Column>
              <Column className="items-center lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[52%]">
                <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                  Gray <br />
                  Longpants
                </Text>
                <RatingBar
                  className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_placeholder_45.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[62%]">
                <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                  Green
                  <br />
                  Sport Jacket
                </Text>
                <RatingBar
                  className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </Column>
            <Column className="items-center w-[100%]">
              <Img
                src="images/img_placeholder_46.png"
                className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                alt="placeholder"
              />
              <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[58%]">
                <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                  Blue Denim <br />
                  Skirt
                </Text>
                <RatingBar
                  className="ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px]"
                  value={4}
                  starCount={5}
                  color="var(--gray_50)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 16) / 1920}
                ></RatingBar>
                <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </Column>
          </List>
        </Column>
        <Img
          src="images/img_brand_1.svg"
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] h-[68.29px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[50%]"
          alt="brand"
        />
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]">
              <Column className="2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[13%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Contacts
                </Text>
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Img
                        src="images/img_call_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        +1234567890
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_email_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Email"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        elliye@support.com
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Text className="font-bold lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Social Media
                </Text>
                <Img
                  src="images/img_sosmedia_1.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[49%]"
                  alt="sosmedia"
                />
              </Column>
              <Column className="w-[13%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Product Links
                </Text>
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[47%]">
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
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Discount
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Special Offer
                  </Text>
                </Column>
              </Column>
              <Column className="w-[13%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Column className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[60%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    About
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Blog
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Careers
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Services
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Privacy Policy
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Terms of service
                  </Text>
                </Column>
              </Column>
              <Column className="2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[20%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                  Join our Newsletter
                </Text>
                <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
                  Drop your email below to get update, promotions, coupons, and
                  more!
                </Text>
                <Column className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                  <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                    <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 tracking-ls1 w-[auto]">
                      Enter your email
                    </Text>
                    <Img
                      src="images/img_submit_1.svg"
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      alt="submit"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
            <Text className="font-normal lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-bluegray_100 w-[auto]">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomepageV3Page;
