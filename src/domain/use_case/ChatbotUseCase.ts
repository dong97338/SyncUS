import CodeResponse from "@/app/code_response";
import { blank } from "@/app/data";
import { Question, Result } from "@/app/types";
import OpenAIService from "@/data/service/open_ai_service";
import { 사용할 기능 콤마로 연결 } from 'firebase/firestore'

export default class ChatbotUseCase {
  private sessions: Map<number, string>;

  constructor() {
    this.sessions = new Map<number, string>();
  }


  async userQuery(userInput: string, userId: number, teamCode: number, date: Date): Promise<CodeResponse> {
    const open_ai_service = new OpenAIService();
    const response = await open_ai_service.getAnswer(userInput, userId, teamCode, date);



    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

    const messages = [
      { role: 'system', content: '당신은 요리법을 제공하는 요리사입니다. \n\n사용자가 제공한 재료 목록과 식사 유형, 매운 음식 여부, 양을 토대로 개인화된 요리와 그 재료 레시피를 제시합니다. 제외 음식은 빼고 추천합니다.\n\n- 레시피 섹션을 마지막으로 요약을 덧붙이지 마세요.' },
      { role: 'user', content: '재료: 고추기름, 전분, 양파, 레몬, 닭다리살 정육, 간장, 숙주, 마늘, 건고추, 고춧가루, 새우, 홍합, 식용유, 사과, 설탕, 청양고추, 다시마, 대파, 생강, 식용유, 홍고추, 청주, 달걀, 매실청, 소금, 후추, 맛술\n식사 유형: 안주\n매운 음식: O\n양: 1인분\n제외 음식: 깐풍기' },
      { role: 'assistant', content: '# 매콤 홍합볶음\n숙주와 함께 홍합을 매콤하게 볶아내면 그 자체로 훌륭한 안주가 되는데요. 아삭아삭한 숙주와 쫄깃쫄깃한 홍합의 식감이 조화롭게 어우진답니다. 밥 반찬으로도 아주 좋아요!\n\n## 재료\n### 기본 재료\n- 홍합: 250g\n- 식용유: 1작은술\n- 숙주: 25g\n- 대파: 1/8대\n- 양파: 1/8개\n- 통마늘: 1알\n- 청양고추: 1/2개\n- 홍고추: 1/4개\n\n### 양념 재료\n- 식용유: 1큰술\n- 고춧가루: 1/2큰술\n- 맛술: 1/2큰술\n- 간장: 1작은술\n- 설탕: 1작은술\n- 후춧가루: 약간\n\n## 레시피\n### Step 1\n홍합은 깨끗이 씻어 손질해 주세요.\n\n### Step 2\n대파와 고추는 송송썰고 양파는 굵게 채썰고 마늘은 편썰어 주세요.\n\n### Step 3\n팬에 식용유를 두르고 대파와 마늘을 넣고 5단에서 2분간 볶아주세요.\n\n### Step 4\n홍합과 양념 재료를 넣고 9단에서 3분 30초간 볶아주세요.\n\n### Step 5\n숙주를 넣고 9단에서 1분간 볶아주세요.\n\n### Step 6\n완성된 홍합볶음에 송송 썬 쪽파를 뿌려 맛있게 즐겨주세요.\n\n이 매콤한 홍합볶음은 간단하면서도 풍부한 맛을 자랑합니다. 숙주의 아삭함과 홍합의 쫄깃함이 매콤한 양념과 잘 어우러져, 밥 반찬은 물론 술안주로도 훌륭합니다.' },
      // 나머지 데이터 생략...
    ];

    // Firestore에 데이터 저장
    messages.forEach((message, index) => {
      db.collection("messages").add({
        id: index,
        role: message.role,
        content: message.content
      }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    });



    return new CodeResponse(response.result, response.errorCode, response.payload);
  }
  
  async sessionCreate(): Promise<CodeResponse> {
    const open_ai_service = new OpenAIService();
    const response = await open_ai_service.createSession();
    return new CodeResponse(response.result, response.errorCode, response.payload);
  }



}