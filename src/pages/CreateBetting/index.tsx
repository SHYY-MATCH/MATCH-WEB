import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { createBetting } from "../../shared/lib/bettingApi";
import { CreateBettingRequest } from "../../shared/types/betting";
import * as S from "./style";

const CreateBetting = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CreateBettingRequest>({
    sportName: "",
    openedAt: "",
    teams: ["", ""],
  });

  const handleInputChange = (
    field: keyof CreateBettingRequest,
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTeamChange = (index: number, value: string) => {
    const newTeams = [...formData.teams];
    newTeams[index] = value;
    setFormData((prev) => ({
      ...prev,
      teams: newTeams,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 유효성 검사
    if (!formData.sportName.trim()) {
      alert("종목명을 입력해주세요.");
      return;
    }

    if (!formData.openedAt) {
      alert("마감 시간을 입력해주세요.");
      return;
    }

    const validTeams = formData.teams.filter((team) => team.trim());
    if (validTeams.length < 2) {
      alert("최소 2개 이상의 팀을 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      const request: CreateBettingRequest = {
        sportName: formData.sportName.trim(),
        openedAt: formData.openedAt,
        teams: validTeams.map((team) => team.trim()),
      };

      const response = await createBetting(request);
      alert(`배팅이 성공적으로 생성되었습니다! (ID: ${response.bettingId})`);
      navigate("/betting-list");
    } catch (error) {
      console.error("배팅 생성 실패:", error);
      alert("배팅 생성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <SideBar />
      <S.Main>
        <S.Content>
          <S.Title>새 배팅 생성</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label>종목명 *</S.Label>
              <S.Input
                type="text"
                value={formData.sportName}
                onChange={(e) => handleInputChange("sportName", e.target.value)}
                placeholder="예: 축구, 농구, 야구..."
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>마감 시간 *</S.Label>
              <S.Input
                type="datetime-local"
                value={formData.openedAt}
                onChange={(e) => handleInputChange("openedAt", e.target.value)}
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>팀 목록 * (2개)</S.Label>

              {formData.teams.map((team, index) => (
                <S.Input
                  key={index}
                  type="text"
                  value={team}
                  onChange={(e) => handleTeamChange(index, e.target.value)}
                  placeholder={`팀 ${index + 1}명`}
                  required
                />
              ))}
            </S.FormGroup>

            <S.ButtonGroup>
              <S.CancelButton
                type="button"
                onClick={() => navigate("/betting-list")}
              >
                취소
              </S.CancelButton>
              <S.SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? "생성 중..." : "배팅 생성"}
              </S.SubmitButton>
            </S.ButtonGroup>
          </S.Form>
        </S.Content>
      </S.Main>
    </S.Container>
  );
};

export default CreateBetting;
