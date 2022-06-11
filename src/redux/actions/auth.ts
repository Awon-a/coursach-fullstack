export enum AuthActions {
  SIGN_UP = 'SIGN_UP',
  SUCCESS_SIGN_UP = 'SUCCESS_SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SUCCSESS_SIGN_IN = 'SUCCSESS_SIGN_IN',
}

export const requestAuthSuccess = (type: AuthActions, payload?: any) => ({
  type,
  payload,
});

export const requestAuthFailed = () => ({
  type: 'REQUEST_AUTH_FAILED',
});

export interface SignUpDto {
  email: string,
  
  password: string,
}

export interface SignInDto {
  email: string,
  
  password: string,
}

export interface SignUpAction {
  type: AuthActions.SIGN_UP,
  payload: SignUpDto,
}

export interface SingInAction {
  type: AuthActions.SIGN_IN,
  payload: SignInDto,
}

export interface SignUpDtoResponse {
  access_token: string,
  
  user: User,
}

export interface SignInDtoResponse {
  access_token: string,
  
  user: User,
}

export interface User {
  id: string,
  
  email: string,
  
  password: string,
  
  name: string;
}

export const login = (payload: SignInDto) => ({
  type: AuthActions.SIGN_IN,
  payload,
});

export const registration = (payload: SignUpDto) => ({
  type: AuthActions.SIGN_UP,
  payload,
})