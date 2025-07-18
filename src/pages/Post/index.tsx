import { useRef, useState } from "react";
import * as S from "./style";
import SideBar from "../../components/SideBar";
import LeftArrow from "../../assets/Icons/LeftArrow";
import AddFile from "../../assets/Icons/AddFile";
import Button from "../../components/Button";
import File from "../../assets/Icons/File";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isActive = title.trim() !== "" && content.trim() !== "";

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <S.Container>
      <SideBar />
      <S.Main>
        <S.BackContainer onClick={() => navigate("/community")}>
          <LeftArrow />
          <S.BackText>돌아가기</S.BackText>
        </S.BackContainer>
        <S.MainWriteContainer>
          <S.WriteContainer>
            <S.WriteHeader>
              <S.TitleInput
                placeholder="제목을 입력해 주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <S.AddFileContainer onClick={handleFileUploadClick}>
                <S.AddFileText>파일 첨부</S.AddFileText>
                <AddFile />
              </S.AddFileContainer>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </S.WriteHeader>
            <S.Line />
            <S.MainWrite
              as="textarea"
              placeholder="게시글 내용을 입력해 주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {fileName && (
              <S.FileContainer>
                <span>{fileName}</span>
                <File />
              </S.FileContainer>
            )}
          </S.WriteContainer>
          <S.PostBtn>
            <Button text="게시하기" isActive={isActive} />
          </S.PostBtn>
        </S.MainWriteContainer>
      </S.Main>
    </S.Container>
  );
};

export default Post;
