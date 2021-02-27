import AxiosService from 'config/axiosService';
function fakeLogin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'A',
        },
        status: true,
      });
    }, 1500);
  });
}
const AccountService = {
  getInfo() {
    return AxiosService.get('/info').then((res) => {
      return res.data || { status: false };
    });
  },
  getInfoFake() {
    return fakeLogin().then((res) => res.data || { status: false });
  },
};

export default AccountService;
