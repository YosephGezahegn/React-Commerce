import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Line, Input, Stack } from "components";

const CheckoutPage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/completed");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <Column className="w-[100%]">
          <Column className="items-center w-[100%]">
            <header className="w-[100%]">
              <Column className="bg-white_A700 items-center justify-end w-[100%]">
                <Row className="items-center justify-end lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Img
                    src="images/img_group19_12.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[527px] xl:ml-[603px] 2xl:ml-[678px] 3xl:ml-[814px] ml-[904px] w-[2%]"
                    alt="Group19"
                  />
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                    Elliye{" "}
                  </Text>
                  <Img
                    src="images/img_icon_11.svg"
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
          </Column>
          <Row className="items-center 2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[19%]">
            <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
              Home
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
              {">"}
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
              Shopping Cart
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 w-[auto]">
              {">"}
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
              Checkout
            </Text>
          </Row>
          <Column className="items-center lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] w-[100%]">
            <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-gray_800 w-[auto]">
              Checkout
            </Text>
            <Row className="items-center mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[84%]">
              <Row className="items-center w-[16%]">
                <Column className="border-2 border-gray_800 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                  <Text className="font-medium my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                    1
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                  Shopping Cart
                </Text>
              </Row>
              <Row className="items-center justify-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] w-[67%]">
                <Line className="bg-gray_800 h-[2px] w-[36%]" />
                <Row className="items-center justify-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] ml-[57px] w-[18%]">
                  <Column className="border-2 border-gray_800 border-solid lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] items-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]">
                    <Text className="font-medium my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                      2
                    </Text>
                  </Column>
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-gray_800 w-[auto]">
                    Checkout
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[2px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] w-[36%]" />
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
            <Row className="items-center justify-between lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]">
              <Column className="2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[34%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                  Buyer Info
                </Text>
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Column className="lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Full Name
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 w-[100%]"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                      name="Group96"
                      placeholder="Full Name"
                    ></Input>
                  </Column>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Address
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 w-[100%]"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                      name="Group98"
                      placeholder="Address"
                    ></Input>
                  </Column>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Contact
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 w-[100%]"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                      name="Group102"
                      placeholder="Contact"
                    ></Input>
                  </Column>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      City
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 w-[100%]"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                      name="Group108"
                      placeholder="City"
                    ></Input>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="w-[58%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        State
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                        name="Group95"
                        placeholder="Select State"
                        suffix={
                          <Img
                            src="images/img_vector_1.svg"
                            className="w-[9.94px] ml-[10px] mr-[39.06px] lg:w-[5px] lg:ml-[5px] lg:mr-[22px] xl:w-[6px] xl:ml-[6px] xl:mr-[26px] 2xl:w-[7px] 2xl:ml-[7px] 2xl:mr-[29px] 3xl:w-[8px] 3xl:ml-[9px] 3xl:mr-[35px] my-[auto]"
                            alt="Vector"
                          />
                        }
                      ></Input>
                    </Column>
                    <Column className="mr-[1px] w-[37%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Zip Code
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                        name="Group110"
                        placeholder="Zip Code"
                      ></Input>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="2xl:mr-[108px] 3xl:mr-[129px] mr-[144px] lg:mr-[84px] xl:mr-[96px] w-[42%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                  Payment Method
                </Text>
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Row className="lg:gap-[19px] xl:gap-[22px] 2xl:gap-[24px] 3xl:gap-[29px] gap-[33px] grid grid-cols-3 items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] px-[0] w-[100%]">
                    <Row className="border border-bluegray_100 border-solid items-center justify-center w-[100%]">
                      <Img
                        src="images/img_card_2.svg"
                        className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:my-[18px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] my-[31px] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                        alt="Card"
                      />
                      <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mr-[24px] xl:mr-[28px] 2xl:mr-[31px] 3xl:mr-[37px] mr-[42px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_800 w-[auto]">
                        Credit Card
                      </Text>
                    </Row>
                    <Stack className="h-[103px] lg:h-[61px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[93px] w-[100%]">
                      <Row className="absolute bg-gray_800 border border-bluegray_100 border-solid inset-[0] items-center w-[100%]">
                        <Img
                          src="images/img_transfer.svg"
                          className="lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] h-[33.15px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[34.42px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] ml-[36.33px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35.43px] lg:my-[20px] w-[14%]"
                          alt="TRANSFER"
                        />
                        <Text className="font-normal lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19.33px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[24px] 3xl:mr-[29px] mr-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                          Bank Transfer
                        </Text>
                      </Row>
                      <Img
                        src="images/img_transfer_1.svg"
                        className="absolute lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] inset-y-[0] left-[13%] my-[auto] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                        alt="transfer"
                      />
                    </Stack>
                    <Button
                      className="flex items-center justify-center text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_vector_2.svg"
                          className="w-[100%] text-center"
                          alt="Vector"
                        />
                      }
                      size="lg"
                      variant="OutlineBluegray100"
                    >
                      <div className="bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] w-[100%]">
                        Paypal
                      </div>
                    </Button>
                  </Row>
                  <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                      Name on Card
                    </Text>
                    <Input
                      className="placeholder:text-gray_500 w-[100%]"
                      wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                      name="Group100"
                      placeholder="Name on Card"
                    ></Input>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="w-[65%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Card Number
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                        name="Group104"
                        placeholder="Card Number"
                      ></Input>
                    </Column>
                    <Column className="w-[31%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        CVV
                      </Text>
                      <Input
                        className="placeholder:text-gray_500 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                        name="Group106"
                        placeholder="CVV"
                      ></Input>
                    </Column>
                  </Row>
                  <Row className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] px-[0] w-[100%]">
                    <Column className="w-[100%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Month
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                        name="Group93"
                        placeholder="Select Month"
                        suffix={
                          <Img
                            src="images/img_vector_3.svg"
                            className="w-[9.95px] ml-[10px] mr-[39.05px] lg:w-[5px] lg:ml-[5px] lg:mr-[22px] xl:w-[6px] xl:ml-[6px] xl:mr-[26px] 2xl:w-[7px] 2xl:ml-[7px] 2xl:mr-[29px] 3xl:w-[8px] 3xl:ml-[9px] 3xl:mr-[35px] my-[auto]"
                            alt="Vector"
                          />
                        }
                      ></Input>
                    </Column>
                    <Column className="w-[100%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[auto]">
                        Year
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                        wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] mt-[16px] w-[100%] xl:mt-[10px]"
                        name="Group94"
                        placeholder="Select Year"
                        suffix={
                          <Img
                            src="images/img_vector_4.svg"
                            className="w-[9.95px] ml-[10px] mr-[39.05px] lg:w-[5px] lg:ml-[5px] lg:mr-[22px] xl:w-[6px] xl:ml-[6px] xl:mr-[26px] 2xl:w-[7px] 2xl:ml-[7px] 2xl:mr-[29px] 3xl:w-[8px] 3xl:ml-[9px] 3xl:mr-[35px] my-[auto]"
                            alt="Vector"
                          />
                        }
                      ></Input>
                    </Column>
                  </Row>
                </Column>
                <Column className="items-end lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] w-[100%]">
                  <Button
                    className="common-pointer font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[31%]"
                    onClick={handleNavigate10}
                    size="md"
                  >
                    Checkout
                  </Button>
                </Column>
              </Column>
            </Row>
            <footer className="mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
              <Column className="bg-gray_800 items-center justify-end w-[100%]">
                <Row className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mt-[64px] w-[100%]">
                  <Column className="2xl:ml-[108px] 3xl:ml-[129px] ml-[144px] lg:ml-[84px] xl:ml-[96px] w-[22%]">
                    <Row className="items-center w-[27%]">
                      <Img
                        src="images/img_group19_13.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] w-[35%]"
                        alt="Group19"
                      />
                      <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                        Elliye{" "}
                      </Text>
                    </Row>
                    <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_500 w-[92%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor .
                    </Text>
                    <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center w-[100%]">
                          <Img
                            src="images/img_call_6.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            alt="Call"
                          />
                          <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-white_A700 w-[auto]">
                            +1234567890
                          </Text>
                        </Row>
                        <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_email_6.svg"
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
                        Drop your email below to get update, promotions,
                        coupons, and more!
                      </Text>
                      <Column className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] w-[100%]">
                        <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between w-[100%]">
                          <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] not-italic opacity-op5 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_100 tracking-ls1 w-[auto]">
                            Enter your email
                          </Text>
                          <Img
                            src="images/img_submit_6.svg"
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
        </Column>
      </Column>
    </>
  );
};

export default CheckoutPage;
