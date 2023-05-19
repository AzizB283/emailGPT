import React from "react";
import { Input, Button, Form, Typography } from "antd";
import "../commoncss.css";
import "./template5.css";

const { TextArea } = Input;
const { Title } = Typography;

function Template5() {
  const validateMessages = {
    required: "${label} is required!",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Title level={2}>Story Template</Title>
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
                                <h1>Share your story.</h1>
                                <p style={{ textAlign: "center !important" }}>
                                  Newsletters keep people engaged with your
                                  brand. Share articles or videos, let people
                                  know about new products or promotions, or
                                  invite them to events.
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
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/tell-a-story-full.png"
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
                                <h4>The main story</h4>
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
                          style={{ maxWidth: 300 }}
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
                                  paddingLeft: 18,
                                  paddingBottom: 9,
                                  paddingRight: 18,
                                }}
                              >
                                Make your email easy to scan by leading with one
                                big feature or idea, like your latest blog post
                                or a new product feature.
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          align="left"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ maxWidth: 300 }}
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
                                  paddingLeft: 18,
                                  paddingBottom: 9,
                                  paddingRight: 18,
                                }}
                              >
                                Start by replacing the full-width header and
                                feature images with your own, or use a{" "}
                                <a
                                  href="https://mailchimp.com/help/view-and-edit-section-design/"
                                  className="mc-template-link"
                                  target="parent"
                                >
                                  solid color background
                                </a>
                                .
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
                                  title="Read More"
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
                                  Read More
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
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnCaptionRightContentOuter"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                valign="top"
                                className="mcnCaptionRightContentInner"
                                style={{ padding: "0 9px" }}
                              >
                                <table
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="mcnCaptionRightImageContentContainer"
                                  width={264}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="mcnCaptionRightImageContent"
                                        align="center"
                                        valign="top"
                                      >
                                        <img
                                          alt=""
                                          src="https://cdn-images.mailchimp.com/template_images/gallery/tell-a-story-sm.png"
                                          width={264}
                                          style={{ maxWidth: 264 }}
                                          className="mcnImage"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  className="mcnCaptionRightTextContentContainer"
                                  align="right"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width={264}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        valign="top"
                                        className="mcnTextContent"
                                      >
                                        <h3>Show off what you do</h3>
                                        <p>
                                          Replace the image with a photo of a
                                          new product or your latest project.
                                          Or, try dragging in other blocks like
                                          image cards and boxed text.
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
                        style={{ minWidth: "100%", padding: "27px 18px 0px" }}
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
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnCaptionLeftContentOuter"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                valign="top"
                                className="mcnCaptionLeftContentInner"
                                style={{ padding: "0 9px" }}
                              >
                                <table
                                  align="right"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="mcnCaptionLeftImageContentContainer"
                                  width={264}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="mcnCaptionLeftImageContent"
                                        align="center"
                                        valign="top"
                                      >
                                        <img
                                          alt=""
                                          src="https://cdn-images.mailchimp.com/template_images/gallery/tell-a-story-sm2.png"
                                          width={264}
                                          style={{ maxWidth: 264 }}
                                          className="mcnImage"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  className="mcnCaptionLeftTextContentContainer"
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width={264}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        valign="top"
                                        className="mcnTextContent"
                                      >
                                        <h3>Make articles more visual</h3>
                                        <p>
                                          Add visual interest by pairing a
                                          compelling image with your text to
                                          entice readers to click.
                                        </p>
                                        <p>
                                          <a href="#">Keep Reading</a>
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
                        style={{ minWidth: "100%", padding: "27px 18px 0px" }}
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
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnCaptionRightContentOuter"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                valign="top"
                                className="mcnCaptionRightContentInner"
                                style={{ padding: "0 9px" }}
                              >
                                <table
                                  align="left"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  className="mcnCaptionRightImageContentContainer"
                                  width={264}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        className="mcnCaptionRightImageContent"
                                        align="center"
                                        valign="top"
                                      >
                                        <img
                                          alt=""
                                          src="https://cdn-images.mailchimp.com/template_images/gallery/tell-a-story-sm3.png"
                                          width={264}
                                          style={{ maxWidth: 264 }}
                                          className="mcnImage"
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  className="mcnCaptionRightTextContentContainer"
                                  align="right"
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width={264}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        valign="top"
                                        className="mcnTextContent"
                                      >
                                        <h3>Upcoming events</h3>
                                        <p>
                                          Invite people to your next event, let
                                          them know about an upcoming sale, or
                                          give them a sneak peek at a new
                                          collection that’s coming soon.
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
      </center>
    </>
  );
}

export default Template5;
