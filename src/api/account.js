import AxiosService from "configs/axiosService";

const AccountService = {
  getInfo() {
    return AxiosService.get("/info").then((res) => {
      return res.data || { status: false };
    });
  }
};

export default AccountService;
