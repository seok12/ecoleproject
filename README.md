# ecoleproject

가상서버프로그램으로 vmware을 사용하였습니다
VMware Workstation을 설치후 실행
<img width="484" alt="스크린샷 2023-09-09 052508" src="https://github.com/seok12/ecoleproject/assets/48661266/270e8629-31ff-4136-b417-6998f0d7f061">

-----------------------------------------------------------------------

가상서버로 우분투를 설치하겠습니다
iso파일을 다운받고 create a New Virtual Machin을 클릭하여 새로운 가상 머신 생성을 합니다
가상머신 디스크에 iso 이미지 파일을 넣어주고 실행하고 
<img width="569" alt="스크린샷 2023-09-09 052942" src="https://github.com/seok12/ecoleproject/assets/48661266/b9c04b21-3a52-44ef-9f2c-1db52950ea95">
메모리와 다른 하드웨어 부분을 크기에 맞게 지정합니다

------------------------------------------------------------
생성되어 우분투를 실행합니다

ubuntu 실행을 하고 done 을 누르다보면 your name과 servername과 password를 입력을 해줍니다

<img width="642" alt="스크린샷 2023-09-09 051042" src="https://github.com/seok12/ecoleproject/assets/48661266/55fdd5f9-d65e-4fbc-a0e8-1eec53938476">


<img width="642" alt="스크린샷 2023-09-09 051231" src="https://github.com/seok12/ecoleproject/assets/48661266/bf3d161a-cf16-4d91-91f1-fba7cdbf06d8">

ip 주소도 입력해줍니다


<img width="642" alt="스크린샷 2023-09-09 050007" src="https://github.com/seok12/ecoleproject/assets/48661266/0322dd25-b99a-4ae8-9f86-f2d45fefd650">

계속해서 실행해주면 실행이 되지만

 CloudPanel couldn't be installed. Check the log above for errors that occurred in the install process.
 이라는 문구가 뜨게 됩니다
해석해보면 cloudpanel설치중 문제가 발생한것인데 알아보니 가상 프로그램으로 우분투를설치하는과정에서
현재 윈도우에 깔려있는 우분투와 충돌하여 발생하는 오류입니다
해결방법으로는 윈도우의 설정을 변경하여 독립적으로 실행하는 것인데 그렇게되면 다른 프로그램에 문제가 발생할수있고
또 다른 방법으로는 설치되어있는 우분투를 삭제하고 가상 프로그램을 다시 실행시키는 것입니다
하지만 공부해오던 데이터들이 삭제되는 것을 큰 부담이 되어서 다른 컴퓨터로 하는 방법을 선택했습니다

sudo apt update && sudo apt -y upgrade && sudo apt -y install curl wget sudo

업데이트 시킨후
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo bash install.sh

sudo apt-get install cockit
접근은 ip주소에 :9090 포트로 접속하고 계정은 ubuntu계정을 사용하면 접속이 가능합니다

추가로 window 10설치를 진행하였습니다

https://www.microsoft.com/ko-kr/software-download/windows10
여기 주소에서 도구 다운로드 iso다운을하여 사용하였습니다

<img width="451" alt="스크린샷 2023-09-09 041923" src="https://github.com/seok12/ecoleproject/assets/48661266/291e8cdd-4214-477e-aa70-267ba966e5ee">
실행시킨 화면이고 
 EFI VMware SATA CDROM Drive를 선택하면 윈도우 설치과정이 시작됩니다
 이곳에서 제품키 없음을 클릭하고 사용자 아이디와 비밀번호를입력하게 되면 정상적으로 실행됩니










