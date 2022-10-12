import Input from "../atom/Input";
import Elements from "../atom/Elements";
import Button from "../atom/Button";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SignUpPage() {
  const [inputs, setInputs] = useState({
    accountId: "",
    password: "",
    email: "",
    name: "",
    nickname: "",
    age: "",
  });

  const navigate = useNavigate();

  const postSignup = (ev: any) => {
    ev.preventDefault();
    console.log("되냐?")
    if (inputs["accountId"] === "") {
      window.alert("아이디를 입력해주세요.");
      return;
    } else if (inputs["password"] === "") {
      window.alert("비밀번호를 입력해주세요.");
      return;
    } else if (inputs["email"] === "") {
      window.alert("이메일을 입력해주세요.");
      return;
    } else if (inputs["name"] === "") {
      window.alert("네임을 입력해주세요.");
      return;
    } else if (inputs["nickname"] === "") {
      window.alert("닉네임을 입력해주세요.");
      return;
    } else if (inputs["age"] === "") {
      window.alert("나이를 입력해주세요.");
      return;
    }

    axios({
      url: "api/user",
      method: "post",
      data: {
        accountId: inputs["accountId"],
        password: inputs["password"],
        email: inputs["email"],
        name: inputs["name"],
        nickname: inputs["nickname"],
        age: inputs["age"],
      },
    }).then((res) => {
        window.alert("회원가입 완료 !");
        return navigate("/Login");
      }).catch((error) => {
        if (error.response.status === 400) {
          window.alert(
            "이미 존재하는 아이디 입니다."
          );
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
    <div className="grid grid-cols-1 justify-items-center gap-7 mt-16">
      <form onSubmit={postSignup}>
        <div>
          <Elements>아이디</Elements>
          <Input type="text" onChange={(e:any) => setInputs({...inputs,"accountId":e.target.value})}></Input>
        </div>
        <div>
          <Elements>비밀번호</Elements>
          <Input type="password" onChange={(e:any) => setInputs({...inputs,"password":e.target.value})}></Input>
        </div>
        <div>
          <Elements>이메일</Elements>
          <Input type="email" onChange={(e:any) => setInputs({...inputs,"email":e.target.value})}></Input>
        </div>
        <div>
          <Elements>이름</Elements>
          <Input type="text" onChange={(e:any) => setInputs({...inputs,"name":e.target.value})}></Input>
        </div>
        <div>
          <Elements>닉네임</Elements>
          <Input type="text" onChange={(e:any) => setInputs({...inputs,"nickname":e.target.value})}></Input>
        </div>
        <div>
          <Elements>나이</Elements>
          <Input type="number" onChange={(e:any) => setInputs({...inputs,"age":e.target.value})}></Input>
        </div>
        <Button onClick={postSignup}>회원가입</Button>
      </form>

      <div className="grid grid-rows-2 grid-cols-2 gap-0 justify-items-center ml-16">
        <Button
          className="bg-[#F7E600] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-[#3A1D1D]"
          onClick={kakaoLogin}
        >
          <div className="flex items-center">
            <RiKakaoTalkFill className="mr-2" size="30" />
            카카오로 가입
          </div>
        </Button>
        <Button
          className="bg-[#2DB400] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-white"
          onClick={naverLogin}
        >
          <div className="flex items-center">
            <SiNaver className="mr-2" size="28" />
            네이버로 가입
          </div>
        </Button>
        <Button
          className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]"
          onClick={googleLogin}
        >
          <div className="flex items-center">
            <FcGoogle className="mr-2" size="30" />
            구글로 가입
          </div>
        </Button>
        <Button
          className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]"
          onClick={githubLogin}
        >
          <div className="flex items-center">
            <BsGithub className="mr-2" size="30" />
            깃허브로 가입
          </div>
        </Button>
      </div>
    </div>
  );
}
export default SignUpPage;
