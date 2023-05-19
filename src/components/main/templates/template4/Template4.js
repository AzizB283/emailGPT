import React from "react";
import { Input, Button, Form, Typography } from "antd";
import "../commoncss.css";
import "./template4.css";

const { TextArea } = Input;
const { Title } = Typography;

function Template4() {
  const validateMessages = {
    required: "${label} is required!",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Title level={2}>Showcase Template</Title>
      <center>
        <Form
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
            <h1>Showcase your products.</h1>

            <tr>
              <td valign="top" className="bodyContainer">
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
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/sell-products-full.png"
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
                                <h3>
                                  Feature the star of your collection first.
                                </h3>
                                <p>
                                  To get started, replace the image above with a
                                  striking product photo to catch people's
                                  attention.
                                </p>
                                <p>
                                  Then, describe what makes your product unique,
                                  useful, or gift-worthy. Be sure to highlight
                                  the main features, and let people know where
                                  it's available.
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
                                  title="Start Shopping"
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
                                  Start Shopping
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
                        style={{ minWidth: "100%", padding: 18 }}
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
                  className="mcnCaptionBlock"
                >
                  <tbody className="mcnCaptionBlockOuter">
                    <tr>
                      <td
                        className="mcnCaptionBlockInner"
                        valign="top"
                        style={{ padding: 9 }}
                      >
                        <table
                          align="left"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnCaptionBottomContent"
                          width={282}
                        >
                          <tbody>
                            <tr>
                              <td
                                className="mcnCaptionBottomImageContent"
                                align="center"
                                valign="top"
                                style={{ padding: "0 9px 9px 9px" }}
                              >
                                <img
                                  alt=""
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/sell-products-sm1.png"
                                  width={264}
                                  style={{ maxWidth: 264 }}
                                  className="mcnImage"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="mcnTextContent"
                                valign="top"
                                style={{ padding: "0 9px 0 9px" }}
                                width={282}
                              >
                                <h4>Related products</h4>
                                <p>
                                  Next, use this spot to mention any other
                                  products that pair well with your main
                                  feature.
                                </p>
                                <p>
                                  <a href="#">View similar products »</a>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          align="right"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnCaptionBottomContent"
                          width={282}
                        >
                          <tbody>
                            <tr>
                              <td
                                className="mcnCaptionBottomImageContent"
                                align="center"
                                valign="top"
                                style={{ padding: "0 9px 9px 9px" }}
                              >
                                <img
                                  alt=""
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/sell-products-sm2.png"
                                  width={264}
                                  style={{ maxWidth: 264 }}
                                  className="mcnImage"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="mcnTextContent"
                                valign="top"
                                style={{ padding: "0 9px 0 9px" }}
                                width={282}
                              >
                                <h4>What's on sale</h4>
                                <p>
                                  This is a good place to tell people about any
                                  current promotions at your store.
                                </p>
                                <p>
                                  <a href="#">Shop the sale »</a>
                                </p>
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

export default Template4;
