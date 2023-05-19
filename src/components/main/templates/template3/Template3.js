import React from "react";
import { Input, Button, Form, Typography } from "antd";
import "../commoncss.css";
import "./template3.css";

const { Title } = Typography;
const { TextArea } = Input;

function Template3() {
  const validateMessages = {
    required: "${label} is required!",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Title level={2}>Followup Template</Title>
      <center>
        <Form
          name="prompt"
          labelCol={{
            span: 8,
          }}
          style={{
            maxWidth: 600,
            margin: "20px",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
          validateMessages={validateMessages}
        >
          <Form.Item
            required
            rules={[
              {
                required: true,
                message: "Please enter prompt",
              },
            ]}
            name="prompt"
          >
            <TextArea placeholder="Enter your prompt here..." rows={4} />
          </Form.Item>

          <Form.Item
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <table
          align="center"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          width="100%"
          className="templateContainer"
        >
          <tbody>
            <tr>
              <td valign="top" className="bodyContainer">
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnTextBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnTextBlockOuter">
                    <tr>
                      <td
                        valign="top"
                        className="mcnTextBlockInner"
                        style={{ paddingTop: 9 }}
                      >
                        <table
                          align="left"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ maxWidth: "100%", minWidth: "100%" }}
                          width="100%"
                          className="mcnTextContentContainer"
                        >
                          <tbody>
                            <tr>
                              <td
                                valign="top"
                                className="mcnTextContent"
                                style={{
                                  paddingTop: 0,
                                  paddingRight: 18,
                                  paddingBottom: 9,
                                  paddingLeft: 18,
                                }}
                              >
                                <h1>Send a tailored follow-up email.</h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnDividerBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnDividerBlockOuter">
                    <tr>
                      <td
                        className="mcnDividerBlockInner"
                        style={{ minWidth: "100%", padding: "18px 18px 0px" }}
                      >
                        <table
                          className="mcnDividerContent"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          style={{ minWidth: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <span />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnImageBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnImageBlockOuter">
                    <tr>
                      <td
                        valign="top"
                        style={{ padding: 9 }}
                        className="mcnImageBlockInner"
                      >
                        <table
                          align="left"
                          width="100%"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnImageContentContainer"
                          style={{ minWidth: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td
                                className="mcnImageContent"
                                valign="top"
                                style={{
                                  paddingRight: 9,
                                  paddingLeft: 9,
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                  textAlign: "center",
                                }}
                              >
                                <img
                                  align="center"
                                  alt=""
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/follow-up-full.png"
                                  width={564}
                                  style={{
                                    maxWidth: 564,
                                    paddingBottom: 0,
                                    display: "inline !important",
                                    verticalAlign: "bottom",
                                  }}
                                  className="mcnImage"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnTextBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnTextBlockOuter">
                    <tr>
                      <td
                        valign="top"
                        className="mcnTextBlockInner"
                        style={{ paddingTop: 9 }}
                      >
                        <table
                          align="left"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ maxWidth: "100%", minWidth: "100%" }}
                          width="100%"
                          className="mcnTextContentContainer"
                        >
                          <tbody>
                            <tr>
                              <td
                                valign="top"
                                className="mcnTextContent"
                                style={{
                                  paddingTop: 0,
                                  paddingRight: 18,
                                  paddingBottom: 9,
                                  paddingLeft: 18,
                                }}
                              >
                                <p>
                                  Keep people involved by following up with a
                                  personal message or discount code. Start by
                                  replacing the full-width header with a
                                  different color or a high-res image.
                                </p>
                                <p>
                                  <strong>If you sell things,</strong> welcome
                                  new customers after a purchase, let lapsed
                                  customers know you miss them, or offer a deal
                                  to your best customers. If you've connected
                                  your store, try adding product or product
                                  recommendation blocks, too.
                                </p>
                                <p>
                                  <strong>If you don't sell things,</strong>{" "}
                                  welcome new subscribers to your list, thank
                                  people for attending an event, and let
                                  inactive subscribers know you miss them.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnDividerBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnDividerBlockOuter">
                    <tr>
                      <td
                        className="mcnDividerBlockInner"
                        style={{ minWidth: "100%", padding: "9px 18px 0px" }}
                      >
                        <table
                          className="mcnDividerContent"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          style={{ minWidth: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <span />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnButtonBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnButtonBlockOuter">
                    <tr>
                      <td
                        style={{
                          paddingTop: 0,
                          paddingRight: 18,
                          paddingBottom: 18,
                          paddingLeft: 18,
                        }}
                        valign="top"
                        align="center"
                        className="mcnButtonBlockInner"
                      >
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnButtonContentContainer"
                          style={{
                            borderCollapse: "separate !important",
                            borderRadius: 3,
                            backgroundColor: "#009FC7",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                align="center"
                                valign="middle"
                                className="mcnButtonContent"
                                style={{
                                  fontFamily: "Helvetica",
                                  fontSize: 18,
                                  padding: 18,
                                }}
                              >
                                <a
                                  className="mcnButton "
                                  title="Shop Now"
                                  href="#"
                                  target="_blank"
                                  style={{
                                    fontWeight: "bold",
                                    letterSpacing: "-0.5px",
                                    lineHeight: "100%",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    color: "#FFFFFF",
                                  }}
                                >
                                  Shop Now
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnDividerBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnDividerBlockOuter">
                    <tr>
                      <td
                        className="mcnDividerBlockInner"
                        style={{ minWidth: "100%", padding: "18px 18px 0px" }}
                      >
                        <table
                          className="mcnDividerContent"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          style={{ minWidth: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <span />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnBoxedTextBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnBoxedTextBlockOuter">
                    <tr>
                      <td valign="top" className="mcnBoxedTextBlockInner">
                        <table
                          align="left"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          style={{ minWidth: "100%" }}
                          className="mcnBoxedTextContentContainer"
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  paddingTop: 9,
                                  paddingLeft: 18,
                                  paddingBottom: 9,
                                  paddingRight: 18,
                                }}
                              >
                                <table
                                  border={0}
                                  cellSpacing={0}
                                  className="mcnTextContentContainer"
                                  width="100%"
                                  style={{
                                    minWidth: "100% !important",
                                    backgroundColor: "#F7F7F7",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        valign="top"
                                        className="mcnTextContent"
                                        style={{
                                          padding: 18,
                                          color: "#707070",
                                          fontFamily: "Helvetica",
                                          fontSize: 16,
                                          lineHeight: "200%",
                                          textAlign: "center",
                                        }}
                                      >
                                        <h3>Share what's new</h3>Let people know
                                        what you've been up to or what they
                                        might have missed.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  );
}

export default Template3;
