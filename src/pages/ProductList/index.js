import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Input,
  Line,
  CheckBox,
  List,
  RatingBar,
  Grid,
} from "components";

const ProductListPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/productdetails");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center w-[100%]">
            <Row className="items-center justify-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[6%]">
              <Img
                src="images/img_group19_4.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] w-[35%]"
                alt="Group19"
              />
              <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                Elliye{" "}
              </Text>
            </Row>
            <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] ml-[411px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] w-[31%]">
              <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 hover:text-gray_800 w-[auto]">
                Search here
              </Text>
              <Img
                src="images/img_button_1.svg"
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] ml-[397px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                alt="button"
              />
            </Row>
            <Img
              src="images/img_icon_7.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] w-[4%]"
              alt="icon"
            />
            <Button className="font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-center w-[6%]">
              Login
            </Button>
          </Row>
        </header>
        <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
          <Row className="items-center 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[11%]">
            <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
              Home
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
              {">"}
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Product List
            </Text>
          </Row>
        </Column>
        <Text className="font-bold 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
          Product List
        </Text>
        <Row className="2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[85%]">
          <Column className="w-[15%]">
            <Column className="items-center w-[100%]">
              <Column className="w-[100%]">
                <Input
                  className="font-medium p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_800 text-gray_800 w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Group49"
                  placeholder="Categories"
                  size="sm"
                  variant="UnderLine"
                ></Input>
                <Column className="lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[60%]">
                  <Row className="items-center w-[74%]">
                    <Img
                      src="images/img_sweater_3.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Sweater"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Jacket
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[60%]">
                    <Img
                      src="images/img_tshirt_3.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Tshirt"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                      Shirt
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[68%]">
                    <Img
                      src="images/img_pants_3.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Pants"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Pants
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[71%]">
                    <Img
                      src="images/img_boot_3.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Boot"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Shoes
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[67%]">
                    <Img
                      src="images/img_dress_3.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Dress"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Dress
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Img
                        src="images/img_belt_3.svg"
                        className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                        alt="Belt"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Accesories
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[59%]">
                    <Img
                      src="images/img_skirt_2.svg"
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="Skirt"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Skirt
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[93%]">
                    <Img
                      src="images/img_chevrondown.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="chevrondown"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      View more
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
            </Column>
            <Column className="lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[68%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Filter by Price
              </Text>
              <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Column className="w-[100%]">
                  <CheckBox
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group50"
                    label="All Price"
                  ></CheckBox>
                  <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[87%]">
                    <Img
                      src="images/img_checkedbox.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Checkedbox"
                    />
                    <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                      $100 - $250
                    </Text>
                  </Row>
                  <CheckBox
                    className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group51"
                    label="$250 - $500"
                  ></CheckBox>
                  <CheckBox
                    className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group52"
                    label="$750 - $1.000"
                  ></CheckBox>
                  <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                    <CheckBox
                      className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="Group53"
                      label="$1000 - $1.500"
                    ></CheckBox>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
            </Column>
            <Column className="lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[78%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                Filter by Rating
              </Text>
              <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Column className="w-[100%]">
                  <Row className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center px-[0] w-[33%]">
                    <Img
                      src="images/img_checkbox.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Checkbox"
                    />
                    <Img
                      src="images/img_star1.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Star1"
                    />
                  </Row>
                  <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[50%]">
                    <Img
                      src="images/img_checkbox_1.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Checkbox"
                    />
                    <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-2 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] px-[0] w-[58%]">
                      <Img
                        src="images/img_star1_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star1"
                      />
                      <Img
                        src="images/img_star2.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Star2"
                      />
                    </Row>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[83%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-between lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[80%]">
                      <Img
                        src="images/img_checkbox_2.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Checkbox"
                      />
                      <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-3 items-center justify-between px-[0] w-[69%]">
                        <Img
                          src="images/img_star1_2.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star1"
                        />
                        <Img
                          src="images/img_star2_1.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star2"
                        />
                        <Img
                          src="images/img_star3.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star3"
                        />
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                      <Img
                        src="images/img_checkedbox_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Checkedbox"
                      />
                      <Row className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] gap-[8px] grid grid-cols-4 items-center justify-between px-[0] w-[75%]">
                        <Img
                          src="images/img_star1_3.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star1"
                        />
                        <Img
                          src="images/img_star2_2.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star2"
                        />
                        <Img
                          src="images/img_star3_1.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star3"
                        />
                        <Img
                          src="images/img_star5.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          alt="Star5"
                        />
                      </Row>
                    </Row>
                  </List>
                  <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Img
                        src="images/img_checkbox_3.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Checkbox"
                      />
                      <RatingBar
                        className=""
                        value={5}
                        starCount={5}
                        activeColor="var(--yellow_400)"
                        size={((window.innerWidth - 15) * 24) / 1920}
                      ></RatingBar>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[83%]">
            <Row className="lg:gap-[519px] xl:gap-[594px] 2xl:gap-[668px] 3xl:gap-[802px] gap-[891px] grid grid-cols-2 items-center justify-between px-[0] w-[100%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[100%]">
                <span className="text-gray_500 font-poppins">lbl_viewing</span>
                <span className="text-gray_800 font-poppins">lbl_20</span>
                <span className="text-gray_500 font-poppins">lbl_of</span>
                <span className="text-gray_800 font-poppins">lbl_160</span>
                <span className="text-gray_500 font-poppins">lbl_product</span>
              </Text>
              <Row className="items-center justify-between w-[100%]">
                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                  <span className="text-gray_500 font-poppins">
                    lbl_sort_by
                  </span>
                  <span className="text-gray_800 font-poppins">
                    lbl_newest_items
                  </span>
                </Text>
                <Img
                  src="images/img_chevrondown_1.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  alt="chevrondown"
                />
              </Row>
            </Row>
            <Column
              className="common-pointer items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              onClick={handleNavigate6}
            >
              <Column className="items-center w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-5 items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] px-[0] w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Img
                        src="images/img_placeholder_47.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                        src="images/img_placeholder_48.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                        src="images/img_placeholder_49.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                        src="images/img_placeholder_50.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                    <Column className="items-center w-[100%]">
                      <Img
                        src="images/img_placeholder_51.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                  </Row>
                  <Row className="justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Column className="items-center w-[18%]">
                      <Img
                        src="images/img_placeholder_52.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                    <Column className="items-center w-[18%]">
                      <Img
                        src="images/img_placeholder_53.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                    <Column className="items-center w-[18%]">
                      <Img
                        src="images/img_placeholder_54.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
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
                    <Column className="items-center w-[18%]">
                      <Img
                        src="images/img_placeholder_55.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[56%]">
                        <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                          Casual <br />
                          Grey Shoes
                        </Text>
                        <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                          $299
                        </Text>
                      </Column>
                    </Column>
                    <Column className="items-center w-[18%]">
                      <Img
                        src="images/img_placeholder_56.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                      <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[56%]">
                        <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                          Pink Jacket
                        </Text>
                        <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                          $299
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </List>
                <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-5 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_57.png"
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
                      src="images/img_placeholder_58.png"
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
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_59.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                      alt="placeholder"
                    />
                    <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[76%]">
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
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_60.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                      alt="placeholder"
                    />
                    <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[58%]">
                      <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                        Blue Denim <br />
                        Skirt
                      </Text>
                      <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_61.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                      alt="placeholder"
                    />
                    <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[71%]">
                      <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                        Casual <br />
                        Classic Watch
                      </Text>
                      <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_62.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                      alt="placeholder"
                    />
                    <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[81%]">
                      <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                        Black Adventure
                        <br />
                        Boots
                      </Text>
                      <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <Column className="w-[100%]">
                    <Column className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] items-center w-[100%]">
                      <Img
                        src="images/img_placeholder_63.png"
                        className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                        alt="placeholder"
                      />
                    </Column>
                    <Column className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Column className="items-center lg:mx-[22px] xl:mx-[25px] 2xl:mx-[28px] 3xl:mx-[34px] mx-[38px] w-[64%]">
                        <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                          Black Formal
                          <br />
                          Highheels
                        </Text>
                        <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                          $299
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_64.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                      alt="placeholder"
                    />
                    <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[68%]">
                      <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                        Brown <br />
                        Casual Shoes
                      </Text>
                      <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_65.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                      alt="placeholder"
                    />
                    <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[52%]">
                      <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                        Gray <br />
                        Longpants
                      </Text>
                      <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center w-[100%]">
                    <Img
                      src="images/img_placeholder_66.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] h-[245px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px] w-[245px]"
                      alt="placeholder"
                    />
                    <Column className="items-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[62%]">
                      <Text className="font-medium leading-[normal] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-center text-gray_800 w-[100%]">
                        Green
                        <br />
                        Sport Jacket
                      </Text>
                      <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        $299
                      </Text>
                    </Column>
                  </Column>
                </Grid>
              </Column>
              <Row className="items-center justify-center ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[22%]">
                <Img
                  src="images/img_chevrondown_2.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  alt="chevrondown"
                />
                <Text className="bg-gray_800 flex font-normal items-center leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]">
                  1
                </Text>
                <Text className="border-2 border-gray_500 border-solid flex font-normal items-center leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">
                  2
                </Text>
                <Text className="border-2 border-gray_500 border-solid flex font-normal items-center leading-[normal] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">
                  3
                </Text>
                <Img
                  src="images/img_chevrondown_3.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  alt="chevrondown"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[85%]">
              <Column className="w-[25%]">
                <Row className="items-center w-[27%]">
                  <Img
                    src="images/img_group19_5.svg"
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
                        src="images/img_call_2.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        +1234567890
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_email_2.svg"
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
              <Row className="justify-between w-[57%]">
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
                <Column className="w-[26%]">
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
                <Column className="w-[41%]">
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
                        src="images/img_submit_2.svg"
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

export default ProductListPage;
