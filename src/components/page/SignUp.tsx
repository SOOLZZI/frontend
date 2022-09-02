import Input from "../atom/Input";
import Elements from "../atom/Elements";
import Button from "../atom/Button";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

function SignUpPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-7 mt-20">
      <div className="">
        <Elements>이메일</Elements>
        
        <Input></Input>
      </div>
      <div>
        <Elements>비밀번호</Elements>
        <Input></Input>
      </div>
      <div>
        <Elements>비밀번호 확인</Elements>
        <Input></Input>
      </div>
      <div>
        <Elements>닉네임</Elements>
        <Input></Input>
      </div>

      <Button>회원가입</Button>

      <div className="grid grid-rows-2 grid-cols-2 gap-0 justify-items-center ml-16">
      <Button className="bg-[#F7E600] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-[#3A1D1D]">
        <div className="flex items-center">
          <RiKakaoTalkFill className="mr-2" size="30" />
          카카오로 가입
        </div>
      </Button>
      <Button className="bg-[#2DB400] rounded-full m-4 w-50 py-2.5 px-7 font-bold text-white">
        <div className="flex items-center">
          <SiNaver className="mr-2" size="28" />
          네이버로 가입
        </div>
      </Button>
      <Button className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]">
        <div className="flex items-center">
          <FcGoogle className="mr-2" size="30" />
          구글로 가입
        </div>
      </Button>
      <Button className="rounded-full m-4 w-50 py-2.5 px-7 font-bold outline outline-2 outline-[#cdcdcd]">
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
