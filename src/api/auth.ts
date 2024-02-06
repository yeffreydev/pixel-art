import { IUserLogin, IUserRegister } from "@/types/User";
import appConfig from "@/config/config";
const authApi = `${appConfig.host}/api/auth`;

export const apiRegisterUser = async (user: IUserRegister) => {
  try {
    const res = await fetch(`${authApi}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.log(e);
  }
};

export const apiLoginUser = async (user: IUserLogin) => {
  try {
    const res = await fetch(`${authApi}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    console.log(e);
  }
};
