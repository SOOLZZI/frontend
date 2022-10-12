import Input from "../atom/Input";
import Elements from "../atom/Elements";
import Button from "../atom/Button";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [inputs, setInputs] = useState({
    accountId: "",
    password: "",
  });

  const navigate = useNavigate();
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, accountId: e.target.value });
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, password: e.target.value });
  };

  const postLogin = (event: any) => {
    if (inputs["accountId"] === "") {
      window.alert("아이디를 입력해주세요.");
      return;
    } else if (inputs["password"] === "") {
      window.alert("비밀번호를 입력해주세요.");
      return;
    }
    console.log(inputs);
    event.preventDefault();

    axios({
      url: "api/user/login",
      method: "post",
      data: {
        accountId: inputs["accountId"],
        password: inputs["password"],
      },
    })
      .then((response) => {})
      .catch((error) => {
        if (error.response.status === 401) {
          window.alert("아이디와 비밀번호를 확인해주십시오.");
          return;
        }
      });
  };
  const kakaoLogin = () => {
    axios({
      url: "api/oauth2/kakao",
      method: "get",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error: ", error);
        window.alert("로그인에 실패하였습니다.");
      });
  };
  const naverLogin = () => {
    axios({
      url: "api/oauth2/naver",
      method: "get",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error: ", error);
        window.alert("로그인에 실패하였습니다.");
      });
  };
  const googleLogin = () => {
    axios({
      url: "api/oauth2/google",
      method: "get",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error: ", error);
        window.alert("로그인에 실패하였습니다.");
      });
  };
  const githubLogin = () => {
    axios({
      url: "api/oauth2/github",
      method: "get",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error: ", error);
        window.alert("로그인에 실패하였습니다.");
      });
  };

  return (
    <div className="grid grid-cols-1 justify-items-center gap-7 mt-28">
      <form onSubmit={postLogin}>
        <div className="m-5">
          <Elements>ID</Elements>
          <Input onChange={onChangeEmail}></Input>
        </div>

        <div className="m-5">
          <Elements>Password</Elements>
          <Input type="password" onChange={onChangePassword}></Input>
        </div>
      <Button>로그인</Button>
      </form>

      <Link to="/SignUp" className="text-gray-500 underline font-semibold mt-0">
        회원가입
      </Link>

      <div className="grid grid-rows-2 grid-cols-2 gap-0 justify-items-center ml-16">
        <Button
          className="bg-[#F7E600] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-[#3A1D1D]"
          onClick={kakaoLogin}
        >
          <div className="flex items-center">
            <RiKakaoTalkFill className="mr-2" size="30" />
            카카오 로그인
          </div>
        </Button>
        <Button
          className="bg-[#2DB400] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-white"
          onClick={naverLogin}
        >
          <div className="flex items-center">
            <SiNaver className="mr-2" size="28" />
            네이버 로그인
          </div>
        </Button>
        <Button
          className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]"
          onClick={googleLogin}
        >
          <div className="flex items-center">
            <FcGoogle className="mr-2" size="30" />
            구글 로그인
          </div>
        </Button>
        <Button
          className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]"
          onClick={githubLogin}
        >
          <div className="flex items-center">
            <BsGithub className="mr-2" size="30" />
            깃허브 로그인
          </div>
        </Button>
      </div>
    </div>
  );
}
export default LoginPage;
