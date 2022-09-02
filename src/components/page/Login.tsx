import Input from "../atom/Input";
import Elements from "../atom/Elements";
import Button from "../atom/Button";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import {Link} from "react-router-dom";

function LoginPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-7 mt-28">
      <div className="">
        <Elements>이메일</Elements>
        
        <Input></Input>
      </div>
      <div>
        <Elements>비밀번호</Elements>
        <Input></Input>
      </div>

      <Button>로그인</Button>
      <Link to="/SignUp" className="text-gray-500 underline font-semibold mt-0">
            회원가입
        </Link>
      <div className="grid grid-rows-2 grid-cols-2 gap-0 justify-items-center ml-16">
      <Button className="bg-[#F7E600] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-[#3A1D1D]">
        <div className="flex items-center">
          <RiKakaoTalkFill className="mr-2" size="30" />
          카카오 로그인
        </div>
      </Button>
      <Button className="bg-[#2DB400] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-white">
        <div className="flex items-center">
          <SiNaver className="mr-2" size="28" />
          네이버 로그인
        </div>
      </Button>
      <Button className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]">
        <div className="flex items-center">
          <FcGoogle className="mr-2" size="30" />
          구글 로그인
        </div>
      </Button>
      <Button className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]">
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
