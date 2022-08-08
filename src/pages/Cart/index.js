import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  List,
  Stack,
  Input,
} from "components";

const CartPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/checkout");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Column className="bg-white_A700 items-center justify-end w-[100%]">
            <Row className="items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
              <Img
                src="images/img_group19_10.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[527px] xl:ml-[603px] 2xl:ml-[678px] 3xl:ml-[814px] ml-[904px] w-[2%]"
                alt="Group19"
              />
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                Elliye{" "}
              </Text>
              <Img
                src="images/img_icon_10.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[315px] xl:ml-[360px] 2xl:ml-[406px] 3xl:ml-[487px] ml-[541px] w-[4%]"
                alt="icon"
              />
              <Button className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[6%]">
                Login
              </Button>
            </Row>
            <Line className="bg-gray_50 h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[85%]" />
          </Column>
        </header>
        <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
          <Row className="items-center 2xl:mx-[108px] 3xl:mx-[129px] mx-[144px] lg:mx-[84px] xl:mx-[96px] w-[12%]">
            <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
              Home
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
              {">"}
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Shopping Cart
            </Text>
          </Row>
        </Column>
        <Text className="font-bold 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
          Shopping Cart
        </Text>
        <Row className="items-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[84%]">
          <Row className="items-center justify-between w-[41%]">
            <Row className="items-center w-[39%]">
              <Column className="border-2 border-gray_800 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                <Text className="font-medium my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  1
                </Text>
              </Column>
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                Shopping Cart
              </Text>
            </Row>
            <Line className="bg-gray_800 h-[2px] w-[58%]" />
          </Row>
          <Row className="items-center justify-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] ml-[57px] w-[40%]">
            <Row className="items-center w-[31%]">
              <Column className="border-2 border-bluegray_100 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                <Text className="font-medium my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 w-[auto]">
                  2
                </Text>
              </Column>
              <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 w-[auto]">
                Checkout
              </Text>
            </Row>
            <Line className="bg-bluegray_100 h-[2px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] w-[60%]" />
          </Row>
          <Row className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[14%]">
            <Column className="border-2 border-bluegray_100 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
              <Text className="font-medium my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 w-[auto]">
                3
              </Text>
            </Column>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_100 w-[auto]">
              Completed
            </Text>
          </Row>
        </Row>
        <Column className="2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[85%]">
          <Column className="items-center w-[100%]">
            <Column className="items-center w-[100%]">
              <Column className="items-center w-[100%]">
                <Column className="items-center w-[100%]">
                  <Row className="justify-between w-[100%]">
                    <Text className="font-medium mb-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Product
                    </Text>
                    <Row className="items-center justify-center lg:mr-[197px] xl:mr-[225px] 2xl:mr-[253px] 3xl:mr-[304px] mr-[338px] mt-[4px] w-[39%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Quantity
                      </Text>
                      <Text className="font-medium lg:ml-[134px] xl:ml-[154px] 2xl:ml-[173px] 3xl:ml-[208px] ml-[231px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Price
                      </Text>
                      <Text className="font-medium lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] ml-[232px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Total
                      </Text>
                    </Row>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
                </Column>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Stack className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]">
                        <Img
                          src="images/img_placeholder_75.png"
                          className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] justify-center m-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                          alt="placeholder"
                        />
                      </Stack>
                      <Text className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        Gray T-shirt
                      </Text>
                      <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[225px] ml-[250px] w-[10%]">
                        <Img
                          src="images/img_increase_1.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="increase"
                        />
                        <Img
                          src="images/img_decrease_1.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="decrease"
                        />
                        <Button
                          className="absolute font-medium inset-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[100%]"
                          variant="OutlineBluegray100"
                        >
                          1
                        </Button>
                      </Stack>
                      <Text className="font-medium 2xl:ml-[104px] 3xl:ml-[125px] ml-[139px] lg:ml-[81px] xl:ml-[92px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        $100.99
                      </Text>
                      <Text className="font-medium lg:ml-[108px] xl:ml-[124px] 2xl:ml-[139px] 3xl:ml-[167px] ml-[186px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        $100.99
                      </Text>
                      <Img
                        src="images/img_.svg"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:ml-[149px] xl:ml-[171px] 2xl:ml-[192px] 3xl:ml-[231px] ml-[257px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                        alt=""
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
                  </Column>
                  <Column className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Stack className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px] w-[200px]">
                        <Img
                          src="images/img_placeholder_76.png"
                          className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] justify-center m-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                          alt="placeholder"
                        />
                      </Stack>
                      <Text className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] ml-[66px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        Red Flannel
                      </Text>
                      <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] lg:ml-[148px] xl:ml-[170px] 2xl:ml-[191px] 3xl:ml-[229px] ml-[255px] w-[10%]">
                        <Img
                          src="images/img_increase_2.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="increase"
                        />
                        <Img
                          src="images/img_decrease_2.svg"
                          className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] left-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                          alt="decrease"
                        />
                        <Button
                          className="absolute font-medium inset-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[100%]"
                          variant="OutlineBluegray100"
                        >
                          1
                        </Button>
                      </Stack>
                      <Text className="font-medium 2xl:ml-[104px] 3xl:ml-[125px] ml-[139px] lg:ml-[81px] xl:ml-[92px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        $100.99
                      </Text>
                      <Text className="font-medium lg:ml-[108px] xl:ml-[124px] 2xl:ml-[139px] 3xl:ml-[167px] ml-[186px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                        $100.99
                      </Text>
                      <Img
                        src="images/img__1.svg"
                        className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.94px] lg:ml-[149px] xl:ml-[171px] 2xl:ml-[192px] 3xl:ml-[231px] ml-[257px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px] w-[33.94px]"
                        alt=""
                      />
                    </Row>
                    <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]" />
                  </Column>
                </List>
              </Column>
              <Row className="justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Stack className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] w-[28%]">
                  <Input
                    className="absolute font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_500 text-gray_500 tracking-ls1 w-[100%]"
                    wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                    name="Group82"
                    placeholder="Enter coupon code"
                  ></Input>
                  <Button
                    className="absolute font-normal not-italic right-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[30%]"
                    size="md"
                  >
                    Apply Code
                  </Button>
                </Stack>
                <Column className="w-[9%]">
                  <Text className="font-medium lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] ml-[97px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                    Total
                  </Text>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
                      $202.00
                    </Text>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Row className="items-center justify-end ml-[auto] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[25%]">
            <Button
              className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[50%]"
              variant="OutlineGray800"
            >
              Continue Shopping
            </Button>
            <Button
              className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[42%]"
              onClick={handleNavigate2}
            >
              Checkout
            </Button>
          </Row>
        </Column>
        <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="bg-gray_800 items-center justify-end w-[100%]">
            <Row className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[85%]">
              <Column className="w-[25%]">
                <Row className="items-center w-[27%]">
                  <Img
                    src="images/img_group19_11.svg"
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
                        src="images/img_call_5.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Call"
                      />
                      <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                        +1234567890
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_email_5.svg"
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
                        src="images/img_submit_5.svg"
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

export default CartPage;
