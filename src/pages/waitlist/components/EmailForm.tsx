import { Form, Input, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useContext } from "react";
import applyIcon from "../static/apply.svg";
import appliedIcon from "../static/applied.svg";
import loginIcon from "../static/login.svg";
import registerIcon from "../static/register.svg";
import { GlobalContext } from "..";
import { setEmail, setToken } from "@/utils/token";
import CryptoJS from "crypto-js";
import { login, register, registerWaitlist } from "@/services/auth";

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
        const response = await registerWaitlist(values.email);
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
            values.password = CryptoJS.SHA256(values.password).toString();
            values.passwordAgain = undefined;
            const response = await register(values.email, values.password);
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
            const response = await login(values.email, values.password);
            if (response.success) {
              setToken(response.data.token);
              setEmail(values.email);
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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        maxWidth: "60vw",
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
      >
        <Input />
      </Form.Item>

      {passWaitlist ? (
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>
      ) : null}

      {passWaitlist && !registered ? (
        <Form.Item
          label="确认密码"
          name="passwordAgain"
          rules={[{ required: true, message: "请输入密码!" }]}
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
          style={{ maxWidth: "20rem" }}
        ></input>
      </Form.Item>
    </Form>
  );
};

export default EmailForm;
