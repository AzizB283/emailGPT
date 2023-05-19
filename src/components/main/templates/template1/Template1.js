import React from "react";
import { Input, Button, Form, Typography } from "antd";
import "./template1.css";
import "../commoncss.css";

const { TextArea } = Input;
const { Title } = Typography;

function Template1() {
  const validateMessages = {
    required: "${label} is required!",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Title level={2}>Announcement Template</Title>
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
                                <h4>Have an announcement to make?</h4>
                                <h1>Share your big news.</h1>
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
                  className="mcnImageGroupBlock"
                >
                  <tbody className="mcnImageGroupBlockOuter">
                    <tr>
                      <td
                        valign="top"
                        style={{ padding: 9 }}
                        className="mcnImageGroupBlockInner"
                      >
                        <table
                          align="left"
                          width={564}
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnImageGroupContentContainer"
                        >
                          <tbody>
                            <tr>
                              <td
                                className="mcnImageGroupContent"
                                valign="top"
                                style={{
                                  paddingLeft: 9,
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                }}
                              >
                                <img
                                  alt=""
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/announcement-full.png"
                                  width={564}
                                  style={{ maxWidth: 564, paddingBottom: 0 }}
                                  className="mcnImage"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        valign="top"
                        style={{ padding: 9 }}
                        className="mcnImageGroupBlockInner"
                      >
                        <table
                          align="left"
                          width={273}
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnImageGroupContentContainer"
                        >
                          <tbody>
                            <tr>
                              <td
                                className="mcnImageGroupContent"
                                valign="top"
                                style={{
                                  paddingLeft: 9,
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                }}
                              >
                                <img
                                  alt=""
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/announcement-sm1.png"
                                  width={264}
                                  style={{ maxWidth: 264, paddingBottom: 0 }}
                                  className="mcnImage"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          align="right"
                          width={273}
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          className="mcnImageGroupContentContainer"
                        >
                          <tbody>
                            <tr>
                              <td
                                className="mcnImageGroupContent"
                                valign="top"
                                style={{
                                  paddingRight: 9,
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                }}
                              >
                                <img
                                  alt=""
                                  src="https://cdn-images.mailchimp.com/template_images/gallery/announcement-sm1.png"
                                  width={264}
                                  style={{ maxWidth: 264, paddingBottom: 0 }}
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
                                  Announcements work best with a visually
                                  striking image followed by the details that
                                  people need to get involved.
                                </p>
                                <p>
                                  Start by replacing the full-width header and
                                  main images with your own, or use a{" "}
                                  <a
                                    href="https://mailchimp.com/help/view-and-edit-section-design/"
                                    className="mc-template-link"
                                    target="parent"
                                  >
                                    solid color background
                                  </a>
                                  .
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
                        style={{ minWidth: "100%", padding: "9px 18px" }}
                      >
                        <table
                          className="mcnDividerContent"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          style={{
                            minWidth: "100%",
                            borderTop: "1px solid #E0E0E0",
                          }}
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
                                <h3>Draw attention with a heading.</h3>
                                <p>
                                  Share your news in a sentence or 2, and
                                  consider using a list to show the most
                                  important details:
                                </p>
                                <ul>
                                  <li>Here's what's happening.</li>
                                  <li>Here's where it'll be.</li>
                                  <li>Here's when it starts and ends.</li>
                                </ul>
                                <p>
                                  Less is more here, since you're trying to get
                                  people to visit your site.
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
                                  title="Find Out More"
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
                                  Find Out More
                                </a>
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

export default Template1;
