
# 프로젝트 개요

이 프로젝트는 AI, 데이터베이스(DB), 및 원격 데이터(Remote Data) 모듈과 통신하는 Node.js 서버로 구성되어 있습니다. 각각의 기능은 `URIProcess/`에서 정의된 라우팅에 따라 요청을 처리하며, 모듈별(AI_URI_Process / DB_URI_Process / RD_URI_Process)로 별도의 라우팅 파일이 분리되어 관리됩니다.

## 디렉토리 구조

```
├── ReadMe.md
├── AI
│   ├── ai_api.js
│   └── funcs
│       ├── call_ai_func_using_localfunc.js
│       ├── call_ai_func_using_web.js
│       └── index.js
├── DB
│   ├── db_api.js
│   └── funcs
│       └── db_query_app.js
├── REMOTEDATA
│   ├── funcs
│   │   └── ex_TBD.js
│   └── remote_data_api.js
├── Tools
│   ├── Client
│   │   └── test_client
│   │       └── index.html
│   └── example_python_func
│       └── helloworld.py
├── index.js
├── MainServer.js
└── URIProcess
    ├── AI_URI_Process.js
    ├── DB_URI_Process.js
    └── RD_URI_Process.js
```

## 주요 파일 및 디렉토리 설명
### 1. **`MainServer.js`**
   - 이 파일은 서버의 진입점(entry point)입니다.
   - Express.js를 사용하여 AI, DB, Remote Data 모듈에 대한 요청을 처리하는 기본 설정이 포함되어 있습니다.
   - 클라이언트의 접속요청을 받아주고 약속된 [URI(
Uniform Resource Identifier)](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) 에 따라 지정된 요청에 따른 동작을 수행하고 결과를 반환해줍니다.
   - 각각의 모듈에 대한 라우팅은 `URIProcess` 디렉토리에 분리되어 있습니다.

### 2. **`URIProcess/`**
   - 이 디렉토리는 각 모듈(AI, DB, Remote Data)의 라우팅을 담당합니다.
   - **`AI_URI_Process.js`**: AI 모듈에 대한 API 요청을 처리합니다. `ai_api.js`에서 정의된 AI 관련 함수들을 호출합니다.
   - **`DB_URI_Process.js`**: DB 모듈에 대한 API 요청을 처리합니다. `db_api.js`데이터베이스 관련 작업을 수행합니다.
   - **`RD_URI_Process.js`**: Remote Data 모듈에 대한 API 요청을 처리합니다. `rb_api.js`원격 데이터 관련 함수들을 호출합니다.

### 3. Module Directorys
   - AI/ DB/ REMOTEDATA/ 디렉터리 안에 해당 기능에 대한 실제 코드들이 구현되어있습니다.
   - 아래에서 내용이 이어집니다.

#### 3-1. **`AI/`**
   - 이 디렉토리는 AI와 관련된 코드의 구현이 포함되어 있습니다.
   - **`ai_api.js`**: python으로 구현된 AI 모듈에 요청을 보내는 기능이 구현되어있습니다. 요청은 동일한 기기에 존재하는 파이썬 스크립트(local)와 원격지에서 존재하고있는 파이썬 스크립트(remote) 두가지로 나누어 보내는 것이 가능합니다.
   - **`funcs/`**: Remote Data 모듈에서 사용할 함수들이 여기에 저장됩니다. 추가적인 기능을 구현할 수 있는 자리입니다.

#### 3-2. **`DB/`**
   - 이 디렉토리는 DB 관련된 코드들이 포함되어 있습니다.
   - **`db_api.js`**: DB에 쿼리할 수 있는 로직이 포함되어 있습니다.
   - **`funcs/`**: Remote Data 모듈에서 사용할 함수들이 여기에 저장됩니다. 추가적인 기능을 구현할 수 있는 자리입니다.

#### 3-3. **`REMOTEDATA/`**
   - 이 디렉토리는 원격 데이터 모듈과 관련된 코드들이 포함되어 있습니다.
   - **`rd_api.js`**: 원격 데이터와 통신하는 로직이 포함되어 있습니다.
   - **`funcs/`**: Remote Data 모듈에서 사용할 함수들이 여기에 저장됩니다. 추가적인 기능을 구현할 수 있는 자리입니다.

### 4. **`Tools/`**
   - 이 디렉토리는 클라이언트 테스트 및 예시 Python 함수(for AI) 등이 포함되어 있습니다.
   - **`Client/test_client/`**: 간단한 웹 클라이언트 페이지로, Node.js 서버로 요청을 보낼 수 있는 HTML 파일(`index.html`)이 포함되어 있습니다.
   - **`example_python_func/`**: Python 함수를 테스트할 수 있는 예시 코드가 포함된 디렉토리입니다.
     - **`helloworld.py`**: 간단한 "Hello World" 출력을 위한 Python 예시 스크립트입니다.

### 5. **`ReadMe.md`**
   - 이 문서는 프로젝트 구조와 각 파일의 역할을 설명합니다.
   - 다른 개발자들이 이 프로젝트를 빠르게 이해하고 작업을 시작할 수 있도록 가이드 역할을 합니다.

## 서버 실행 방법

1. **Node.js 서버 실행**
   - 프로젝트 루트에서 다음 명령어를 사용하여 서버를 실행할 수 있습니다.
     ```bash
     node MainServer.js
     ```

2. **클라이언트 테스트**
   - `Tools/Client/test_client/index.html` 파일을 브라우저에서 열어 클라이언트 테스트를 진행할 수 있습니다.
   - 각각의 버튼을 눌러 서버의 AI, DB, Remote Data 모듈에 대한 요청을 보낼 수 있습니다.

2-1. **직접 URI 보내 테스트**
   - MainServer.js를 실행한 기기에서 아래와 같이 브라우저에서 직접 URI를 호출해 기능을 테스트할 수 있습니다.
   ```
        http://127.0.0.1:3000/ai/runlocalfunc
   ```
![image](https://github.com/user-attachments/assets/6a125d97-ed9f-4092-9b26-fc10fb394dbe)



## 앞으로 추가할 기능
- 각 모듈별로 함수들을 추가하여 AI, DB, Remote Data와의 통신을 강화할 예정입니다.
- 클라이언트와의 상호작용을 개선하기 위해 추가적인 테스트 페이지 및 응답 처리 로직을 개선할 계획입니다.
