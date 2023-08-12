import { Form, Input, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useContext } from "react";
import applyIcon from "../static/apply.svg";
import appliedIcon from "../static/applied.svg";
import loginIcon from "../static/login.svg";
import registerIcon from "../static/register.svg";
import { GlobalContext } from "..";
import { setToken } from "@/utils/token";
import CryptoJS from "crypto-js";

interface FormData {
  email: string;
  password?: string;
  passwordAgain?: string;
}

const EmailForm = () => {
  const [form] = useForm<FormData>();
  const { submitSuccess, setSubmitSuccess } = useContext(GlobalContext);
  const { passWaitlist, setPassWaitlist } = useContext(GlobalContext);
  const { registered, setRegistered } = useContext(GlobalContext);

  const onFinish = async (values: FormData) => {
    try {
      if (!submitSuccess) {
        // 初次提交信息
        if (!values.email) {
          message.error("请输入邮箱");
          return;
        }
        const res = await fetch(
          "https://www.copilot-m.top/auth/waitlist/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          },
        );
        const response = await res.json();
        console.log(response);
        if (response["message"] == "REGISTRATION.USER_ALREADY_PASS_WAITLIST") {
          setPassWaitlist(true);
        } else if (
          response["message"] == "REGISTRATION.USER_ALREADY_REGISTERED"
        ) {
          setPassWaitlist(true);
          setRegistered(true);
        }
        setSubmitSuccess(true);
      } else {
        // 获取到服务器反馈
        if (!passWaitlist) {
          // 未通过 Waitlist
          message.warning("您已经申请过了");
          return;
        } else {
          // 通过 Waitlist
          if (!registered) {
            // 注册
            if (!values.email) {
              message.error("请输入邮箱");
              return;
            }
            if (!values.password) {
              message.error("密码不能为空");
              return;
            }
            if (values.password != values.passwordAgain) {
              message.error("密码与确认密码不同");
              return;
            }
            console.log("hello");
            values.password = CryptoJS.SHA256(values.password).toString();
            console.log("hello");
            values.passwordAgain = undefined;
            console.log(values.password);
            const res = await fetch(
              "https://www.copilot-m.top/auth/email/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              },
            );
            const response = await res.json();
            if (response.success) {
              setRegistered(true);
            }
          } else {
            // 登陆
            if (!values.email) {
              message.error("请输入邮箱");
              return;
            }
            if (!values.password) {
              message.error("请输入密码");
              return;
            }
            values.password = CryptoJS.SHA256(values.password).toString();
            console.log(values.password);
            const res = await fetch(
              "https://www.copilot-m.top/auth/email/login",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              },
            );
            const response = await res.json();
            console.log(response);
            if (response.success) {
              setToken(response.data.token);
              window.location.reload();
            }
          }
        }
      }
    } catch (error) {
      message.error("网络错误，请稍后再试");
    }
  };

  return (
    <Form
      form={form}
      name="email_form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "23vw",
      }}
    >
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          {
            type: "email",
            message: "请输入有效的邮箱地址",
          },
          {
            required: true,
            message: "请输入邮箱",
          },
        ]}
        style={{ marginBottom: "4vh", width: "23vw" }}
      >
        <Input />
      </Form.Item>

      {passWaitlist ? (
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
          style={{ marginBottom: "4vh", width: "23vw" }}
        >
          <Input.Password />
        </Form.Item>
      ) : null}

      {passWaitlist && !registered ? (
        <Form.Item
          label="确认密码"
          name="passwordAgain"
          rules={[{ required: true, message: "请输入密码!" }]}
          style={{ marginBottom: "4vh", width: "23vw" }}
        >
          <Input.Password />
        </Form.Item>
      ) : null}

      <Form.Item>
        <input
          type="image"
          src={
            submitSuccess
              ? passWaitlist
                ? registered
                  ? loginIcon
                  : registerIcon
                : appliedIcon
              : applyIcon
          }
          alt="submit"
          style={{ width: "10vw" }}
        ></input>
      </Form.Item>
    </Form>
  );
};

export default EmailForm;
