import { AxiosResponse } from "axios";
import { Paths } from "../common/constants/Paths";
import $api from "../http";
import { SignInDto, SignInDtoResponse, SignUpDto, SignUpDtoResponse } from "../redux/actions/auth";

export default class AuthService {
  static async login(signInDto: SignInDto): Promise<AxiosResponse<SignInDtoResponse>> {
    return (await $api.post(Paths.LOGIN, signInDto)).data;
  }

  static async registration(signUpDto: SignUpDto): Promise<AxiosResponse<SignUpDtoResponse>> {
    return (await $api.post(Paths.REGISTRATION, signUpDto)).data;
  }

  static async logout() {
    return (await $api.post(Paths.LOGOUT)).data;
  }
}