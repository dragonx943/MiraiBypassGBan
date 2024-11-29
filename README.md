# Repo này đã bị lỗi thời, tôi đã không còn hứng thú với dự án này từ lâu nên code này chỉ mang mục đích lưu trữ cá nhân 🐧

<br />
<p align="center">
    <a href="https://github.com/miraiPr0ject/miraiv2">
        <img src="https://i.imgur.com/sxW5AWa.png" alt="Logo">
    </a>

<h3 align="center">MiraiBypassGBan</h3>

<p align="center">
    Bot Facebook Messenger đơn giản được làm bởi CatalizCS và SpermLord.
    <br />
    <br />
    <a href="https://github.com/miraiPr0ject/miraiv2/issues">Báo cáo lỗi</a>
    ·
    <a href="https://github.com/miraiPr0ject/miraiv2/pulls">Yêu cầu tính năng</a>
    </p>
</p>

<p align="center">
	<img alt="size" src="https://img.shields.io/github/repo-size/dragonx943/MiraiBypassGBan">
	<img alt="code-version" src="https://img.shields.io/github/package-json/v/dragonx943/MiraiBypassGBan?filename=package.json">
	<a href="https://github.com/miraiPr0ject/miraiv2/commits"><img alt="commits" src="https://img.shields.io/github/commit-activity/m/miraiPr0ject/miraiv2.svg?label=commit&style=flat-square"></a>
    	<img alt="visitors" src="https://visitor-badge.laobi.icu/badge?page_id=miraiPr0ject.miraiv2">
	
</p>

<!-- Mục lục -->
<details open="open">
    <summary>Mục lục</summary>
    <ol>
        <li><a href="#introduce">Giới thiệu</a></li>
        <li><a href="#Installation">Hướng dẫn cài đặt</a></li>
        <li><a href="#contributing">Đóng góp</a></li>
        <li><a href="#license">Bản quyền</a></li>
        <li><a href="#contact">Liên hệ</a></li>
    </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Giới thiệu
<p><strong>MiraiProject là gì?</strong></p>
<br />
<strong>MiraiProject</strong> thật chất là một dự án mang đến Messenger một trải nghiệm mới cho người dùng bằng cách xây dựng một hệ thống bot dành riêng cho messenger facebook. Dự án này được <strong>Catalizcs</strong>(Founder) và <strong>SpermLord</strong>(Co-Founder) xây dựng và duy trì. <strong>Bypass Global Ban (BypassGBan)</strong> bởi các idol khét tiếng trong giới <strong>Chatbot Force Community (Chatbot Bủh Community)</strong> như <strong>MaiHuyBao, OREO, JustGon, Hely-T, D-Jukie (Phạm Văn Diện),...Remaster bởi newbie: dragonx943</strong>
</p>

<!-- INSTALLATION -->
## Hướng dẫn cài đặt

Sau đây là các bước cơ bản để có thể cài đặt và vận hành.

### Yêu cầu

- Dung lượng của máy phải trống tầm 1-2 GB (tùy vào mục đích sử dụng và modules).
- Cần một số phần mềm chỉnh sửa file, khuyến khích sử dụng [notepad++](https://notepad-plus-plus.org/downloads/) hoặc [sublime text 3](https://www.sublimetext.com/3)
- Cần hiểu biết sơ lược qua về nodejs, javascript.
- Một tài khoản Facebook dùng để làm bot (Khuyến khích nên sử dụng acc đã bỏ hoặc không còn sử dụng để tránh mất acc hay acc bị khoá checkpoint).
- Đối với:
    - Windows: Cần cài đặt nodejs, python (khuyến khích Windows 7+)
    - Linux: Cần cài đặt v13 >= nodejs <= v18 cùng python3 hoặc python2.
    - Android: Sử dụng Termux hoặc UserLAnd để vận hành Bot (Android 5+)
    - iPhone, iPad: Sử dụng iSH Shell để vận hành Bot (iOS 11.0+)

### Cài Đặt

#### Windows

1. Tải về [Nodejs](https://nodejs.org/en/) và [git](https://git-scm.com/) sau đó cài đặt
    1. Nếu bạn dùng Windows 7 trở xuống và không thể cài đặt nodejs thì có thể tải file cài đặt nodejs [tại đây(win 64bit)](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x64.msi) hoặc [tại đây(win 32bit)](https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x86.msi)

2. Cài đặt [Python](https://www.python.org/downloads/windows/)

3. Clone source code của bot
    1. chuột phải ở folder cần cài đặt source code nhấn vào git bash
    2. nhập
    ```sh
    git clone https://github.com/dragonx943/MiraiBypassGBan
    ``` 

4. Cài đặt các package cần thiết
    1. Mở cmd/terminal ở thư mục Bot, LƯU Ý thư mục đó phải có file package.json
    2. Nhập
    ```sh
    npm i
    ```

5. Chỉnh sửa file config
    1. Mở file config.json thông qua notepad++ hoặc sublime text 3 đã cài đặt ở trên
    2. tùy chỉnh dấu lệnh, tên bot, developer mode, api token...
    3. Lưu và đóng lại

6. Lấy appstate: Bạn có thể sử dụng fbstate của c3c bot, nhưng cần đổi tên lại thành fbstate.json

7. Chạy bot và tận hưởng
    1. Nhập
    ```sh
      npm start
      ```
    2. Đợi Bot tải appstate, các file modules và tận hưởng!

#### Android

1. Nếu dùng UserLAnd:
	Tại giao diện chính của app, vui lòng chọn tải cài đặt hệ điều hành Ubuntu hoặc Debian và chờ đợi cho đến khi vào được giao diện giống với Termux. Sau đó nhập câu lệnh dành cho Linux vào Terminal của UserLAnd.

2. Nếu dùng Termux, vui lòng nhập dòng lệnh sau (Tự động cài đặt các gói cần thiết):
    ```sh
    bash <(curl -Ls https://raw.githubusercontent.com/dragonx943/MiraiBypassGBan-OREO/main/autoinstall-termux.sh)
    ```
3. Đợi mọi package cài đặt thành công là có thể tiếp tục

4. Clone bot & Lấy appstate
    ```sh
    git clone https://github.com/dragonx943/MiraiBypassGBan
    ```
    - Bạn có thể sử dụng fbstate của c3c bot, nhưng cần đổi tên lại thành fbstate.json

5. Về cách sử dụng, edit, vận hành
      1. Để chỉnh sửa file appstate của bot, vui lòng nhập:
      ```sh
      nano fbstate.json
      ```
      2. Để chỉnh sửa file config của bot, vui lòng nhập:
      ```sh
      nano config.json
      ```
      3. Để vận hành bot, bạn chỉ cần nhập
      ```sh
      npm start
      ```

#### Linux (Debian & Ubuntu):

1. Đăng nhập vào hệ điều hành với quyền quản trị viên (Root) và gõ câu lệnh sau (Tự động cài đặt các gói cần thiết):
      ```sh
      bash <(curl -Ls https://raw.githubusercontent.com/dragonx943/MiraiBypassGBan-OREO/main/autoinstall-linux.sh)
      ```
2. Chờ cho đến khi cài đặt hoàn tất, thực hiện bước 4 và 5 của mục dành cho Android

**LƯU Ý ĐẶC BIỆT**: Tuyệt đối không dùng lệnh này cho Termux, vì rất có thể sẽ xảy ra lỗi ngoài ý muốn do không đủ các gói cần thiết. Chú ý đường truyền kết nối mạng, đặc biệt là **BẮT BUỘC** phải đăng nhập dưới quyền của người dùng quản trị viên (**Root**)

#### iPhone/iPad

1. Nhập câu lệnh sau vào app iSH Shell (Tự động cài đặt các gói cần thiết):
      ```sh
      ash <(curl -Ls https://raw.githubusercontent.com/dragonx943/MiraiBypassGBan-OREO/main/autoinstall-alpine.sh)
      ```
2. Chờ cho đến khi cài đặt xong thì thực hiện giống bước 4 và 5 của mục dành cho Android

**Lưu ý**:
- iSH Shell hoặc Alpine Linux cần có curl. Nếu Terminal báo lỗi "-ash: curl: not found", vui lòng cài đặt curl bằng "apk add curl".
- Trong quá trình thực thi câu lệnh và cài đặt, nếu Terminal của bạn không phản hồi hoặc không đưa kết quả ra màn hình, vui lòng kiểm tra lại đường truyền kết nối mạng và thử cài đặt lại !!!

#### Replit/Github

Ngoài các cách nêu trên thì đa số hiện nay mọi người đều lựa chọn Host Bot Mirai trên các dịch vụ Cloud như Replit, Github, Glitch,...Trong mục README.md này mình sẽ chỉ đưa ra cách Host ở Github FREE:

**1**. **Trên Github**:
1. Tạo tài khoản
2. Đăng nhập sau đó **Fork** lại Repo này vào tài khoản của bạn
3. Từ Repo bạn đã Fork, ấn vào mục **Code** (trên điện thoại Chrome cần phải ở chế độ **Trang web cho máy tính** mới có nút này) sau đó qua tab Codespaces, ấn dấu + (có thể ấn dấu **...** để tùy chỉnh cấu hình của máy ảo) để tạo máy ảo mới. Từ giao diện từ Github Codespaces (giống với Visual Studio Code) ấn vào ☰ > Terminal > New Termial
4. Nhập câu lệnh sau vào Terminal:
    ```sh
    npm i
    ```
5. Tạo file appstate, sửa config.json và thêm modules (nếu có)
6. Chạy Bot:
    ```
    node .
    ```

**Lưu ý**:
- Nhìn chung thì đây vẫn là dịch vụ giúp chạy và treo Bot tốt, tuy nhiên sẽ có 1 số vấn đề: Github rất dễ cài đặt (Các Package và Service đã được cài sẵn), Free, cấu hình cao (2 cores + 4gb ram / 4 cores + 8gb ram - 32gb) nhưng rất khó để treo 24/24 hoặc dùng ở trình duyệt của điện thoại!

#### Video hướng dẫn cài đặt

1. Windows: [Tutorial install for win 10(WIP)]()
2. Linux: [Tutorial install for linux/ubuntu(WIP)]()
3. Android: [Tutorial install for android using termux](https://www.youtube.com/watch?v=xWvzbhA2_jk)


<!-- CONTRIBUTING -->
## Đóng góp

Sự đóng góp của bạn sẽ khiến cho project ngày càng tốt hơn, các bước để bạn có thể đóng góp

1. Fork project này
2. Tạo một branch mới chứa tính năng của bạn (`git checkout -b feature/AmazingFeature`)
3. Commit những gì bạn muốn đóng góp (`git commit -m 'Add some AmazingFeature'`)
4. Đẩy branch chứa tính năng của bạn lên (`git push origin feature/AmazingFeature`)
5. Tạo một pull request mới và sự đóng góp của bạn đã sẵn sàng để có thể đóng góp!

<!-- LICENSE -->
## Bản quyền

This project is licensed under the GNU General Public License v3.0 License - see the [LICENSE](LICENSE) file.

<!-- CONTACT -->
## Liên hệ

CatalizCS - [Facebook](https://facebook.com/CatalizCS) - [GitHub](https://github.com/catalizcs) - miraiv2.official@gmail.com

SpermLord - [GitHub](https://github.com/spermlord) - [Facebook](https://fb.me/MyNameIsSpermLord)
