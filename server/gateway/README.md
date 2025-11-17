# API Gateway Service

Spring Cloud Gateway를 사용한 API Gateway 서비스입니다.

## 포트
- **9000**: API Gateway 포트

## 기능

### 라우팅 규칙

1. **Soccer Service**
   - 경로: `/api/soccer/**`
   - 대상: `soccer-service:8082/api/**`

2. **User Service**
   - 경로: `/api/user/**`
   - 대상: `user-service:8081/api/**`

3. **Common Service**
   - 경로: `/api/common/**`
   - 대상: `common-service:8080/api/**`

### CORS 설정
- 허용 Origin: `http://localhost:3000`, `http://ui-server-frontend:3000`
- 허용 Method: GET, POST, PUT, DELETE, PATCH, OPTIONS
- 허용 Header: 모든 헤더

## 빌드 및 실행

```bash
# 빌드
./gradlew build

# Docker로 실행
docker-compose up -d api-gateway
```

## 테스트

```bash
# Soccer Service 테스트
curl http://localhost:9000/api/soccer/players

# User Service 테스트
curl http://localhost:9000/api/user/profile

# Common Service 테스트
curl http://localhost:9000/api/common/health
```

