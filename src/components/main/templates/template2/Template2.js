import React from "react";
import { Input, Button, Form, Typography } from "antd";
import "../commoncss.css";
import "./template2.css";

const { Title } = Typography;
const { TextArea } = Input;

function Template2() {
  const validateMessages = {
    required: "${label} is required!",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Title level={2}>Education Template</Title>
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

        <div className="template2">
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
                                  <h2>
                                    Help people use your product or service.
                                  </h2>
                                  <p style={{ fontSize: "18px !important" }}>
                                    Show how to get the most out of your
                                    products or explain how to get involved with
                                    your organization.
                                  </p>
                                  <p style={{ fontSize: "18px !important" }}>
                                    First, replace&nbsp;the logo and change the
                                    full-width header to a different color or to
                                    a high-res image. Then, enter your content
                                    in the blocks below.
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
                                    title="Let's Get Started"
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
                                    Let's Get Started
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
                                    src="https://cdn-images.mailchimp.com/template_images/gallery/educate-full3.png"
                                    width={564}
                                    style={{ maxWidth: 564 }}
                                    className="mcnImage"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="mcnTextContent"
                                  valign="top"
                                  style={{ padding: "0 9px 0 9px" }}
                                  width={564}
                                >
                                  <h3>Choose your approach.</h3>
                                  <p>
                                    Outline your product's features, provide
                                    care instructions, or show how other people
                                    are using it.
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
                                    src="https://cdn-images.mailchimp.com/template_images/gallery/educate-full2.png"
                                    width={564}
                                    style={{ maxWidth: 564 }}
                                    className="mcnImage"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="mcnTextContent"
                                  valign="top"
                                  style={{ padding: "0 9px 0 9px" }}
                                  width={564}
                                >
                                  <h3>Share one idea at a time.</h3>
                                  <p>
                                    Breaking your content into small paragraphs
                                    keeps it easy to scan, especially for people
                                    reading on their phone.
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
                                    src="https://cdn-images.mailchimp.com/template_images/gallery/educate-full.png"
                                    width={564}
                                    style={{ maxWidth: 1128 }}
                                    className="mcnImage"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="mcnTextContent"
                                  valign="top"
                                  style={{ padding: "0 9px 0 9px" }}
                                  width={564}
                                >
                                  <h3>One last thing.</h3>
                                  <p>
                                    This is a good spot to share additional
                                    resources like downloadable content,
                                    available apps, or a product registration
                                    link.
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
                                            textAlign: "center",
                                          }}
                                        >
                                          <h3 style={{ textAlign: "center" }}>
                                            Happy to help.
                                          </h3>
                                          <p
                                            style={{
                                              textAlign: "center !important",
                                            }}
                                          >
                                            Let people know how to reach you
                                            with questions, or where to go for
                                            help if they need it.
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </>
  );
}

export default Template2;
